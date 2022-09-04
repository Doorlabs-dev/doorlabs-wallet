import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Container, Row, SafeArea, Spacer } from '@components/layout';
import { colors } from '../../../styles';
import useSelectedAccount from '../hooks/useSelectedAccount';
import AccountInfoCard from '../components/AccountInfoCard';
import { RoundButton } from '@components/ui';
import SecondaryButton from '@components/ui/button/SecondaryButton';
import useNetwork from '@features/network/hooks/useNetwork';
import useModal from '../../../hooks/useModal';
import AccountActionsModal from '../components/AccountActionsModal';
import useExploreAccount from '@features/explore/hooks/useExploreAccount';
import { useNavigation } from '@react-navigation/native';
import ScreenNames from '../../../router/screenNames';
import { ScreenNavigationProps } from 'src/router/navigation-props';
import NoAccount from '../components/NoAccount';
import PendingTransactions from '@features/transactions/components/PendingTransactions';
import IconSend from '@assets/svg/icon_send.svg';
import IconReceive from '@assets/svg/icon_receive.svg';
import IconAdd from '@assets/svg/icon_add.svg';
import ReceiveAddressModal from '../components/ReceiveAddressModal';
import { ScrollView } from 'react-native-gesture-handler';
import TokensList from '@features/tokens/components/TokensList';

const AccountScreen = () => {
  const { selectedAccount, isLoading } = useSelectedAccount(true);
  const { selectedNetwork } = useNetwork();
  const { exploredAccountUrl } = useExploreAccount(
    selectedNetwork,
    selectedAccount?.address
  );

  const {
    visible: actionModalVisible,
    close: closeActionModal,
    open: openActionModal,
  } = useModal();
  const {
    visible: receiveModalVisible,
    close: closeReceiveModal,
    open: openReceiveModal,
  } = useModal();

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
        <NoAccount />
      </SafeArea>
    );
  }

  return (
    <SafeArea>
      <ScrollView>
        <Container alignItems="center" center={false}>
          <AccountInfoCard
            onPress={() => openActionModal()}
            account={selectedAccount}
          />
          <Spacer height={24} />
          <View style={{ width: '90%' }}>
            <Row justifyContent="space-between">
              <RoundButton icon={<IconAdd />} title="Add funds" />
              <RoundButton
                icon={<IconReceive />}
                title="Receive"
                onPress={() => {
                  openReceiveModal();
                }}
              />
              <RoundButton
                icon={<IconSend />}
                title="Send"
                onPress={() =>
                  navigation.navigate({ name: ScreenNames.TOKEN_SELECT_TOKENS })
                }
              />
            </Row>
          </View>
          <Spacer height={32} />
          <TokensList />
          <SecondaryButton
            title="Add tokens"
            onPress={() =>
              navigation.navigate({ name: ScreenNames.TOKEN_ADD_TOKEN })
            }
          />
          <PendingTransactions />
          <AccountActionsModal
            actions={[
              {
                label: 'View on voyager',
                onPress: () => {
                  closeActionModal();
                  navigation.navigate({
                    name: ScreenNames.WEBVIEW,
                    params: {
                      url: exploredAccountUrl,
                    },
                  });
                },
              },
              {
                label: 'Export private key',
                onPress: () => {
                  closeActionModal();
                  navigation.navigate({
                    name: ScreenNames.ACCOUNT_PRIVATE_KEY,
                  });
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
            visible={actionModalVisible}
            onClose={closeActionModal}
          />
        </Container>
        <Spacer height={100} />
      </ScrollView>
      <ReceiveAddressModal
        visible={receiveModalVisible}
        onClose={closeReceiveModal}
        address={selectedAccount?.address || ''}
      />
    </SafeArea>
  );
};

export default AccountScreen;
