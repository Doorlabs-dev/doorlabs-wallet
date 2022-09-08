import React from 'react';
import { Container, Spacer } from '@components/layout';
import NftsList from '../components/NftsList';
import AndroidHeaderFix from '@components/layout/AndroidHeaderFix';

type Props = {};

const AccountNftsScreen = (props: Props) => {
  return (
    <Container center={false}>
      <Spacer height={36} />
      <NftsList />
    </Container>
  );
};

export default AccountNftsScreen;
