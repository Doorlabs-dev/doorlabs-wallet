import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Container, Row, SafeArea, Spacer } from '../../../components/layout';
import {
  Button,
  EtherIcon,
  ShortAddress,
  Text,
  Title,
} from '../../../components/ui';
import wallet from '../../../services/wallet';
import { colors } from '../../../styles';
import { getTokenInfo } from '../../../tokens';
import { formatEther } from '../../../utils';
import useExploreAccount from '../../explore/hooks/useExploreAccount';
import useSelectedAccount, { useBalance } from '../hooks/useSelectedAccount';
import IconToken from '../../../../assets/svg/icon_token.svg';

const AccountScreen = () => {
  const { selectedAccount } = useSelectedAccount();
  const { data: ethBalance } = useBalance(
    getTokenInfo('ETH', selectedAccount?.networkId)?.address,
    selectedAccount
  );
  const { exploreAccount } = useExploreAccount(
    selectedAccount?.network,
    selectedAccount?.address
  );

  if (!selectedAccount) {
    return (
      <Container>
        <ActivityIndicator size={'large'} color={colors.white} />
      </Container>
    );
  }

  return (
    <SafeArea>
      <Container>
        <View>
          <Title>Account</Title>
          <Spacer height={16} />
          <ShortAddress address={selectedAccount.address} />
          <Spacer height={16} />
          <Row alignItems="center">
            <EtherIcon />
            <Spacer width={10} />
            <Title size={24}>{formatEther(ethBalance ?? 0)} ETH</Title>
          </Row>
        </View>
        <Button width={300} onPress={() => exploreAccount()}>
          <Title>Explore</Title>
        </Button>
      </Container>
    </SafeArea>
  );
};

export default AccountScreen;
