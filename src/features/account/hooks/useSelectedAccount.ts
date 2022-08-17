import { useEffect, useState } from 'react';
import wallet from '../../../services/wallet';
import { WalletAccount } from '../../../services/wallet/wallet.model';
import { fetchBalance } from '../../../services/balance';
import { getNetwork } from '../../../services/network';
import { Account } from '../account.model';
import useSWR from 'swr';
import { getTokenInfo } from '../../../tokens';

const useBalance = (tokenAddress?: string, account?: Account | null) => {
  return useSWR([tokenAddress, account], fetchBalance, {
    refreshInterval: 5000,
  });
};

const useSelectedAccount = () => {
  const [selectedAccount, setSelectedAccount] = useState<Account | null>(null);
  const { data: ethBalance } = useBalance(
    getTokenInfo('ETH', selectedAccount?.networkId)?.address,
    selectedAccount
  );

  useEffect(() => {
    getSelectedAccount();
  }, []);

  const getSelectedAccount = async () => {
    const res = await wallet.getSelectedAccount();
    setSelectedAccount(res ? mapWalletAccountToAccount(res) : null);
  };

  return {
    selectedAccount,
    ethBalance: ethBalance || 0,
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
