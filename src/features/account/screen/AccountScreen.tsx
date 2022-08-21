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

const AccountScreen = () => {
  const { selectedAccount } = useSelectedAccount();

  if (!selectedAccount) {
    return (
      <Container>
        <ActivityIndicator size={'large'} color={colors.white} />
      </Container>
    );
  }

  return (
    <SafeArea>
      <SelectNetworkDropdown />
      <Spacer height={48} />
      <Container alignItems="center" center={false}>
        <View>
          <AccountInfoCard address={selectedAccount.address} />
          <Spacer height={24} />
          <Row justifyContent="center">
            <RoundButton icon={<IconAdd />} title="Add funds" />
            <Spacer width={61} />
            <RoundButton icon={<IconSend />} title="Send" />
          </Row>
        </View>
      </Container>
    </SafeArea>
  );
};

export default AccountScreen;
