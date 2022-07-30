import React, { useMemo } from 'react';
import { Image } from 'react-native';
import { hexToDecimalString } from 'starknet/dist/utils/number';
import useSWR from 'swr';
import { Container, Row, Spacer } from '../../components/layout';
import { Button, ShortAddress, Title } from '../../components/ui';
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
  const { data, error, isLoading } = useETHBalance(address);

  return (
    <Container>
      <Title>Accounts 1</Title>
      <ShortAddress address={address} />
      <Spacer height={16} />
      <Row alignItems="center">
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
      </Row>
      <Spacer height={32} />
      <Row>
        <Button width={100} height={36}>
          <Title size={16}>Send</Title>
        </Button>
        <Spacer width={10} />
        <Button width={100} height={36}>
          <Title size={16}>Receive</Title>
        </Button>
      </Row>
    </Container>
  );
};

export default AccountDetailScreen;
