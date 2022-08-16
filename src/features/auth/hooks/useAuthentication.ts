import { useState } from 'react';
import { useRecoilState } from 'recoil';
import wallet from '../../../services/wallet';
import useWalletPassword from '../../../services/wallet_password';
import {
  accountAvailableState,
  authenticationState,
} from '../authentication.state';

const useAuthentication = () => {
  const [isCheckingAccount, setIsCheckingAccount] = useState(true);
  const [isAccountAvailable, setIsAccountAvailable] = useRecoilState(
    accountAvailableState
  );
  const [isAuthenticated, setIsAuthenticated] =
    useRecoilState(authenticationState);
  const { getWalletSavedPassword } = useWalletPassword();

  const checkAccountAvailable = async () => {
    const result = await getWalletSavedPassword();
    const initialized = await wallet.isInitialized();

    if (result != null && initialized) {
      setIsAccountAvailable(true);
    }
    setIsCheckingAccount(false);
  };

  return {
    isCheckingAccount,
    isAccountAvailable,
    isAuthenticated,
    setIsAccountAvailable,
    setIsAuthenticated,
    checkAccountAvailable,
  };
};

export default useAuthentication;
