import walletConnectActionRequestStore from '@services/walletconnect/walletConnectActionRequestStore.store';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScreenNavigationProps } from '@router/navigation-props';
import ScreenNames from '@router/screenNames';
import { useRecoilValue } from 'recoil';
import selectedAccountState from '@features/account/selected-account.state';
import {
  ConnectActionRequest,
  ConnectActionResponse,
  ExecuteTransactionActionRequest,
} from '@services/walletconnect/walletconnect.action';
import walletConnectPreAuthorize from '@services/walletconnect/walletconnectPreauthorize';
import { Alert } from 'react-native';
import useSelectedAccount from '@features/account/hooks/useSelectedAccount';
import WalletConnectActionLinkHandler from '@services/walletconnect/walletConnectActionLinkHandler.service';
import useAppState from '@hooks/useAppState';

const useWalletConnect = () => {
  const navigation = useNavigation<ScreenNavigationProps<any>>();
  const selectedAccount = useRecoilValue(selectedAccountState);
  const { selectAccount } = useSelectedAccount(false);

  const handleConnect = async (action: ConnectActionRequest) => {
    const { payload } = action;
    const { meta, account } = payload;

    const isConnectedWithCurrentAccount = await walletConnectPreAuthorize(
      {
        address: selectedAccount?.address!,
        networkId: selectedAccount?.networkId!,
      },
      meta
    );

    const isConnectedWithPayloadAccount = await walletConnectPreAuthorize(
      {
        address: account?.address || '',
        networkId: account?.networkId || '',
      },
      meta
    );

    if (!isConnectedWithPayloadAccount && !isConnectedWithCurrentAccount) {
      navigation.navigate({
        name: ScreenNames.ACCOUNT_CONNECT_DAPP,
        params: {
          dAppMeta: action.payload.meta,
        },
      });
      return;
    }

    if (isConnectedWithPayloadAccount) {
      await selectAccount({
        address: account?.address || '',
        networkId: account?.networkId || '',
      });
      await WalletConnectActionLinkHandler.respond(meta, {
        action: 'connect-dapp',
        result: {
          account: {
            address: account?.address,
            networkId: account?.networkId,
          },
        },
      } as ConnectActionResponse);
      return;
    }

    await WalletConnectActionLinkHandler.respond(meta, {
      action: 'connect-dapp',
      result: {
        account: {
          address: selectedAccount?.address,
          networkId: selectedAccount?.networkId,
        },
      },
    } as ConnectActionResponse);
  };

  const handleExecuteTx = async (action: ExecuteTransactionActionRequest) => {
    const { payload } = action;
    const { meta, transactions, account } = payload;

    const isConnectedWithCurrentAccount = await walletConnectPreAuthorize(
      {
        address: selectedAccount?.address!,
        networkId: selectedAccount?.networkId!,
      },
      meta
    );

    const isConnectedWithPayloadAccount = await walletConnectPreAuthorize(
      {
        address: account?.address || '',
        networkId: account?.networkId || '',
      },
      meta
    );

    if (!isConnectedWithCurrentAccount && !isConnectedWithPayloadAccount) {
      Alert.alert('Not connected');
      return;
    }

    if (isConnectedWithPayloadAccount) {
      await selectAccount(account);
      navigation.navigate({
        name: ScreenNames.ACCOUNT_TRANSACTION_APPROVAL,
        params: {
          transactions,
        },
      });
      return;
    }

    if (isConnectedWithCurrentAccount) {
      navigation.navigate({
        name: ScreenNames.ACCOUNT_TRANSACTION_APPROVAL,
        params: {
          transactions,
        },
      });
      return;
    }
  };

  const fetchAction = async () => {
    const request = await walletConnectActionRequestStore.get();
    if (!request) return;
    if (!selectedAccount) return;

    switch (request.action) {
      case 'connect-dapp':
        handleConnect(request);
        break;
      case 'execute-transaction':
        handleExecuteTx(request);
        break;
      default:
        break;
    }
    // delete action after handle action
    await walletConnectActionRequestStore.delete();
  };

  useAppState({
    onAppActive: () => {
      fetchAction();
    },
    onAppBackground: () => {},
  });

  useEffect(() => {
    fetchAction();
  }, [selectedAccount?.address, selectedAccount?.networkId]);
};

export default useWalletConnect;
