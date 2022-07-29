import { Button } from 'react-native';
import React from 'react';
import { Container } from '../../components/layout';
import useBiometrics from '../../hooks/useBiometrics';

const LoginScreen = () => {
  const { authenticateBiometrics } = useBiometrics();

  const onPress = async () => {
    await authenticateBiometrics();
  };

  return (
    <Container>
      <Button title="Authenticate" onPress={onPress} />
    </Container>
  );
};

export default LoginScreen;
