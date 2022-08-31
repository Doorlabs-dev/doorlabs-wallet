import { View, Text } from 'react-native';
import React from 'react';
import { Container, SafeArea } from '@components/layout';
import NftsList from '../components/NftsList';

type Props = {};

const AccountNfts = (props: Props) => {
  return (
    <SafeArea>
      <Container center={false}>
        <NftsList />
      </Container>
    </SafeArea>
  );
};

export default AccountNfts;
