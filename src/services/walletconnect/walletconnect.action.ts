import { AccountIdentifier } from '@services/wallet/wallet.model';
import { Call } from 'starknet';

export const REQUEST_SCHEME = 'wmreq';
export const RESPONSE_SCHEME = 'wmres';

export type DAppMeta = {
  name: string;
  appId: string;
};

export interface ConnectActionRequest {
  action: 'connect-dapp';
  payload: {
    meta: DAppMeta;
    account?: AccountIdentifier;
  };
}

export interface ExecuteTransactionActionRequest {
  action: 'execute-transaction';
  payload: {
    meta: DAppMeta;
    transactions: Call | Call[];
    account?: AccountIdentifier;
  };
}

export type ConnectActionResponse = {
  action: 'connect-dapp';
  result: {
    account?: AccountIdentifier;
    error?: string;
  };
};

export type ExecuteTransactionActionResponse = {
  action: 'execute-transaction';
  result: {
    account?: AccountIdentifier;
    txHash?: string;
    error?: string;
  };
};

export const WalletConnectActions = {
  connectDapp: 'connect-dapp',
  executeTransaction: 'execute-transaction',
};
