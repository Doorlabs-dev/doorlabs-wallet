import { useHeaderHeight } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image } from 'react-native';
import { Container, Spacer } from '../../../components/layout';
import { Button, PrimaryButton, Text, Title } from '../../../components/ui';
import { ScreenNavigationProps } from '../../../router/navigation-props';
import wallet from '../../../services/wallet';
import useWalletPassword from '../../../services/wallet_password';
import useAuthentication from '../../auth/hooks/useAuthentication';

const ETHE_LOCK = require('@assets/ethereum_locker.png');

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
  const headerHeight = useHeaderHeight();

  return (
    <Container center={false} alignItems="center">
      <Spacer height={headerHeight} />
      <Image
        source={ETHE_LOCK}
        style={{ width: 200, height: 200, alignSelf: 'center' }}
      />
      <Text size={16} lineHeight={24}>
        If you reset your wallet, the only way to recover it is with your
        12-word seed phrase. Make sure to back it up from the Argent X settings
        and save it somewhere securely before resetting the extension
      </Text>
      <Spacer height={24} />
      <PrimaryButton label="Reset" onPress={onConfirmReset} />
      <Spacer height={24} />
      <Title size={16} onPress={() => navigation.goBack()}>
        Cancel
      </Title>
    </Container>
  );
};

export default ResetConfirmationScreen;
