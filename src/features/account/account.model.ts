import { addTransaction } from '@services/transaction';
import wallet from '@services/wallet';
import { ProviderInterface, Account as SNAccount, ec } from 'starknet';
import { getNetwork, Network } from '../../services/network';
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

  provider: ProviderInterface;

  constructor(
    address: string,
    network: Network,
    signer: WalletAccountSigner,
    txHash?: string
  ) {
    this.address = address;
    this.network = network;
    this.networkId = network.id;
    this.signer = signer;
    this.provider = getProvider(network);
    this.txHash = txHash;
  }

  getWalletAccount(): WalletAccount {
    return {
      address: this.address,
      signer: this.signer,
      networkId: this.networkId,
      network: this.network,
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

    return new Account(
      account.address,
      account.network,
      account.signer,
      txHash
    );
  }
}
