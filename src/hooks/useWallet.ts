import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import Wallet from '../services/wallet';
import useWalletPassword from '../services/wallet_password';

const wallet = new Wallet();

const useWallet = () => {};

export default useWallet;
