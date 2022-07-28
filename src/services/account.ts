import { useState } from 'react';
import {
  Abi,
  Account,
  Contract,
  defaultProvider,
  ec,
  number,
  Provider,
} from 'starknet';
import ArgentAccount from '../../contracts/ArgentAccount.json';

const provider = new Provider({ network: 'goerli-alpha' });

const useAccount = () => {
  const [account, setAccount] = useState<Account>();
  const [isLoading, setIsLoading] = useState(false);

  const createAccount = async () => {
    try {
      setIsLoading(true);
      const starkKeyPair = ec.genKeyPair();
      const starkKeyPub = ec.getStarkKey(starkKeyPair);

      console.log('Deployment Tx - Account Contract to StarkNet...');
      const accountResponse = await provider.deployContract({
        contract: {
          abi: ArgentAccount.abi as Abi,
          program: ArgentAccount.program,
          entry_points_by_type: ArgentAccount.entry_points_by_type,
        },
        addressSalt: starkKeyPub,
      });

      console.log(accountResponse);

      console.log(
        'Waiting for Tx to be Accepted on Starknet - Argent Account Deployment...'
      );
      await provider.waitForTransaction(accountResponse.transaction_hash);

      // Initialize argent account
      // console.log('Invoke Tx - Initialize Argnet Account...');
      // const initializeResponse = await accountContract.invoke(
      //   'initialize',
      //   [starkKeyPub, '0'],
      //   { maxFee: number.toBN(1) }
      // );
      // console.log(
      //   'Waiting for Tx to be Accepted on Starknet - Initialize Account...'
      // );
      // await defaultProvider.waitForTransaction(
      //   initializeResponse.transaction_hash
      // );

      // console.log('Create account success.');
      // // Use your new account address
      // const account = new Account(
      //   provider,
      //   accountResponse.address ?? '',
      //   starkKeyPair
      // );

      // console.log(accountResponse);
      // console.log(account);
      setAccount(account);
      setIsLoading(false);
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
