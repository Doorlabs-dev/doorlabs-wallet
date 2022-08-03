import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Container, Row, Spacer } from '../../components/layout';
import { Button, Title } from '../../components/ui';
import useAuthentication from '../../hooks/useAuthentication';
import { ScreenNavigationProps } from '../../router/navigation-props';
import wallet from '../../services/wallet';
import useWalletPassword from '../../services/wallet_password';
import { colors } from '../../styles';

type Props = {};

const ResetConfirmationScreen = (props: Props) => {
  const navigation = useNavigation<ScreenNavigationProps<any>>();
  const { setIsAccountAvailable } = useAuthentication();
  const { deleteWalletPassword } = useWalletPassword();
  const onConfirmReset = async () => {
    await wallet.reset();
    await deleteWalletPassword();
    setIsAccountAvailable(false);
  };

  return (
    <Container>
      <Title textAlign="center" size={20}>
        If you reset your wallet, the only way to recover it is with your
        12-word seed phrase. Make sure to back it up and save it somewhere
        securely before resetting
      </Title>
      <Spacer height={48} />
      <Row>
        <Button onPress={() => navigation.goBack()} width={100}>
          <Title size={20}>Cancel</Title>
        </Button>
        <Spacer width={10} />
        <Button onPress={onConfirmReset} width={100} color={colors.red}>
          <Title size={20}>Reset</Title>
        </Button>
      </Row>
    </Container>
  );
};

export default ResetConfirmationScreen;
