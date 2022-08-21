import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Container, Row, SafeArea, Spacer } from '@components/layout';
import { colors } from '../../../styles';
import useSelectedAccount from '../hooks/useSelectedAccount';
import AccountInfoCard from '../components/AccountInfoCard';
import SelectNetworkDropdown from '@features/network/components/SelectNetworkDropdown';
import { RoundButton } from '@components/ui';
import IconAdd from '@assets/svg/icon_add.svg';
import IconSend from '@assets/svg/icon_send.svg';
import TokenItem from '@features/tokens/components/TokenItem';
import SecondaryButton from '@components/ui/button/SecondaryButton';
import AccountScreenHeader from '../components/AccountScreenHeader';
import { getTokenInfo } from '@services/tokens';
import useNetwork from '@features/network/hooks/useNetwork';

const AccountScreen = () => {
  const { selectedAccount } = useSelectedAccount();
  const { selectedNetwork } = useNetwork();
  if (!selectedAccount) {
    return (
      <Container>
        <ActivityIndicator size={'large'} color={colors.white} />
      </Container>
    );
  }

  return (
    <SafeArea>
      <AccountScreenHeader />
      <Spacer height={48} />
      <Container alignItems="center" center={false}>
        <AccountInfoCard address={selectedAccount.address} />
        <Spacer height={24} />
        <Row justifyContent="center">
          <RoundButton icon={<IconAdd />} title="Add funds" />
          <Spacer width={61} />
          <RoundButton icon={<IconSend />} title="Send" />
        </Row>
        <Spacer height={32} />
        <TokenItem
          token={getTokenInfo('ETH', selectedNetwork.id)}
          account={selectedAccount}
        />
        <SecondaryButton title={'Add tokens'} />
      </Container>
    </SafeArea>
  );
};

export default AccountScreen;
