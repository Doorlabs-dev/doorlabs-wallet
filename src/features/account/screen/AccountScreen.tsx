import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { hexToDecimalString } from 'starknet/dist/utils/number';
import { Container, Row, SafeArea, Spacer } from '../../../components/layout';
import { EtherIcon, ShortAddress, Text, Title } from '../../../components/ui';
import { fetchBalance } from '../../../services/balance';
import { WalletAccount } from '../../../services/wallet/wallet.model';
import { colors } from '../../../styles';
import { formatEther } from '../../../utils';
import SelectNetworkDropdown from '../../network/components/SelectNetworkDropdown';
import useSelectedAccount from '../hooks/useSelectedAccount';

const AccountScreen = () => {
  const { selectedAccount, ethBalance } = useSelectedAccount();

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
        <SelectNetworkDropdown />
        <View>
          <Title>Account</Title>
          <Spacer height={16} />
          <ShortAddress address={selectedAccount.address} />
          <Spacer height={16} />
          <Row alignItems="center">
            <EtherIcon />
            <Spacer width={10} />
            <Title size={24}>{formatEther(ethBalance)} ETH</Title>
          </Row>
        </View>
      </Container>
    </SafeArea>
  );
};

export default AccountScreen;
