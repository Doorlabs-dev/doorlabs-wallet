import wallet from '@services/wallet';
import { ProviderInterface } from 'starknet';
import { Network } from '../../services/network';
import { getProvider } from '../../services/provider';
import { WalletAccountSigner } from '../../services/wallet/wallet.model';

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

  static async addAccount(networkId: string): Promise<Account> {
    const result = await wallet.addAccount(networkId);
    const { txHash, account } = result;

    return new Account(
      account.address,
      account.network,
      account.signer,
      txHash
    );
  }
}
