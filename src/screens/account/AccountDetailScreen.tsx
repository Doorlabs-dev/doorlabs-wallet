import React, { Fragment, useEffect, useMemo } from 'react';
import { ActivityIndicator, Image } from 'react-native';
import { hexToDecimalString } from 'starknet/dist/utils/number';
import useSWR from 'swr';

import { Container, Row, Spacer } from '../../components/layout';
import { Button, EtherIcon, ShortAddress, Title } from '../../components/ui';
import useAccount from '../../hooks/useAccount';
import useWallet from '../../hooks/useWallet';
import { colors } from '../../styles';
import { formatEther } from '../../utils';

const AccountDetailScreen = () => {
  const { account, getWalletAccount } = useWallet();
  useEffect(() => {
    getWalletAccount();
  }, []);
  const { address, balance, reload } = useAccount(account);
  console.log('My balance', balance);
  if (!account) {
    return (
      <Container>
        <ActivityIndicator size={'large'} color={colors.white} />
      </Container>
    );
  }

  return (
    <Container>
      <Fragment>
        <Title>Account</Title>
        <ShortAddress address={address} />
      </Fragment>
      <Spacer height={16} />
      <Row alignItems="center">
        <EtherIcon />
        <Spacer width={10} />
        <Title size={24}>{formatEther(hexToDecimalString(balance))} ETH</Title>
      </Row>
    </Container>
  );
};

export default AccountDetailScreen;
