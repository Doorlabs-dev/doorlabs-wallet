import * as SecureStore from 'expo-secure-store';

const WALLET_PASSWORD_KEY = 'wallet_password';

const useWalletPassword = () => {
  const getSavedPassword = async () => {
    const value = await SecureStore.getItemAsync(WALLET_PASSWORD_KEY);
    return value;
  };

  const setPassword = async (password: string) => {
    await SecureStore.setItemAsync(WALLET_PASSWORD_KEY, password);
  };

  const deletePassword = async () => {
    await SecureStore.deleteItemAsync(WALLET_PASSWORD_KEY);
  };

  return {
    setPassword,
    getSavedPassword,
    deletePassword,
  };
};

export default useWalletPassword;
