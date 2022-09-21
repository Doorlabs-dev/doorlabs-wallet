import React, { useEffect, useState } from 'react';
import BottomSheet from '@components/ui/modal/BottomSheet';
import { Account } from '../account.model';
import useAccounts from '../hooks/useAccounts';
import AccountItem from './AccountItem';
import { Text } from '@components/ui';
import { Row, Spacer } from '@components/layout';
import useSelectedAccount from '../hooks/useSelectedAccount';
import AddAccountButton from './AddAccountButton';
import { FlatList } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { ScreenNavigationProps } from '@router/navigation-props';

type Props = {
  visible: boolean;
  onClose: () => void;
  networkId: string;
};

const AccountsListModal = ({ visible, onClose, networkId }: Props) => {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const { getAccountsByNetwork } = useAccounts();
  const { selectAccount, selectedAccount } = useSelectedAccount(false);
  const navigation = useNavigation<ScreenNavigationProps<any>>();

  useEffect(() => {
    if (visible) {
      getAccountsByNetwork(networkId).then((res) => {
        setAccounts(res);
      });
    }
  }, [visible, selectedAccount?.address]);

  return (
    <BottomSheet visible={visible} onClose={onClose}>
      <Row alignItems="center" justifyContent="space-between">
        <Text size={20} lineHeight={30} weight={500}>
          List Account
        </Text>
        <AddAccountButton shape="round" />
      </Row>
      <Spacer height={16} />

      {!!accounts.length ? (
        <>
          <FlatList
            data={accounts}
            keyExtractor={(item) => item.address}
            renderItem={({ item: acc }) => (
              <AccountItem
                account={acc}
                selected={selectedAccount?.address === acc.address}
                onPress={async () => {
                  await selectAccount(acc);
                  setTimeout(() => {
                    navigation.dispatch(DrawerActions.closeDrawer());
                    onClose();
                  }, 0);
                }}
              />
            )}
          />
        </>
      ) : (
        <>
          <Text>No accounts on this network yet</Text>
          <Spacer height={16} />
        </>
      )}
    </BottomSheet>
  );
};

export default AccountsListModal;
