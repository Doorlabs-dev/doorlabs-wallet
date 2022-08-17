import React, { Fragment, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ActivityIndicator, ToastAndroid } from 'react-native';
import { TextInput } from '../../../components/form';
import { Container, Spacer } from '../../../components/layout';
import { Button, Text, Title } from '../../../components/ui';
import useAuthentication from '../../auth/hooks/useAuthentication';
import wallet from '../../../services/wallet';
import useWalletPassword from '../../../services/wallet_password';
import { colors } from '../../../styles';
import useWallet from '../../wallet/hooks/useWallet';
import useNetwork from '../../network/hooks/useNetwork';

const NewWalletScreen = () => {
  const { control, handleSubmit, getValues } = useForm({
    defaultValues: {
      password: '',
      passwordConfirmation: '',
    },
    mode: 'onChange',
  });

  const { setWalletPassword } = useWalletPassword();
  const { setIsAuthenticated, setIsAccountAvailable } = useAuthentication();
  const { addAccount } = useWallet();
  const { selectedNetwork } = useNetwork();
  const [isCreatingWallet, setIsCreatingWallet] = useState(false);
  const [error, setError] = useState<any>();

  const onConfirm = () => {
    handleSubmit(async ({ password }) => {
      try {
        setIsCreatingWallet(true);

        await setWalletPassword(password);
        const success = await wallet.startSession(password);

        if (!success) throw Error('Error creating wallet');

        await addAccount(selectedNetwork.id);

        setTimeout(() => {
          setIsAuthenticated(true);
          setIsAccountAvailable(true);
        }, 300);
      } catch (e) {
        setIsCreatingWallet(false);
        console.log(e);
      }
    })();
  };

  const isSameValue = (value: string) => {
    return value === getValues().password;
  };

  if (error) {
    return (
      <Container>
        <Title textAlign="center">{error}</Title>
      </Container>
    );
  }

  if (isCreatingWallet) {
    return (
      <Container>
        <ActivityIndicator size={'large'} color={colors.white} />
        <Title textAlign="center">Creating wallet{'\n'}for you...🚀</Title>
      </Container>
    );
  }

  return (
    <Container>
      <Title>Create your wallet password</Title>
      <Spacer height={32} />
      <Controller
        name="password"
        control={control}
        rules={{ required: true }}
        render={({ field: { value, onChange } }) => (
          <TextInput
            value={value}
            onChangeText={onChange}
            secureTextEntry
            placeholder="Password"
          />
        )}
      />
      <Spacer height={32} />
      <Controller
        name="passwordConfirmation"
        control={control}
        rules={{ required: true, validate: isSameValue }}
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <Fragment>
            <TextInput
              value={value}
              onChangeText={onChange}
              secureTextEntry
              placeholder="Password confirmation"
            />
            <Text color="red" size={12}>
              {error?.type == 'validate'
                ? 'Password confirmation is not correct'
                : null}
            </Text>
          </Fragment>
        )}
      />
      <Spacer height={32} />
      <Button onPress={onConfirm} width={300}>
        <Title size={20}>Confirm</Title>
      </Button>
    </Container>
  );
};

export default NewWalletScreen;
