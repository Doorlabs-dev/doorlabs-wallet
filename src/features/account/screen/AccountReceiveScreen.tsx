import React from 'react';
import { Container, SafeArea, Spacer } from '@components/layout';
import { ShortAddress, Text } from '@components/ui';
import QRCode from 'react-native-qrcode-svg';
import { useRecoilValue } from 'recoil';
import selectedAccountState from '../selected-account.state';

type Props = {};

const AccountReceiveScreen = (props: Props) => {
  const selectedAccount = useRecoilValue(selectedAccountState);

  return (
    <SafeArea>
      <Container center={false} alignItems="center">
        <Text>Your address's QR Code</Text>
        <Spacer height={16} />
        <QRCode size={200} value={selectedAccount?.address} />
        <Spacer height={16} />
        <ShortAddress address={selectedAccount?.address ?? ''} />
      </Container>
    </SafeArea>
  );
};

export default AccountReceiveScreen;
