import wallet from '../../../services/wallet';

const useAccounts = () => {
  const getAllWalletAccounts = async () => {
    await wallet.getWalletAccounts();
  };

  const getAccountsByNetwork = async (networkId: string) => {
    return await wallet.getWalletAccountsByNetwork(networkId);
  };

  const getSelectedAccount = async () => {
    return await wallet.getSelectedAccount();
  };

  return {
    getSelectedAccount,
    getAllWalletAccounts,
    getAccountsByNetwork,
  };
};

export default useAccounts;
