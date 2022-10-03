import { Network } from '../network';

export interface WalletSession {
  password: string;
  secret: string;
}

export interface WalletAccountSigner {
  type: 'local_secret';
  derivationPath: string;
}

export interface WithSigner {
  signer: WalletAccountSigner;
}

export interface AccountIdentifier {
  name?: string;
  address: string;
  networkId: string;
}

export interface WalletAccount extends AccountIdentifier, WithSigner {
  network: Network;
  hidden?: boolean;
}
