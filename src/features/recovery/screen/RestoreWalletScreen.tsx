import { RouteProp, useRoute } from '@react-navigation/native';
import React, { Fragment, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ActivityIndicator, ToastAndroid } from 'react-native';
import { TextInput } from '../../../components/form';
import { Container, Spacer } from '../../../components/layout';
import { Button, Text, Title } from '../../../components/ui';
import useAuthentication from '../../auth/hooks/useAuthentication';
import { AuthStackParamList } from '../../../router/AuthStack';
import wallet from '../../../services/wallet';
import useWalletPassword from '../../../services/wallet_password';
import { colors } from '../../../styles';

const RestoreWalletScreen = () => {
  const { control, handleSubmit, getValues } = useForm({
    defaultValues: {
      password: '',
      passwordConfirmation: '',
    },
    mode: 'onChange',
  });
  const { params } =
    useRoute<RouteProp<AuthStackParamList, 'restore-wallet'>>();
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
        ToastAndroid.show(`${e}`, 2000);
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

export default RestoreWalletScreen;
