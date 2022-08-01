import { ethers } from 'ethers';
import { useState } from 'react';
import {
  Abi,
  Account,
  Contract,
  ec,
  json,
  Provider,
  stark,
  defaultProvider,
} from 'starknet';
import ArgentAccount from '../../contracts/ArgentAccount.json';

const provider = new Provider({ network: 'goerli-alpha' }); // TODO: should be able to switch network later

// const compiledArgentAccount = JSON.parse(Buffer.from(JSON.stringify(ArgentAccount), 'ascii').toString())
const compiledArgentAccount = ArgentAccount;

const useAccount = () => {
  const [account, setAccount] = useState<Account>();
  const [isLoading, setIsLoading] = useState(false);
  const [wallet, setWallet] = useState<ethers.Wallet>();

  const createAccount = async () => {
    try {
      setIsLoading(true);

      const newWallet = ethers.Wallet.createRandom();
      setWallet(newWallet);

      // Generate public and private key pair.
      // const privateKey = stark.randomAddress()
      const privateKey = newWallet.privateKey;

      const starkKeyPair = ec.genKeyPair(privateKey);
      const starkKeyPub = ec.getStarkKey(starkKeyPair);

      // Deploy the Account contract and wait for it to be verified on StarkNet.
      console.log('Deployment Tx - Account Contract to StarkNet...');
      const txnResponse = await provider.deployContract({
        contract: {
          abi: ArgentAccount.abi as Abi,
          program: ArgentAccount.program,
          entry_points_by_type: ArgentAccount.entry_points_by_type,
        },
        addressSalt: starkKeyPub,
      });

      // Wait for the deployment transaction to be accepted on StarkNet
      console.log(txnResponse);
      console.log(
        'Waiting for Tx to be Accepted on Starknet - Argent Account Deployment...'
      );
      await provider.waitForTransaction(txnResponse.transaction_hash);

      if (!txnResponse?.address) throw 'Cannot create account';

      console.log('Invoke Tx - Initialize Argnet Account...'); // TODO: // Initialize argent account

      // Use your new account address
      const account = new Account(provider, txnResponse.address, starkKeyPair);

      setAccount(account);
      setIsLoading(false);
      console.log('account is created', account?.address);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return {
    account,
    createAccount,
    isLoading,
  };
};

export default useAccount;
