import LocalStorage from '@services/store/localstore';
import {
  ConnectAction,
  ExecuteTransactionAction,
} from './walletconnect.action';

export type WalletConnectAction = ConnectAction | ExecuteTransactionAction;

// Store action request from other apps
const walletConnectActionStore = new LocalStorage<WalletConnectAction>({
  name: 'walletme:walletconnectAction',
});

export default walletConnectActionStore;
