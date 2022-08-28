import { useEffect, useMemo, useState } from 'react';
import { transactionStore } from '@services/transaction';
import { compareEqualAccount } from '@services/account';
import { BaseWalletAccount } from '@services/wallet/wallet.model';
import { Transaction } from '@services/transaction/transaction.type';

type Props = {
  account?: BaseWalletAccount;
  triggerReload?: boolean;
};

export const getAccountTransaction = async (account: BaseWalletAccount) => {
  return transactionStore.get((tx) => compareEqualAccount(tx.account, account));
};

const useAccountTransactions = ({ account, triggerReload }: Props) => {
  const [allTransactions, setAllTransactions] = useState<Transaction[]>([]);

  const sortedTransactions = useMemo(() => {
    return allTransactions.sort((a, b) => b.timestamp - a.timestamp);
  }, [allTransactions]);

  const pendingTransactions = useMemo(() => {
    return sortedTransactions.filter((tx) => tx.status === 'RECEIVED');
  }, [sortedTransactions]);

  const getData = async () => {
    if (!account) return;

    const result = await getAccountTransaction(account);
    setAllTransactions(result);
  };

  useEffect(() => {
    getData();
  }, [account?.address, account?.networkId]);

  useEffect(() => {
    if (!triggerReload) return;

    getData();
  }, [triggerReload]);

  return {
    allTransactions,
    pendingTransactions,
    setAllTransactions,
  };
};

export default useAccountTransactions;
