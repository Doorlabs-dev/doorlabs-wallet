import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Container, Spacer } from '../../components/layout';
import { Button, Title } from '../../components/ui';
import { ScreenNavigationProps } from '../../router/navigation-props';

type Props = {};

const WelcomeScreen = () => {
  const navigation = useNavigation<ScreenNavigationProps<any>>();

  const navigateToCreatePasswordScreen = () => {
    navigation.navigate({ name: 'create-wallet-password' });
  };

  return (
    <Container>
      <Title>Doorlabs Wallet</Title>
      <Spacer height={32} />
      <Button onPress={navigateToCreatePasswordScreen}>
        <Title size={20}>Create wallet</Title>
      </Button>
      <Spacer height={16} />
      <Button>
        <Title size={20}>Restore wallet</Title>
      </Button>
    </Container>
  );
};

export default WelcomeScreen;
