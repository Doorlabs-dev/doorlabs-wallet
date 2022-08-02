import React, { useEffect, useMemo } from 'react';
import { ActivityIndicator, Image } from 'react-native';
import { hexToDecimalString } from 'starknet/dist/utils/number';
import useSWR from 'swr';

import { Container, Row, Spacer } from '../../components/layout';
import { Button, ShortAddress, Title } from '../../components/ui';
import useWallet from '../../hooks/useWallet';
import { formatEther } from '../../utils';

const address =
  '0x0362272fd216553d5c34f7c21f562cdda0a37468171541b181eb053468cc46ab';

const useETHBalance = (address: string) => {
  const { data, error } = useSWR<{ balance: number }>(
    `https://goerli.voyager.online/api/contract/${address}`,
    (url) => fetch(url).then((res) => res.json())
  );

  const isLoading = useMemo(() => !data && !error, [data, error]);

  return {
    error,
    data,
    isLoading,
  };
};

const AccountDetailScreen = () => {
  const { account, createNewAccount, isInitializing } = useWallet();

  return (
    <Container>
      <Title>Accounts 1</Title>
      {isInitializing && <ActivityIndicator />}
      {account && <ShortAddress address={account.address} />}
      {!account && (
        <Button onPress={createNewAccount}>
          <Title>Create account</Title>
        </Button>
      )}
      {/* <Row alignItems="center">
        <Image
          resizeMode="contain"
          source={{
            width: 30,
            height: 30,
            uri: 'https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/128/Ethereum-ETH-icon.png',
          }}
        />
        <Spacer width={10} />
        <Title size={24}>
          {data
            ? formatEther(hexToDecimalString(`${data.balance}`))
            : isLoading
            ? 'Loading...'
            : error}
        </Title>
      </Row> */}
    </Container>
  );
};

export default AccountDetailScreen;
