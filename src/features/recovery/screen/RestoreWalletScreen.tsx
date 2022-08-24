import { RouteProp, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { ActivityIndicator } from 'react-native';
import Toast from 'react-native-root-toast';
import { TextInput } from '../../../components/form';
import { Container, Spacer } from '../../../components/layout';
import { Button, Title } from '../../../components/ui';
import useAuthentication from '../../auth/hooks/useAuthentication';
import wallet from '../../../services/wallet';
import useWalletPassword from '../../../services/wallet_password';
import { colors } from '../../../styles';

const RestoreWalletScreen = () => {
  const { control, handleSubmit, getValues } = useForm<FieldValues>({
    defaultValues: {
      password: '',
      passwordConfirmation: '',
    },
    mode: 'onChange',
  });
  const { params } =
    useRoute<
      RouteProp<{ 'restore-wallet': { phrase: string } }, 'restore-wallet'>
    >();
  const phrase = params?.phrase;

  const { setWalletPassword } = useWalletPassword();
  const { setIsAuthenticated, setIsAccountAvailable } = useAuthentication();
  const [isRestoring, setIsRestoring] = useState(false);

  const onConfirm = () => {
    handleSubmit(async ({ password }) => {
      try {
        setIsRestoring(true);

        await setWalletPassword(password);
        await wallet.restoreSeedPhrase(phrase, password);

        setTimeout(() => {
          setIsAuthenticated(true);
          setIsAccountAvailable(true);
        }, 300);
      } catch (e) {
        setIsRestoring(false);
        Toast.show(`${e}`);
      }
    })();
  };

  const isSameValue = (value: string) => {
    return value === getValues().password;
  };

  if (isRestoring) {
    return (
      <Container>
        <ActivityIndicator size={'large'} color={colors.white} />
        <Title textAlign="center">Bring your wallet home...😍</Title>
      </Container>
    );
  }

  return (
    <Container>
      <Title textAlign="center">New password{'\n'}for your wallet</Title>
      <Spacer height={32} />
      <TextInput
        name="password"
        control={control}
        inputProps={{
          secureTextEntry: true,
        }}
        rules={{ required: true }}
        placeholder="Password"
      />
      <Spacer height={32} />
      <TextInput
        control={control}
        name="passwordConfirmation"
        inputProps={{
          secureTextEntry: true,
        }}
        rules={{ required: true, validate: isSameValue }}
        placeholder="Password confirmation"
      />
      <Spacer height={32} />
      <Button onPress={onConfirm} width={300}>
        <Title size={20}>Confirm</Title>
      </Button>
    </Container>
  );
};

export default RestoreWalletScreen;
