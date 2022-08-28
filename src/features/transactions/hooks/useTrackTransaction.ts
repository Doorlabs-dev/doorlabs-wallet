import { getTransactionReceipt, transactionStore } from '@services/transaction';
import {
  compareTransactions,
  Transaction,
  TRANSACTION_STATUSES_TO_TRACK,
} from '@services/transaction/transaction.type';
import { useEffect } from 'react';
import { TransactionReceiptResponse } from 'starknet';
import useSWR from 'swr';
import { getAccountTransaction } from './useAccountTransactions';

type Props = {
  transaction: Transaction;
  onTransactionSuccess: (transactions: Transaction[]) => void;
};

const useTrackTransaction = ({ transaction, onTransactionSuccess }: Props) => {
  const { data, error } = useSWR(
    [transaction],
    async (tx) => await getTransactionReceipt(tx),
    {
      refreshInterval: 30e3,
    }
  );

  const updateTransaction = async (newTx: TransactionReceiptResponse) => {
    await transactionStore.setItem(
      (tx) =>
        compareTransactions(tx, {
          hash: newTx?.transaction_hash || tx.hash,
          account: {
            networkId: transaction.account.networkId,
          },
        }),
      { ...transaction, status: newTx.status }
    );

    onTransactionSuccess(await getAccountTransaction(transaction.account));
  };

  useEffect(() => {
    if (error) return;
    if (!data) return;

    if (TRANSACTION_STATUSES_TO_TRACK.includes(data?.status) || !data?.status)
      return;

    updateTransaction(data);
  }, [data?.status, error]);
};

export default useTrackTransaction;
