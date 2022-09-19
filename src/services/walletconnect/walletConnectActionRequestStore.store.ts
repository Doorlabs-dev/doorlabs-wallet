import LocalStorage from '@services/store/localstore';
import {
  ConnectActionRequest,
  ExecuteTransactionActionRequest,
} from './walletconnect.action';

export type WalletConnectActionRequest =
  | ConnectActionRequest
  | ExecuteTransactionActionRequest;

// Store action request from other apps
const walletConnectActionRequestStore =
  new LocalStorage<WalletConnectActionRequest>({
    name: 'walletme:walletconnectAction',
  });

export default walletConnectActionRequestStore;
