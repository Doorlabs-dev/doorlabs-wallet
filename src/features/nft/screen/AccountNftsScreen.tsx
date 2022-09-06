import React from 'react';
import { Container, SafeArea } from '@components/layout';
import NftsList from '../components/NftsList';
import AndroidHeaderFix from '@components/layout/AndroidHeaderFix';

type Props = {};

const AccountNftsScreen = (props: Props) => {
  return (
    <Container center={false}>
      <NftsList />
    </Container>
  );
};

export default AccountNftsScreen;
