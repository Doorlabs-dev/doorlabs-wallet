import wallet from '../../../services/wallet';
import { Account } from '../account.model';
import { mapWalletAccountToAccount } from './useSelectedAccount';

const useAccounts = () => {
  const getAllWalletAccounts = async (): Promise<Account[]> => {
    const result = await wallet.getWalletAccounts();
    return result.map(mapWalletAccountToAccount);
  };

  const getAccountsByNetwork = async (
    networkId: string
  ): Promise<Account[]> => {
    const result = await wallet.getWalletAccountsByNetwork(networkId);
    return result.map(mapWalletAccountToAccount);
  };

  return {
    getAllWalletAccounts,
    getAccountsByNetwork,
  };
};

export default useAccounts;
