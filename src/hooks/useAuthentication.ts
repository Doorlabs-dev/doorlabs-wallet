import { useEffect, useState } from 'react';
import { atom, useRecoilState } from 'recoil';
import useWalletPassword from './useWalletPassword';

const accountAvailableState = atom({
  key: 'accountAvailableState',
  default: false,
});

const authenticationState = atom({
  key: 'authenticationState',
  default: false,
});

const useAuthentication = () => {
  const [isCheckingAccount, setIsCheckingAccount] = useState(true);
  const [isAccountAvailable, setIsAccountAvailable] = useRecoilState(
    accountAvailableState
  );
  const [isAuthenticated, setIsAuthenticated] =
    useRecoilState(authenticationState);
  const { getSavedPassword } = useWalletPassword();

  const checkAccountAvailable = async () => {
    const result = await getSavedPassword();
    if (result != null) {
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
