import { useEffect } from 'react';
import wallet from '../../../services/wallet';
import { WalletAccount } from '../../../services/wallet/wallet.model';
import { fetchBalance } from '../../../services/balance';
import { getNetwork } from '../../../services/network';
import { Account } from '../account.model';
import useSWR from 'swr';
import { useRecoilState } from 'recoil';
import selectedAccountState from '../selected-account.state';

export const useBalance = (tokenAddress?: string, account?: Account | null) => {
  return useSWR([tokenAddress, account], fetchBalance, {
    refreshInterval: 5000,
  });
};

const useSelectedAccount = () => {
  const [selectedAccount, setSelectedAccount] = useRecoilState<Account | null>(
    selectedAccountState
  );

  useEffect(() => {
    getSelectedAccount();
  }, []);

  const getSelectedAccount = async () => {
    const res = await wallet.getSelectedAccount();
    setSelectedAccount(res ? mapWalletAccountToAccount(res) : null);
  };

  const exportPrivateKey = async () => {
    return await wallet.exportPrivateKey();
  };

  return {
    selectedAccount,
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
