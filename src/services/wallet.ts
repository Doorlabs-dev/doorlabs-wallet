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
import ProxyContract from '../../contracts/ProxyContract.json';
import { HDNode } from 'ethers/lib/utils';
import { getNextPathIndex, getStarkPair, grindKey } from './keys/keyDerivation';

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
import { BaseWalletAccount, WalletSession } from './wallet.model';
import { getSelectorFromName } from 'starknet/dist/utils/hash';

const BACKUP_KEY = 'backup';
const ACCOUNT_KEY = 'account';
const N = 64;
const encryptOptions = {
  scrypt: { N },
};
const PROXY_CONTRACT_CLASS_HASHES = [
  '0x25ec026985a3bf9d0cc1fe17326b245dfdc3ff89b8fde106542a3ea56c5a918',
];
const ARGENT_ACCOUNT_CONTRACT_CLASS_HASHES = [
  '0x3e327de1c40540b98d05cbcb13552008e36f0ec8d61d46956d2f9752c294328',
];
const baseDerivationPath = "m/44'/9004'/0'/0";
class Wallet {
  public backup?: string;
  public session?: WalletSession;

  setSession(secret: string, password: string) {
    this.session = { password, secret };
  }

  async startSession(password?: string) {
    if (!password) return;

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

  async getWalletAccount(): Promise<BaseWalletAccount | undefined> {
    const result = await SecureStorage.getItemAsync(ACCOUNT_KEY);

    if (!result) return;

    return JSON.parse(result) as BaseWalletAccount;
  }

  async addWalletAccount(account: BaseWalletAccount) {
    await SecureStorage.setItemAsync(ACCOUNT_KEY, JSON.stringify(account));
  }

  async getAccountClassHash() {
    // Goerli-testnet account class hash
    return '0x3e327de1c40540b98d05cbcb13552008e36f0ec8d61d46956d2f9752c294328';
    // return PROXY_CONTRACT_CLASS_HASHES[0];
  }

  async getDeployContractPayloadForAccount() {
    const starkKeyPair = ec.getKeyPair(this.session?.secret);
    const starkKeyPub = ec.getStarkKey(starkKeyPair);
    console.log('Getting account class hash');
    const accountClassHash = await this.getAccountClassHash();
    console.log('Account class hash', accountClassHash);

    const payload = {
      contract: {
        abi: ProxyContract.abi as Abi,
        program: ProxyContract.program,
        entry_points_by_type: ProxyContract.entry_points_by_type,
      },
      constructorCalldata: stark.compileCalldata({
        implementation: accountClassHash,
        selector: getSelectorFromName('initialize'),
        calldata: stark.compileCalldata({ signer: starkKeyPub, guardian: '0' }),
      }),
      addressSalt: starkKeyPub,
    };

    return payload;
  }

  async createNewAccount() {
    if (!this.session) return;

    console.log('Getting payload for deploying contract');
    const payload = await this.getDeployContractPayloadForAccount();
    console.log(payload);
    console.log('Deploying proxy contract');
    const txResponse = await provider.deployContract(payload);

    console.log(txResponse);
    console.log('Waiting for transaction to be accepted');
    await provider.waitForTransaction(txResponse.transaction_hash);

    if (!txResponse.address) throw 'Cannot create account';

    console.log('Create account successfully');
    const account = {
      address: txResponse.address,
    };

    await this.addWalletAccount(account);
    await this.storeBackup();

    return { account, txHash: txResponse.transaction_hash };
  }
}

export default Wallet;
