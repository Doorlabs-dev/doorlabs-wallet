import { FlatList, ScrollView, View } from 'react-native';
import React from 'react';
import PendingTransactionItem from './PendingTransactionItem';
import { useRecoilValue } from 'recoil';
import selectedAccountState from '@features/account/selected-account.state';
import { AccountIdentifier } from '@services/wallet/wallet.model';
import useAccountTransaction from '../hooks/useAccountTransactions';
import { useIsFocused } from '@react-navigation/native';
import { Spacer } from '@components/layout';

const PendingTransactions = () => {
  const selectedAccount = useRecoilValue(selectedAccountState);
  const isFocused = useIsFocused();

  const { pendingTransactions, setAllTransactions } = useAccountTransaction({
    account: selectedAccount as AccountIdentifier,
    triggerReload: isFocused,
  });

  if (!pendingTransactions.length) return null;

  return (
    <View style={{ width: '100%', marginTop: 24 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} horizontal>
        <FlatList
          data={pendingTransactions}
          renderItem={({ item: tx }) => (
            <PendingTransactionItem
              onTransactionSuccess={setAllTransactions}
              key={tx.hash}
              transaction={tx}
            />
          )}
          keyExtractor={(item) => item.hash}
          ItemSeparatorComponent={() => <Spacer height={16} />}
        />
      </ScrollView>
    </View>
  );
};

export default PendingTransactions;
