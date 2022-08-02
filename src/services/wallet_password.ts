import * as SecureStore from 'expo-secure-store';

const WALLET_PASSWORD_KEY = 'wallet_password';

const useWalletPassword = () => {
  const getWalletSavedPassword = async () => {
    const value = await SecureStore.getItemAsync(WALLET_PASSWORD_KEY);
    return value;
  };

  const setWalletPassword = async (password: string) => {
    await SecureStore.setItemAsync(WALLET_PASSWORD_KEY, password);
  };

  const deleteWalletPassword = async () => {
    await SecureStore.deleteItemAsync(WALLET_PASSWORD_KEY);
  };

  return {
    getWalletSavedPassword,
    setWalletPassword,
    deleteWalletPassword,
  };
};

export default useWalletPassword;
