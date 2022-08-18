import { ProviderInterface } from 'starknet';
import { Network } from '../../services/network';
import { getProvider } from '../../services/provider';
import { WalletAccountSigner } from '../../services/wallet/wallet.model';

export class Account {
  address: string;
  network: Network;
  networkId: string;
  signer: WalletAccountSigner;

  provider: ProviderInterface;

  constructor(address: string, network: Network, signer: WalletAccountSigner) {
    this.address = address;
    this.network = network;
    this.networkId = network.id;
    this.signer = signer;
    this.provider = getProvider(network);
  }
}
