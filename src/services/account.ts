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

      console.log(account);

      // const erc20Response = await defaultProvider.deployContract({
      //   contract: {
      //     abi: ERC20.abi as Abi,
      //     program: ERC20.program,
      //     entry_points_by_type: ERC20.entry_points_by_type,
      //   },
      // });

      // console.log(
      //   'Waiting for Tx to be Accepted on Starknet - ERC20 Deployment...'
      // );
      // await defaultProvider.waitForTransaction(erc20Response.transaction_hash);
      // const erc20Address = erc20Response.address ?? '';
      // const erc20 = new Contract(ERC20.abi as Abi, erc20Address);
      // console.log('ERC20 address', erc20Address);

      // erc20.connect(account);

      // const { transaction_hash: mintTxHash } = await erc20.mint(
      //   account.address,
      //   '1000'
      // );

      // console.log(`Waiting for Tx to be Accepted on Starknet - Minting...`);

      // await defaultProvider.waitForTransaction(mintTxHash);
      // console.log(`Calling StarkNet for account balance...`);
      // const balanceBeforeTransfer = await erc20.balance_of(account.address);

      // console.log(
      //   `account Address ${account.address} has a balance of:`,
      //   number.toBN(balanceBeforeTransfer.res, 16).toString()
      // );

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
