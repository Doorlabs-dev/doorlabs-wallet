import { WalletAccount } from '@services/wallet/wallet.model';
import { Status } from 'starknet';

export const SUCCESS_STATUSES: Status[] = [
  'ACCEPTED_ON_L1',
  'ACCEPTED_ON_L2',
  'PENDING',
];

export const TRANSACTION_STATUSES_TO_TRACK: Status[] = [
  'RECEIVED',
  'NOT_RECEIVED',
];

export interface TransactionMeta {
  title?: string;
  subTitle?: string;
  type?: 'deploy' | 'transfer';
}

export interface TransactionBase {
  hash: string;
  account: {
    networkId: string;
  };
}

export interface TransactionRequest extends TransactionBase {
  account: WalletAccount;
  meta?: TransactionMeta;
}

export interface Transaction extends TransactionRequest {
  status: Status;
  failureReason?: { code: string; error_message: string };
  timestamp: number;
}

export const compareTransactions = (
  a: TransactionBase,
  b: TransactionBase
): boolean => a.hash === b.hash && a.account.networkId === a.account.networkId;
