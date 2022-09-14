import { useEffect, useState } from 'react';
import wallet from '../../../services/wallet';
import { Account } from '../account.model';
import { useRecoilState, useRecoilValue } from 'recoil';
import selectedAccountState from '../selected-account.state';
import networkState from '@features/network/network.state';
import useAccounts from './useAccounts';
import { mapWalletAccountToAccount } from '../utils/mapWalletAccountToAccount';
import { AccountIdentifier } from '@services/wallet/wallet.model';

const useSelectedAccount = (fetchOnMount = false) => {
  const [selectedAccount, setSelectedAccount] = useRecoilState<
    Account | undefined
  >(selectedAccountState);
  const [isLoading, setIsLoading] = useState(false);
  const selectedNetwork = useRecoilValue(networkState);
  const { getDefaultAccountByNetwork } = useAccounts();

  useEffect(() => {
    if (fetchOnMount) {
      getSelectedAccount();
    }
  }, [selectedNetwork?.id, fetchOnMount]);

  const getSelectedAccount = async () => {
    setIsLoading(true);
    let res = await wallet.getSelectedAccount();

    // if account network is the same with selected network
    if (!!res && res.networkId === selectedNetwork.id) {
      setIsLoading(false);
      setSelectedAccount(mapWalletAccountToAccount(res));
      return;
    }

    if (!res || res.networkId !== selectedNetwork.id) {
      const defaultAcc = await getDefaultAccountByNetwork(selectedNetwork.id);
      await selectAccount(
        defaultAcc ? mapWalletAccountToAccount(defaultAcc) : undefined
      );

      setIsLoading(false);
    }
  };

  const selectAccount = async (account?: AccountIdentifier) => {
    const starknetAccount = await wallet.selectAccount(
      account
        ? {
            address: account.address,
            networkId: account.networkId,
          }
        : undefined
    );
    if (starknetAccount) {
      setSelectedAccount(mapWalletAccountToAccount(starknetAccount));
    } else {
      throw Error('No account found');
    }
  };

  const exportPrivateKey = async () => {
    return await wallet.exportPrivateKey();
  };

  return {
    selectedAccount,
    isLoading,
    selectAccount,
    exportPrivateKey,
  };
};

export default useSelectedAccount;
