import React, { useCallback, useMemo, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Container, Spacer } from '@components/layout';
import { FieldValues, useForm } from 'react-hook-form';
import { TextInput } from '@components/form';
import { PrimaryButton, Text } from '@components/ui';
import { useRecoilValue } from 'recoil';
import selectedAccountState from '@features/account/selected-account.state';
import { utils } from 'ethers';
import { parseAmount } from '@services/tokens/amount';
import { isAllowedNumericInputValue, isValidAddress } from '@utils/validator';
import colors from '@styles/colors';
import styled from 'styled-components/native';
import useMaxFeeEstimateForTransfer from '../hooks/useMaxFeeForTransfer';
import { Call, getChecksumAddress, number, stark } from 'starknet';
import {
  RouteProp,
  StackActions,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { ScreenNavigationProps } from '@router/navigation-props';
import { getUint256CalldataFromBN } from '@services/transaction';
import { useBalance } from '../hooks/useBalance';
import { Token } from '@services/tokens/token.model';
import AndroidHeaderFix from '@components/layout/AndroidHeaderFix';
import ScreenNames from '@router/screenNames';
import { SendTokenTransactionReview } from '@features/transactions/transactionReview.type';

type Props = {};

const Floating = styled.TouchableOpacity`
  position: absolute;
  top: 0px;
  right: 0px;
`;

type ParamsList = {
  'send:token': {
    token: Token;
  };
};

const SendTokenScreen = (props: Props) => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
    getValues,
  } = useForm<FieldValues>({
    defaultValues: {
      amount: '',
      recipient: '',
    },
    mode: 'onChange',
  });
  const navigation = useNavigation<ScreenNavigationProps<any>>();
  const route = useRoute<RouteProp<ParamsList>>();
  const selectedAccount = useRecoilValue(selectedAccountState);
  const token = route.params.token;

  const { data: balance } = useBalance(token?.address, selectedAccount);

  const parsedBalance = useMemo(
    () => parseAmount(utils.formatUnits(balance || '0'), token?.decimals),
    [balance]
  );

  const {
    maxFee,
    error: maxFeeError,
    loading: maxFeeLoading,
  } = useMaxFeeEstimateForTransfer({
    tokenAddress: token?.address!,
    account: selectedAccount!,
    balance: parsedBalance,
  });

  const onUseMax = () => {
    if (balance && maxFee) {
      const maxAmount = parsedBalance.sub(number.toHex(maxFee));
      const formattedMaxAmount = utils.formatUnits(maxAmount, token?.decimals);

      setValue(
        'amount',
        maxAmount.lte(0)
          ? utils.formatUnits(balance, token?.decimals)
          : formattedMaxAmount,
        {
          shouldValidate: true,
        }
      );
    }
  };

  const isSufficientAmount = (value: string): boolean => {
    const parsedAmount = parseAmount(value ?? '0', token?.decimals);

    if (balance && maxFee) {
      const maxAmount = parsedBalance.sub(number.toHex(maxFee));
      return parsedAmount.lte(maxAmount);
    }

    return parsedAmount.lte(parsedBalance);
  };

  const onNext = () => {
    handleSubmit(async (values) => {
      const call: Call = {
        contractAddress: token.address,
        entrypoint: 'transfer',
        calldata: stark.compileCalldata({
          recipient: values.recipient,
          amount: getUint256CalldataFromBN(
            parseAmount(values.amount, token?.decimals)
          ),
        }),
      };

      const transactionReview: SendTokenTransactionReview = {
        type: 'send',
        amount: values.amount,
        to: values.recipient,
        token,
      };

      navigation.dispatch(
        StackActions.replace(ScreenNames.ACCOUNT_TRANSACTION_APPROVAL, {
          transactions: call,
          transactionReview,
        })
      );
    })();
  };

  return (
    <Container center={false}>
      <AndroidHeaderFix />
      <Spacer height={20} />
      <View>
        <TextInput
          name="amount"
          placeholder="Ex: 0.00002"
          control={control}
          label="Amount"
          inputProps={{
            keyboardType: 'decimal-pad',
          }}
          errorMessages={{
            isAllowedNumericInputValue: 'Invalid amount',
            isSufficientAmount: 'Insufficient amount',
          }}
          rules={{
            required: 'Required',
            validate: {
              isAllowedNumericInputValue,
              isSufficientAmount,
            },
          }}
          transformValue={(v) => v.replace(/,/g, '.')}
        />
        {maxFeeLoading ? (
          <Floating>
            <ActivityIndicator color={colors.white} size="small" />
          </Floating>
        ) : (
          <Floating onPress={onUseMax}>
            <Text size={16} weight={500} color={colors.blue}>
              Use max
            </Text>
          </Floating>
        )}
      </View>
      <TextInput
        name="recipient"
        placeholder="Address"
        control={control}
        label="Recipient's address"
        errorMessages={{
          isValidAddress: 'Invalid address',
        }}
        rules={{
          required: 'Required',
          validate: { isValidAddress: isValidAddress },
        }}
        transformValue={(v) => {
          if (!v) return v;
          try {
            return getChecksumAddress(v);
          } catch (error) {
            return v;
          }
        }}
      />
      <Spacer height={8} />
      <PrimaryButton label="Next" onPress={onNext} />
    </Container>
  );
};

export default SendTokenScreen;
