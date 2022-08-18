import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Container, Spacer } from '../../../components/layout';
import { Button, Title } from '../../../components/ui';
import { ScreenNavigationProps } from '../../../router/navigation-props';
import ScreenNames from '../../../router/screenNames';
import wallet from '../../../services/wallet';

type Props = {};

const WelcomeScreen = () => {
  const navigation = useNavigation<ScreenNavigationProps<any>>();

  const navigateToCreatePasswordScreen = () => {
    navigation.navigate({ name: ScreenNames.CREATE_WALLET_PASSWORD });
  };

  const navigateToInputPhraseScreen = () => {
    navigation.navigate({ name: ScreenNames.INPUT_PHRASE });
  };

  return (
    <Container>
      <Title>Doorlabs Wallet</Title>
      <Spacer height={32} />
      <Button width={300} onPress={navigateToCreatePasswordScreen}>
        <Title size={20}>Create wallet</Title>
      </Button>
      <Spacer height={16} />
      <Button width={300} onPress={navigateToInputPhraseScreen}>
        <Title size={20}>Restore wallet</Title>
      </Button>
    </Container>
  );
};

export default WelcomeScreen;
