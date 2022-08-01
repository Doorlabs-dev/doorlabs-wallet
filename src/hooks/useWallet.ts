import { ethers } from 'ethers';
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import Wallet from '../services/wallet';
import { BaseWalletAccount } from '../services/wallet.model';
import useWalletPassword from '../services/wallet_password';

const wallet = new Wallet();

const useWallet = () => {
  const { getSavedPassword } = useWalletPassword();
  const [account, setAccount] = useState<BaseWalletAccount>();
  const [isInitializing, setIsInitializing] = useState(false);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    setIsInitializing(true);
    const success = await wallet.startSession(
      (await getSavedPassword()) ?? undefined
    );
    if (success) {
      const walletAccount = await wallet.getWalletAccount();
      setAccount(walletAccount);
      console.log(walletAccount);
      console.log(wallet.backup);
      console.log(await wallet.getSeedPhrase());
    }
    setIsInitializing(false);
  };

  const createNewAccount = async () => {
    await wallet.createNewAccount();
    setAccount(await wallet.getWalletAccount());
  };

  return {
    isInitializing,
    account,
    createNewAccount,
  };
};

export default useWallet;
