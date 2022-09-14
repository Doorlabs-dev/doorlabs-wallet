import { View } from 'react-native';
import React from 'react';
import PendingTransactionItem from './PendingTransactionItem';
import { useRecoilValue } from 'recoil';
import selectedAccountState from '@features/account/selected-account.state';
import { BaseWalletAccount } from '@services/wallet/wallet.model';
import useAccountTransaction from '../hooks/useAccountTransactions';
import { useIsFocused } from '@react-navigation/native';

const PendingTransactions = () => {
  const selectedAccount = useRecoilValue(selectedAccountState);
  const isFocused = useIsFocused();

  const { pendingTransactions, setAllTransactions } = useAccountTransaction({
    account: selectedAccount as BaseWalletAccount,
    triggerReload: isFocused,
  });

  if (!pendingTransactions.length) return null;

  return (
    <View style={{ width: '100%', marginTop: 24 }}>
      {pendingTransactions.map((tx) => (
        <PendingTransactionItem
          onTransactionSuccess={setAllTransactions}
          key={tx.hash}
          transaction={tx}
        />
      ))}
    </View>
  );
};

export default PendingTransactions;
