import { useCallback, useState } from 'react';
import wallet from '../../../services/wallet';
import { BaseWalletAccount } from '../../../services/wallet.model';

const useWallet = () => {
  const [account, setAccount] = useState<BaseWalletAccount>();

  const getWalletAccount = useCallback(async () => {
    const account = await wallet.getWalletAccount();
    setAccount(account);
  }, []);

  return {
    account,
    getWalletAccount,
  };
};

export default useWallet;
