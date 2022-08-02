import React, { useEffect, useState } from 'react';
import { Container, Spacer } from '../../components/layout';
import useBiometrics from '../../hooks/useBiometrics';
import { Button, Text, Title } from '../../components/ui';
import { TextInput } from '../../components/form';
import { ActivityIndicator, Alert } from 'react-native';
import useWalletPassword from '../../services/wallet_password';
import useAuthentication from '../../hooks/useAuthentication';
import { Controller, useForm } from 'react-hook-form';
import wallet from '../../services/wallet';
import { colors } from '../../styles';

const LoginScreen = () => {
  const { authenticateBiometrics, isBiometricsAvailable } = useBiometrics();
  const { getWalletSavedPassword } = useWalletPassword();
  const { setIsAuthenticated } = useAuthentication();
  const [savedPassword, setSavedPassword] = useState<string | null>();
  const [isStarting, setIsStarting] = useState(false);

  const { control, handleSubmit } = useForm({
    defaultValues: { password: '' },
  });

  useEffect(() => {
    getWalletSavedPassword().then((value) => setSavedPassword(value));
  }, []);

  const onSubmit = () => {
    handleSubmit(async ({ password }) => {
      if (password !== savedPassword) return Alert.alert('Wrong password');

      if (wallet.hasSession()) return setIsAuthenticated(true);

      setIsStarting(true);

      const success = await wallet.startSession(password);

      setIsStarting(false);
      if (success) return setIsAuthenticated(true);
    })();
  };

  if (isStarting)
    return (
      <Container>
        <ActivityIndicator size="large" color={colors.white} />
      </Container>
    );

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
