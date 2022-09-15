import * as Linking from 'expo-linking';
import {
  ConnectActionRequest,
  ConnectActionResponse,
  DAppMeta,
  ExecuteTransactionActionRequest,
  ExecuteTransactionActionResponse,
  WalletConnectActions,
} from './walletconnect.action';
import walletConnectActionStore from './walletConnectActionRequestStore.store';
import {
  isValidConnectDappAction,
  isValidExecuteTransactionAction,
} from './walletConnectValidator';

class WalletConnectActionLinkHandler {
  static _parseQueryParams(
    queryParams: any
  ): { action: string; data: any } | null {
    if (!queryParams?.data) return null;
    try {
      const data = JSON.parse(queryParams.data);

      return {
        action: queryParams?.action,
        data,
      };
    } catch (error) {
      return null;
    }
  }

  static _makeResponseUri(
    dAppMeta: DAppMeta,
    response: ConnectActionResponse | ExecuteTransactionActionResponse
  ) {
    const responseUri = Linking.createURL('response', {
      scheme: dAppMeta.scheme,
      queryParams: {
        action: response.action,
        result: JSON.stringify(response.result),
      },
    });
    return responseUri;
  }

  static async addAction(url: string) {
    const { hostname, queryParams } = Linking.parse(url);
    const queryData = this._parseQueryParams(queryParams);

    if (hostname !== 'request') throw Error('Unknown url');

    switch (queryData?.action) {
      case WalletConnectActions.connectDapp:
        if (isValidConnectDappAction(queryData)) {
          const action = {
            action: 'connect-dapp',
            payload: queryData.data,
          } as ConnectActionRequest;

          walletConnectActionStore.set(action);
        } else {
          throw Error('Invalid payload to connect with wallet');
        }
        break;
      case WalletConnectActions.executeTransaction:
        if (
          isValidConnectDappAction(queryData) &&
          isValidExecuteTransactionAction(queryData)
        ) {
          const action = {
            action: 'execute-transaction',
            payload: queryData.data,
          } as ExecuteTransactionActionRequest;

          walletConnectActionStore.set(action);
        } else {
          throw Error('Invalid payload to execute transaction');
        }
        break;
      default:
        throw Error('Action not supported');
    }
  }

  static async respond(
    dAppMeta: DAppMeta,
    response: ConnectActionResponse | ExecuteTransactionActionResponse
  ) {
    const responseUri = this._makeResponseUri(dAppMeta, response);
    await Linking.openURL(responseUri);
  }
}

export default WalletConnectActionLinkHandler;
