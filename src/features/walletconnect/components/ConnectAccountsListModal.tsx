import React, { useEffect, useState } from 'react';
import BottomSheet from '@components/ui/modal/BottomSheet';
import { Text } from '@components/ui';
import { Row, Spacer } from '@components/layout';
import { FlatList } from 'react-native';
import { Account } from '@features/account/account.model';
import useAccounts from '@features/account/hooks/useAccounts';
import AccountItem from '@features/account/components/AccountItem';

type Props = {
  visible: boolean;
  networkId: string;
  onSelectAccount: (acc: Account) => void;
  onClose: () => void;
};

const ConnectAccountsListModal = ({
  visible,
  networkId,
  onClose,
  onSelectAccount,
}: Props) => {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const { getAccountsByNetwork } = useAccounts();

  useEffect(() => {
    if (visible) {
      getAccountsByNetwork(networkId).then((res) => {
        setAccounts(res);
      });
    }
  }, [visible]);

  return (
    <BottomSheet visible={visible} onClose={onClose}>
      <Row alignItems="center" justifyContent="space-between">
        <Text size={20} lineHeight={30} weight={500}>
          Select account to connect
        </Text>
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
                onPress={async () => {
                  onSelectAccount(acc);
                  setTimeout(() => {
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

export default ConnectAccountsListModal;
