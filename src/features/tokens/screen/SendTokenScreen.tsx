import React, { useCallback, useMemo, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Container, SafeArea, Spacer } from '@components/layout';
import { FieldValues, useForm } from 'react-hook-form';
import { TextInput } from '@components/form';
import { PrimaryButton, Text } from '@components/ui';
import { transfer } from '@services/tokens';
import { useRecoilValue } from 'recoil';
import selectedAccountState from '@features/account/selected-account.state';
import networkState from '@features/network/network.state';
import { utils } from 'ethers';
import { parseAmount } from '@services/tokens/amount';
import { isAllowedNumericInputValue, isValidAddress } from '@utils/validator';
import colors from '@styles/colors';
import styled from 'styled-components/native';
import useMaxFeeEstimateForTransfer from '../hooks/useMaxFeeForTransfer';
import { number } from 'starknet';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { ScreenNavigationProps } from '@router/navigation-props';
import { addTransaction } from '@services/transaction';
import { useBalance } from '../hooks/useBalance';
import { Token } from '@services/tokens/token.model';
import Toast from 'react-native-root-toast';

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
  } = useForm<FieldValues>({
    defaultValues: {
      amount: '',
      recipient: '',
      // '0x3eae8126702bbf06de496dbf9b745ee423a3b4836aa35dd2b3d2e6c10323f9d',
      // for testing only
    },
    mode: 'onChange',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const onUseMax = useCallback(() => {
    if (balance && maxFee) {
      const maxAmount = parsedBalance.sub(number.toHex(maxFee));
      const formattedMaxAmount = utils.formatUnits(maxAmount, token?.decimals);

      setValue(
        'amount',
        maxAmount.lte(0)
          ? utils.formatUnits(balance, token?.decimals)
          : formattedMaxAmount
      );
    }
  }, [setValue, maxFee, balance, token?.decimals]);

  const isSufficientAmount = (value: string): boolean => {
    const parsedAmount = parseAmount(value ?? '0', token?.decimals);
    if (balance && maxFee) {
      const maxAmount = parsedBalance.sub(number.toHex(maxFee));
      return parsedAmount.lte(maxAmount);
    }

    return parsedAmount.lte(parsedBalance);
  };

  const submit = () => {
    handleSubmit(async (values) => {
      try {
        setIsSubmitting(true);
        const txRes = await transfer({
          fromAccount: selectedAccount!,
          to: values.recipient,
          token,
          amount: utils.parseUnits(values.amount, token?.decimals),
        });
        await addTransaction({
          hash: txRes.transaction_hash,
          account: selectedAccount?.getWalletAccount()!,
          meta: {
            title: 'Transfer',
            type: 'transfer',
          },
        });
        navigation.goBack();
      } catch (error) {
        Toast.show(`${error}`);
        console.log(error);
      }

      setIsSubmitting(false);
    })();
  };

  return (
    <SafeArea>
      <Container center={false}>
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
        />

        <Spacer height={8} />

        <PrimaryButton loading={isSubmitting} label="Next" onPress={submit} />
      </Container>
    </SafeArea>
  );
};

export default SendTokenScreen;
