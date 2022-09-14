import * as Linking from 'expo-linking';
import {
  ConnectAction,
  ExecuteTransactionAction,
  WalletConnectActionPaths,
} from './walletconnect.action';
import walletConnectActionStore from './walletConnectActionStore.store';
import {
  isValidConnectDappAction,
  isValidExecuteTransactionAction,
} from './walletConnectValidator';

class WalletConnectActionLinkHandler {
  private _parsePayload(queryParams: any) {
    if (!queryParams?.data) return null;
    try {
      return JSON.parse(queryParams.data);
    } catch (error) {
      return null;
    }
  }

  async addAction(url: string) {
    const { hostname, queryParams } = Linking.parse(url);
    const payload = this._parsePayload(queryParams);

    switch (hostname) {
      case WalletConnectActionPaths.connectDapp:
        if (isValidConnectDappAction(payload)) {
          const action = {
            name: 'connect-dapp',
            payload: payload,
          } as ConnectAction;

          walletConnectActionStore.set(action);
        } else {
          throw Error('Invalid payload to connect with wallet');
        }
        break;
      case WalletConnectActionPaths.executeTransaction:
        if (
          isValidConnectDappAction(payload) &&
          isValidExecuteTransactionAction(payload)
        ) {
          const action = {
            name: 'execute-transaction',
            payload,
          } as ExecuteTransactionAction;
          walletConnectActionStore.set(action);
        } else {
          throw Error('Invalid payload to execute transaction');
        }
        break;
      default:
        throw Error('Not supported this action');
    }
  }
}

export default WalletConnectActionLinkHandler;
