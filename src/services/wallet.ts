// using etherjs in react native https://docs.ethers.io/v5/cookbook/react-native/

// Import the ethers library
import { ethers } from 'ethers';

import {
  Abi,
  Account,
  Contract,
  ec,
  json,
  Provider,
  stark,
  defaultProvider,
  KeyPair,
} from 'starknet';

import ArgentAccount from '../../contracts/ArgentAccount.json';
import { HDNode } from 'ethers/lib/utils';
import { grindKey } from './keys/keyDerivation';
import { useRef } from 'react';

const provider = new Provider({ network: 'goerli-alpha' }); // TODO: should be able to switch network later

export const deployAccountEth = async () => {
  const randomMnemonic = ethers.Wallet.createRandom().mnemonic;
  console.log('phrase:', randomMnemonic.phrase);

  const accounts = [];
  for (let accountIndex = 0; accountIndex < 3; accountIndex++) {
    // get the first 3 accounts
    // https://github.com/satoshilabs/slips/blob/master/slip-0044.md
    const ethCoinType = 60;
    const accountPath = `m/44'/${ethCoinType}'/0'/0/${accountIndex}`;
    const walletAccount = ethers.Wallet.fromMnemonic(
      randomMnemonic.phrase,
      accountPath
    );

    const account = {
      publicKey: walletAccount.address,
      privateKey: walletAccount.privateKey,
    };
    console.log(account);
    accounts.push(account);
  }
};

export const deployAccountStarkNet = async () => {
  const wallet = ethers.Wallet.createRandom();

  const randomMnemonic = wallet.mnemonic;

  const masterNode = HDNode.fromMnemonic(randomMnemonic.phrase);

  let accounts = [];
  for (let childIndex = 0; childIndex < 3; childIndex++) {
    const childPath = `m/44'/9004'/0'/0/${childIndex}`;
    const childNode = masterNode.derivePath(childPath);
    const groundKey = grindKey(childNode.privateKey);
    const starkKeyPair = ec.getKeyPair(groundKey);
    const starkKeyPub = ec.getStarkKey(starkKeyPair);

    accounts.push({ groundKey, starkKeyPub });

    console.log('index:', childIndex);
    console.log('groundKey:', groundKey);
    console.log('starkKeyPub:', starkKeyPub);
  }

  console.log({
    phrase: randomMnemonic.phrase,
  });

  // Deploy the Account contract and wait for it to be verified on StarkNet.
  console.log('Deployment Tx - Account Contract to StarkNet...');
  const txnResponse = await provider.deployContract({
    contract: {
      abi: ArgentAccount.abi as Abi,
      program: ArgentAccount.program,
      entry_points_by_type: ArgentAccount.entry_points_by_type,
    },
    addressSalt: accounts[0].starkKeyPub,
  });

  console.log(
    'Waiting for Tx to be Accepted on Starknet - Argent Account Deployment...'
  );
  await provider.waitForTransaction(txnResponse.transaction_hash);

  if (!txnResponse?.address) throw 'Cannot create account';

  console.log({
    address: txnResponse?.address,
  });

  // console.log('Invoke Tx - Initialize Argnet Account...') // TODO: // Initialize argent account

  // // Use your new account address
  // const account = new Account(provider, txnResponse.address, starkKeyPair)

  // console.log({
  //   // 'account.getContractAddresses': await account.getContractAddresses(),
  //   // 'account.address': account.address,
  //   // 'txnResponse?.address': txnResponse?.address,
  //   'wallet.privateKey': wallet.privateKey,
  //   'wallet.mnemonic': wallet.mnemonic,
  // })
};

import * as SecureStorage from 'expo-secure-store';

type Session = {
  password: string;
  secret: string;
};

type BaseWalletAccount = {
  address: string;
};

const BACKUP_KEY = 'backup';
const ACCOUNT_KEY = 'account';
const N = 64;
const encryptOptions = {
  scrypt: { N },
};

class Wallet {
  public backup?: string;
  public session?: Session;

  setSession(secret: string, password: string) {
    this.session = { password, secret };
  }

  async startSession(password: string) {
    if (!(await this.isInitialized())) {
      await this.createWallet(password);
      return true;
    }

    try {
      const wallet = await ethers.Wallet.fromEncryptedJson(
        this.backup!,
        password
      );
      this.setSession(wallet.privateKey, password);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async isInitialized() {
    await this.loadBackup();

    return !!this.backup;
  }

  async loadBackup() {
    this.backup = (await SecureStorage.getItemAsync(BACKUP_KEY)) || undefined;
  }

  async storeBackup() {
    if (!this.backup) return;

    const data = JSON.parse(this.backup);
    const account = await this.getWalletAccount();
    const extendedBackup = {
      ...data,
      account,
    };

    const backupString = JSON.stringify(extendedBackup);

    await SecureStorage.setItemAsync(BACKUP_KEY, backupString);
    this.backup = backupString;
  }

  async createWallet(password: string) {
    const wallet = ethers.Wallet.createRandom();
    this.backup = await wallet.encrypt(password, encryptOptions);
    this.storeBackup();
    this.setSession(wallet.privateKey, password);
  }

  async getSeedPhrase() {
    if (!this.session || !this.backup) return;

    const wallet = await ethers.Wallet.fromEncryptedJson(
      this.backup,
      this.session.password
    );

    return wallet.mnemonic.phrase;
  }

  async restoreSeedPhrase(seedPhrase: string, newPassword: string) {
    const wallet = ethers.Wallet.fromMnemonic(seedPhrase);
    const newBackup = await wallet.encrypt(newPassword, encryptOptions);
    this.backup = newBackup;
    await this.storeBackup();
  }

  async getWalletAccount(): Promise<BaseWalletAccount | null> {
    const result = await SecureStorage.getItemAsync(ACCOUNT_KEY);

    if (result) {
      return JSON.parse(result) as BaseWalletAccount;
    }
    return null;
  }

  async addWalletAccount(account: BaseWalletAccount) {
    await SecureStorage.setItemAsync(ACCOUNT_KEY, JSON.stringify(account));
  }

  async createNewAccount() {
    if (!this.session) return;

    const starkKeyPair = ec.getKeyPair(this.session.secret);
    const starkKeyPub = ec.getStarkKey(starkKeyPair);

    const txResponse = await provider.deployContract({
      contract: {
        abi: ArgentAccount.abi as Abi,
        program: ArgentAccount.program,
        entry_points_by_type: ArgentAccount.entry_points_by_type,
      },
      addressSalt: starkKeyPub,
    });

    await provider.waitForTransaction(txResponse.transaction_hash);

    if (!txResponse.address) throw 'Cannot create account';

    const account = {
      address: txResponse.address,
    };
    await this.addWalletAccount(account);
    await this.storeBackup();
    return { account, txHash: txResponse.transaction_hash };
  }
}

export default Wallet;
