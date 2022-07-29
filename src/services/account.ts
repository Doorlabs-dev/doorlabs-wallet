import { useState } from 'react';
import { Abi, Account, Contract, ec, json, Provider } from 'starknet';
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

      const account = new Account(
        provider,
        accountResponse.address ?? '',
        starkKeyPair
      );

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
