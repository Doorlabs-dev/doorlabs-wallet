import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { hexToDecimalString } from 'starknet/dist/utils/number';
import { Container, Row, Spacer } from '../../../components/layout';
import { EtherIcon, ShortAddress, Text, Title } from '../../../components/ui';
import { WalletAccount } from '../../../services/wallet/wallet.model';
import { colors } from '../../../styles';
import { formatEther } from '../../../utils';
import SelectNetworkDropdown from '../../network/components/SelectNetworkDropdown';
import useAccounts from '../hooks/useAccounts';

const AccountScreen = () => {
  const [selectedAccount, setSelectedAccount] = useState<WalletAccount | null>(
    null
  );
  const { getSelectedAccount } = useAccounts();

  useEffect(() => {
    getSelectedAccount().then((res) => {
      setSelectedAccount(res);
    });
  }, []);

  if (!selectedAccount) {
    return (
      <Container>
        <ActivityIndicator size={'large'} color={colors.white} />
      </Container>
    );
  }

  return (
    <Container>
      <SelectNetworkDropdown />
      <View>
        <Title>Account</Title>
        <Spacer height={16} />
        <ShortAddress address={selectedAccount.address} />
        <Spacer height={16} />
        <Row alignItems="center">
          {/* <EtherIcon />
            <Spacer width={10} /> */}
          {/* <Title size={24}>{formatEther(hexToDecimalStrng(balance))} ETH</Title> */}
        </Row>
      </View>
    </Container>
  );
};

export default AccountScreen;
