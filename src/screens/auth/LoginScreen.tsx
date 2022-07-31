import React, { useEffect, useState } from 'react';
import { Container, Spacer } from '../../components/layout';
import useBiometrics from '../../hooks/useBiometrics';
import { Button, Text, Title } from '../../components/ui';
import { TextInput } from '../../components/form';
import { Alert } from 'react-native';
import useWalletPassword from '../../hooks/useWalletPassword';
import useAuthentication from '../../hooks/useAuthentication';
import { Controller, useForm } from 'react-hook-form';

const LoginScreen = () => {
  const { authenticateBiometrics, isBiometricsAvailable } = useBiometrics();
  const { getSavedPassword } = useWalletPassword();
  const { setIsAuthenticated } = useAuthentication();
  const [savedPassword, setSavedPassword] = useState<string | null>();

  const { control, handleSubmit } = useForm({
    defaultValues: { password: '' },
  });

  useEffect(() => {
    getSavedPassword().then((value) => setSavedPassword(value));
  }, []);

  const onSubmit = () => {
    handleSubmit(({ password }) => {
      if (password === savedPassword) {
        setIsAuthenticated(true);
      } else {
        Alert.alert('Wrong password');
      }
    })();
  };

  return (
    <Container>
      <Title size={20}>Unlock your wallet to continue</Title>
      <Spacer height={32} />
      <Controller
        name="password"
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextInput
            value={value}
            onChangeText={onChange}
            secureTextEntry
            placeholder="Password"
          />
        )}
      />
      <Spacer height={12} />
      {isBiometricsAvailable && (
        <Text
          onPress={() => authenticateBiometrics(() => setIsAuthenticated(true))}
        >
          Use Biometrics
        </Text>
      )}
      <Spacer height={16} />
      <Button onPress={onSubmit} width={300}>
        <Title size={20}>Unlock</Title>
      </Button>
      <Spacer height={32} />
      <Text onPress={() => Alert.alert('TODO: recover page')}>
        Recover your wallet ?
      </Text>
    </Container>
  );
};

export default LoginScreen;
