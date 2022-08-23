import { useEffect, useState } from 'react';
import wallet from '../../../services/wallet';
import { WalletAccount } from '../../../services/wallet/wallet.model';
import { fetchBalance } from '../../../services/balance';
import { getNetwork } from '../../../services/network';
import { Account } from '../account.model';
import useSWR from 'swr';
import { useRecoilState } from 'recoil';
import selectedAccountState from '../selected-account.state';
import useAccounts from './useAccounts';

export const useBalance = (tokenAddress?: string, account?: Account | null) => {
  return useSWR([tokenAddress, account], fetchBalance, {
    refreshInterval: 5000,
  });
};

const useSelectedAccount = (fetchOnMount = true) => {
  const [selectedAccount, setSelectedAccount] = useRecoilState<
    Account | undefined
  >(selectedAccountState);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (fetchOnMount) {
      getSelectedAccount();
    }
  }, [fetchOnMount]);

  const getSelectedAccount = async () => {
    setIsLoading(true);
    const res = await wallet.getSelectedAccount();
    setSelectedAccount(res ? mapWalletAccountToAccount(res) : undefined);
    setIsLoading(false);
  };

  const selectAccount = async (account?: Account) => {
    await wallet.selectAccount(
      account
        ? {
            address: account.address,
            networkId: account.networkId,
          }
        : undefined
    );
    setSelectedAccount(account);
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

export function mapWalletAccountToAccount(
  walletAccount: WalletAccount
): Account {
  return new Account(
    walletAccount.address,
    getNetwork(walletAccount.networkId),
    walletAccount.signer
  );
}
