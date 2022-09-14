import { AccountIdentifier } from '@services/wallet/wallet.model';
import { Call } from 'starknet';

export type DAppMeta = {
  name: string;
  uri: string;
};

export interface ConnectAction {
  name: 'connect-dapp';
  payload: {
    meta: DAppMeta;
    account?: AccountIdentifier;
  };
}

export interface ExecuteTransactionAction {
  name: 'execute-transaction';
  payload: {
    meta: DAppMeta;
    transactions: Call | Call[];
    account?: AccountIdentifier;
  };
}

export const WalletConnectActionPaths = {
  connectDapp: 'connect-dapp',
  executeTransaction: 'execute-transaction',
};
