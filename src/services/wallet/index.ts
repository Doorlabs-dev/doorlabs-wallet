import { ethers } from 'ethers';
import { Abi, ec, json, Provider, stark } from 'starknet';
import ProxyContract from '../../../contracts/ProxyContract.json';
import {
  getNextPathIndex,
  getPathForIndex,
  getStarkPair,
} from '../keys/keyDerivation';
import * as SecureStorage from 'expo-secure-store';
import { WalletAccount, WalletSession } from './wallet.model';
import { getNetwork, Network } from '../network';
import { getProvider } from '../provider';
import { DEFAULT_NETWORKS } from '../network/default_networks';

const BACKUP_KEY = 'backup';
const ACCOUNTS_KEY = 'accounts';
const SELECTED_KEY = 'selected';
const defaultNetwork = DEFAULT_NETWORKS[1];

const N = 64; //TODO: use this number for DEV mode
const encryptOptions = {
  scrypt: { N },
};

const PROXY_CONTRACT_CLASS_HASHES = [
  '0x25ec026985a3bf9d0cc1fe17326b245dfdc3ff89b8fde106542a3ea56c5a918',
];
const ARGENT_ACCOUNT_CONTRACT_CLASS_HASHES = [
  '0x3e327de1c40540b98d05cbcb13552008e36f0ec8d61d46956d2f9752c294328',
];

const SELECTOR_FROM_NAME_INITIALIZE =
  '0x79dc0da7c54b95f10aa182ad0a46400db63156920adb65eca2654c0945a463';

const baseDerivationPath = "m/44'/9004'/0'/0";

class Wallet {
  public backup?: string;
  public session?: WalletSession;

  private static instance: Wallet;

  public static getInstance(): Wallet {
    if (!Wallet.instance) return new Wallet();

    return Wallet.instance;
  }

  setup() {
    this.readBackup();
  }

  async reset() {
    await this.resetWalletAccounts();
    await this.resetBackup();
    this.session = undefined;
    this.backup = undefined;
  }

  async readBackup() {
    await this.loadBackup();
    if (this.backup === undefined) return;
  }

  async isInitialized() {
    await this.loadBackup();

    return !!this.backup;
  }

  setSession(secret: string, password: string) {
    this.session = { password, secret };
  }

  hasSession() {
    return this.session !== undefined;
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
      return false;
    }
  }

  async loadBackup() {
    this.backup = (await SecureStorage.getItemAsync(BACKUP_KEY)) || undefined;
  }

  async storeBackup() {
    if (!this.backup) return;

    const data = JSON.parse(this.backup);
    const accounts = await this.getWalletAccounts();
    const extendedBackup = {
      ...data,
      accounts,
    };

    const backupString = JSON.stringify(extendedBackup);

    await SecureStorage.setItemAsync(BACKUP_KEY, backupString);
    this.backup = backupString;
  }

  async resetBackup() {
    await SecureStorage.deleteItemAsync(BACKUP_KEY);
  }

  async createWallet(password: string) {
    const wallet = ethers.Wallet.createRandom();
    this.backup = await wallet.encrypt(password, encryptOptions);
    await this.storeBackup();
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
    this.setSession(wallet.privateKey, newPassword);
    // TODO:
    // await this.restoreAccountFromWallet();

    await this.storeBackup();
  }

  async selectAccount(account: WalletAccount) {
    await SecureStorage.setItemAsync(SELECTED_KEY, JSON.stringify(account));
  }

  async getSelectedAccount(): Promise<WalletAccount | null> {
    const res = await SecureStorage.getItemAsync(SELECTED_KEY);
    if (res) {
      return JSON.parse(res) as WalletAccount;
    }

    const accounts = await this.getWalletAccountsByNetwork(defaultNetwork.id);
    return accounts[0];
  }

  async resetWalletAccounts() {
    await SecureStorage.deleteItemAsync(ACCOUNTS_KEY);
  }

  async getWalletAccountsByNetwork(networkId: string) {
    const accounts = await this.getWalletAccounts();
    return accounts.filter((acc) => acc.networkId === networkId);
  }

  async getWalletAccounts(): Promise<WalletAccount[]> {
    const result = await SecureStorage.getItemAsync(ACCOUNTS_KEY);

    if (!result) return [];

    return JSON.parse(result) as WalletAccount[];
  }

  private async addWalletAccounts(accounts: WalletAccount[]) {
    const oldAccounts = await this.getWalletAccounts();

    const result = [...oldAccounts, ...accounts];

    await SecureStorage.setItemAsync(ACCOUNTS_KEY, JSON.stringify(result));
  }
  // TODO: handle multi accounts
  // async restoreAccountFromWallet() {
  //   if (!this.session) return;
  //   const payload = await this.getDeployContractPayloadForAccount();
  //   const response = await provider.deployContract(payload);

  //   if (!response.address) return;

  //   const account = {
  //     address: response.address,
  //   };

  //   await this.addWalletAccount(account);

  //   return { account, txHash: response.transaction_hash };
  // }

  async getAccountClassHash(network: Network) {
    return network.accountClassHash;
  }

  async addAccount(
    networkId: string
  ): Promise<{ account: WalletAccount; txHash: string }> {
    try {
      if (!this.session) throw Error('No session opened');

      const network = getNetwork(networkId);

      const accounts = await this.getWalletAccounts();
      const currentPaths = accounts
        .filter(
          (account) =>
            account.signer.type === 'local_secret' &&
            account.network.id === network.id
        )
        .map((account) => account.signer.derivationPath);

      const index = getNextPathIndex(currentPaths, baseDerivationPath);

      const starkKeyPair = getStarkPair(
        index,
        this.session?.secret ?? '',
        baseDerivationPath
      );

      const starkPub = ec.getStarkKey(starkKeyPair);

      const accountClassHash = await this.getAccountClassHash(network);

      const payload = {
        contract: {
          abi: ProxyContract.abi as Abi,
          program: ProxyContract.program,
          entry_points_by_type: ProxyContract.entry_points_by_type,
        },
        constructorCalldata: stark.compileCalldata({
          implementation: accountClassHash,
          // TODO: hash generated by React native getting error
          // => Using hash generate on Nodejs
          // entry_point_selector: hash.getSelectorFromName('initialize'),
          entry_point_selector: SELECTOR_FROM_NAME_INITIALIZE,
          calldata: stark.compileCalldata({
            signer: starkPub,
            guardian: '0',
          }),
        }),
        addressSalt: starkPub,
      };

      const provider = getProvider(network);

      const txResponse = await provider.deployContract(payload);

      await provider.waitForTransaction(txResponse?.transaction_hash);

      if (!txResponse?.address) throw Error('Cannot create account');

      const account: WalletAccount = {
        address: txResponse.address,
        network,
        networkId: network.id,
        signer: {
          type: 'local_secret' as const,
          derivationPath: getPathForIndex(index, baseDerivationPath),
        },
      };

      await this.selectAccount(account);
      await this.addWalletAccounts([account]);
      await this.storeBackup();

      return { account, txHash: txResponse.transaction_hash };
    } catch (error) {
      throw error;
    }
  }
}

const wallet = Wallet.getInstance();

(() => {
  wallet.setup();
})();

export default wallet;
