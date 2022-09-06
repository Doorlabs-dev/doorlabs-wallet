import React from 'react';
import { Container } from '@components/layout';
import NftsList from '../components/NftsList';

type Props = {};

const AccountNftsScreen = (props: Props) => {
  return (
    <Container center={false}>
      <NftsList />
    </Container>
  );
};

export default AccountNftsScreen;
