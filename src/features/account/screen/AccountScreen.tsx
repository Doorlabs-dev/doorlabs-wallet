import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Container, Row, SafeArea, Spacer } from '@components/layout';
import { colors } from '../../../styles';
import useSelectedAccount from '../hooks/useSelectedAccount';
import AccountInfoCard from '../components/AccountInfoCard';
import { RoundButton } from '@components/ui';
import IconAdd from '@assets/svg/icon_add.svg';
import IconSend from '@assets/svg/icon_send.svg';
import TokenItem from '@features/tokens/components/TokenItem';
import SecondaryButton from '@components/ui/button/SecondaryButton';
import AccountScreenHeader from '../components/AccountScreenHeader';
import { getTokenInfo } from '@services/tokens';
import useNetwork from '@features/network/hooks/useNetwork';
import useModal from '../../../hooks/useModal';
import AccountActionsModal from '../components/AccountActionsModal';
import useExploreAccount from '@features/explore/hooks/useExploreAccount';
import { useNavigation } from '@react-navigation/native';
import ScreenNames from '../../../router/screenNames';
import { ScreenNavigationProps } from 'src/router/navigation-props';
import NoAccount from '../components/NoAccount';

const AccountScreen = () => {
  const { selectedAccount, isLoading } = useSelectedAccount();
  const { selectedNetwork } = useNetwork();
  const { exploreAccount } = useExploreAccount(
    selectedNetwork,
    selectedAccount?.address
  );
  const { visible, close, open } = useModal();
  const navigation = useNavigation<ScreenNavigationProps<any>>();

  if (isLoading) {
    return (
      <SafeArea>
        <Container>
          <ActivityIndicator color={colors.white} />
        </Container>
      </SafeArea>
    );
  }

  if (!selectedAccount) {
    return (
      <SafeArea>
        <AccountScreenHeader />
        <NoAccount />
      </SafeArea>
    );
  }

  return (
    <SafeArea>
      <AccountScreenHeader />
      <Spacer height={48} />
      <Container alignItems="center" center={false}>
        <AccountInfoCard
          onPress={() => open()}
          address={selectedAccount.address}
        />
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
        <AccountActionsModal
          actions={[
            {
              label: 'View on voyager',
              onPress: () => {
                exploreAccount();
              },
            },
            {
              label: 'Export private key',
              onPress: () => {
                close();
                navigation.navigate({ name: ScreenNames.ACCOUNT_PRIVATE_KEY });
              },
            },
            {
              label: 'Hide account',
              onPress: () => {},
            },
            {
              label: 'Edit name',
              onPress: () => {},
            },
          ]}
          visible={visible}
          onClose={close}
        />
      </Container>
    </SafeArea>
  );
};

export default AccountScreen;
