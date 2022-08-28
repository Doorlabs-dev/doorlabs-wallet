import { View, Text } from 'react-native';
import React from 'react';
import { Container, SafeArea, Spacer } from '@components/layout';
import useAccountTransactions from '@features/transactions/hooks/useAccountTransactions';
import { useRecoilValue } from 'recoil';
import selectedAccountState from '../selected-account.state';
import TransactionItem from '@features/transactions/components/TransactionItem';
import { FlatList } from 'react-native-gesture-handler';

type Props = {};

const AccountActivityScreen = (props: Props) => {
  const selectedAccount = useRecoilValue(selectedAccountState);
  const { sortedTransactions } = useAccountTransactions({
    account: selectedAccount,
  });
  return (
    <SafeArea>
      <Container center={false}>
        <FlatList
          ItemSeparatorComponent={() => <Spacer height={16} />}
          contentContainerStyle={{ flex: 1 }}
          renderItem={({ item: tx }) => (
            <TransactionItem key={tx.hash} transaction={tx} />
          )}
          keyExtractor={(tx) => tx.hash}
          data={sortedTransactions}
        />
      </Container>
    </SafeArea>
  );
};

export default AccountActivityScreen;
