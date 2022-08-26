import { WalletAccount } from '@services/wallet/wallet.model';
import { Status } from 'starknet';

export interface TransactionMeta {
  title?: string;
  subTitle?: string;
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
