import { Transaction } from '@services/transaction/transaction.type';
import { groupBy } from 'lodash-es';

type TransactionSectionList = { title: string; data: Transaction[] }[];

export function getTransactionsBySection(transactions: Transaction[]) {
  const groupsByKeys = groupBy(transactions, (tx) =>
    new Date(tx.timestamp * 1e3).toDateString()
  );

  const result: TransactionSectionList = [];

  Object.entries(groupsByKeys).forEach(([key, value]) => {
    result.push({ title: key, data: value });
  });

  return result;
}
