import React, { useEffect, useState } from 'react';
import BottomSheet from '@components/ui/modal/BottomSheet';
import { Account } from '../account.model';
import useAccounts from '../hooks/useAccounts';
import AccountItem from './AccountItem';
import { Text } from '@components/ui';
import { Spacer } from '@components/layout';
import { ScrollView } from 'react-native';

type Props = {
  visible: boolean;
  onClose: () => void;
  networkId: string;
};

const AccountsListModal = ({ visible, onClose, networkId }: Props) => {
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
      <Text size={20} lineHeight={30} weight={500}>
        List Account
      </Text>
      <Spacer height={32} />
      {/* <ScrollView> */}
      {accounts.map((acc) => (
        <AccountItem key={acc.address} account={acc} />
      ))}
      {/* </ScrollView> */}
    </BottomSheet>
  );
};

export default AccountsListModal;
