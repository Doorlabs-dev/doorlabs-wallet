import React, { useEffect, useState } from 'react';
import { Container, Spacer } from '../../../components/layout';
import useNetwork from '../../network/hooks/useNetwork';
import useAccounts from '../hooks/useAccounts';
import { Account } from '../account.model';
import { Text, Title } from '../../../components/ui';
import AccountItem from '../components/AccountItem';

type Props = {};

const AccountsListScreen = (props: Props) => {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const { selectedNetwork } = useNetwork();
  const { getAccountsByNetwork } = useAccounts();

  useEffect(() => {
    getAccountsByNetwork(selectedNetwork.id).then(setAccounts);
  }, []);

  return (
    <Container>
      <Title>Accounts</Title>
      <Spacer height={16} />
      {accounts.map((acc) => (
        <AccountItem key={acc.address} account={acc} />
      ))}
    </Container>
  );
};

export default AccountsListScreen;
