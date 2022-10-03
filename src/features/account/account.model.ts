import { addTransaction } from '@services/transaction';
import wallet from '@services/wallet';
import { ProviderInterface, Account as SNAccount, ec } from 'starknet';
import { Network } from '../../services/network';
import { getProvider } from '../../services/provider';
import {
  WalletAccount,
  WalletAccountSigner,
} from '../../services/wallet/wallet.model';

export class Account {
  address: string;
  network: Network;
  networkId: string;
  signer: WalletAccountSigner;
  txHash?: string;
  name?: string;

  provider: ProviderInterface;

  constructor({
    address,
    network,
    signer,
    txHash,
    name,
  }: {
    address: string;
    network: Network;
    signer: WalletAccountSigner;
    txHash?: string;
    name?: string;
  }) {
    this.address = address;
    this.network = network;
    this.networkId = network.id;
    this.signer = signer;
    this.provider = getProvider(network);
    this.txHash = txHash;
    this.name = name;
  }

  getWalletAccount(): WalletAccount {
    return {
      address: this.address,
      signer: this.signer,
      networkId: this.networkId,
      network: this.network,
      name: this.name,
    };
  }

  getStarknetAccount() {
    const starkPair = wallet.getKeyPairByDerivationPath(
      this.signer.derivationPath
    );
    return new SNAccount(this.provider, this.address, starkPair);
  }

  static async addAccount(networkId: string): Promise<Account> {
    const result = await wallet.addAccount(networkId);
    const { txHash, account } = result;
    await addTransaction({
      hash: txHash,
      account,
      meta: {
        type: 'deploy',
        title: 'Deploy account',
      },
    });

    return new Account({
      address: account.address,
      network: account.network,
      signer: account.signer,
      txHash: txHash,
      name: account.name,
    });
  }
}
