import React from 'react';
import { Container, SafeArea } from '@components/layout';
import NftsList from '../components/NftsList';

type Props = {};

const AccountNftsScreen = (props: Props) => {
  return (
    <SafeArea>
      <Container center={false}>
        <NftsList />
      </Container>
    </SafeArea>
  );
};

export default AccountNftsScreen;
