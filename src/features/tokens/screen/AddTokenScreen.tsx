import React, { useEffect, useState } from 'react';
import { Container, SafeArea, Spacer } from '@components/layout';
import { TextInput } from '@components/form';
import { FieldValues, useForm } from 'react-hook-form';
import { PrimaryButton } from '@components/ui';
import { useRecoilValue } from 'recoil';
import selectedAccountState from '@features/account/selected-account.state';
import { fetchToken } from '@services/tokens';
import { isValidAddress } from '@utils/validator';
import colors from '@styles/colors';
import { ActivityIndicator } from 'react-native';
import { tokensStore } from '@services/tokens/token.store';
import Toast from 'react-native-root-toast';
import { useNavigation } from '@react-navigation/native';
import { ScreenNavigationProps } from '@router/navigation-props';
import AndroidHeaderFix from '@components/layout/AndroidHeaderFix';

type Props = {};

type TokenInfo = {
  address: string;
  name: string;
  symbol: string;
  network: string;
  decimals: number;
};

const AddTokenScreen = (props: Props) => {
  const selectedAccount = useRecoilValue(selectedAccountState);
  const {
    control,
    watch,
    setValue,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FieldValues>({
    defaultValues: {
      address: '',
      name: '',
      symbol: '',
      decimals: '',
    },
  });

  const formValues = watch();
  const [error, setError] = useState<any>();
  const [tokenInfo, setTokenInfo] = useState<TokenInfo>();
  const [isFetching, setIsFetching] = useState(false);
  const navigation = useNavigation<ScreenNavigationProps<any>>();

  const fetchTokenInfo = async (tokenAddress: string) => {
    if (!tokenAddress) return;
    if (!selectedAccount) return;
    if (!isValidAddress(tokenAddress)) {
      Toast.show('Invalid address', {
        position: Toast.positions.CENTER,
      });
      return;
    }

    try {
      setIsFetching(true);
      const result = await fetchToken(tokenAddress, selectedAccount);
      setTokenInfo(result);
      setError(undefined);
    } catch (error) {
      setTokenInfo(undefined);
      setError(error);
      Toast.show('Token not found in this network', {
        position: Toast.positions.CENTER,
      });
    }
    setIsFetching(false);
  };

  const submit = () => {
    return handleSubmit(async (values) => {
      await tokensStore.push({
        address: values.address,
        name: values.name,
        symbol: values.symbol,
        decimals: values.decimals.toString(),
        network: selectedAccount?.networkId!,
      });
      navigation.goBack();
    });
  };

  useEffect(() => {
    if (!tokenInfo) return;
    const { name, symbol, decimals } = tokenInfo;

    setValue('name', name as string);
    setValue('symbol', symbol as string);
    setValue('decimals', decimals.toString());
  }, [tokenInfo?.address]);

  useEffect(() => {
    fetchTokenInfo(formValues.address);
  }, [formValues.address]);

  // For test only
  // useEffect(() => {
  //   setTimeout(() => {
  //     setValue(
  //       'address',
  //       '0x07394cbe418daa16e42b87ba67372d4ab4a5df0b05c6e554d158458ce245bc10'
  //     );
  //   }, 1000);
  // }, []);

  return (
    <Container center={false}>
      <AndroidHeaderFix />
      <Spacer height={36} />
      <TextInput
        name="address"
        label="Contract address"
        rules={{
          required: true,
          validate: { isValidAddress },
        }}
        errorMessages={{
          isValidAddress: 'Invalid address',
        }}
        control={control}
      />
      {isFetching && <ActivityIndicator color={colors.white} />}
      {!error && !isFetching && !!tokenInfo ? (
        <>
          <TextInput
            name="name"
            label="Name"
            control={control}
            rules={{ required: true }}
            inputProps={{
              editable: false,
            }}
          />
          <TextInput
            name="symbol"
            label="Symbol"
            control={control}
            rules={{ required: true }}
            inputProps={{
              editable: false,
            }}
          />
          <TextInput
            name="decimals"
            label="Decimals"
            control={control}
            rules={{ required: true }}
            inputProps={{
              editable: false,
            }}
          />
          <Spacer height={16} />
          <PrimaryButton
            loading={isSubmitting}
            label="Continue"
            onPress={submit()}
          />
        </>
      ) : null}
    </Container>
  );
};

export default AddTokenScreen;
