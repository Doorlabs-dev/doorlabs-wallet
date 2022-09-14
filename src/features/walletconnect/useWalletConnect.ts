import walletConnectActionStore from '@services/walletconnect/walletConnectActionStore.store';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScreenNavigationProps } from '@router/navigation-props';
import ScreenNames from '@router/screenNames';
import { useRecoilValue } from 'recoil';
import selectedAccountState from '@features/account/selected-account.state';
import {
  ConnectAction,
  ExecuteTransactionAction,
} from '@services/walletconnect/walletconnect.action';
import walletConnectPreAuthorize from '@services/walletconnect/walletconnectPreauthorize';
import { Alert } from 'react-native';
import { testConnectLink, testExecuteLink } from './mock_link';
import useSelectedAccount from '@features/account/hooks/useSelectedAccount';

const useWalletConnect = () => {
  const navigation = useNavigation<ScreenNavigationProps<any>>();
  const selectedAccount = useRecoilValue(selectedAccountState);
  const { selectAccount } = useSelectedAccount(false);

  const handleConnect = async (action: ConnectAction) => {
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
      return;
    }

    Alert.alert('Already connected with this account');
  };

  const handleExecuteTx = async (action: ExecuteTransactionAction) => {
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
  // TEST
  // useEffect(() => {
  //   testExecuteLink();
  // }, []);

  useEffect(() => {
    async function fetchAction() {
      const action = await walletConnectActionStore.get();

      if (!action) return;
      if (!selectedAccount) return;

      switch (action.name) {
        case 'connect-dapp':
          handleConnect(action);
          break;
        case 'execute-transaction':
          handleExecuteTx(action);
          break;
        default:
          break;
      }
      // delete action after handle action
      await walletConnectActionStore.delete();
    }

    fetchAction();
  }, [selectedAccount?.address, selectedAccount?.networkId]);
};

export default useWalletConnect;
