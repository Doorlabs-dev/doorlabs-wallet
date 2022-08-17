import wallet from '../../../services/wallet';
import { WalletAccount } from '../../../services/wallet/wallet.model';

type UseWallet = {
  addAccount: (networkId: string) => Promise<void>;
};

const useWallet = (): UseWallet => {
  const addAccount = async (networkId: string) => {
    await wallet.addAccount(networkId);
  };

  return {
    addAccount,
  };
};

export default useWallet;
