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

export interface BaseWalletAccount {
  address: string;
  networkId: string;
}

export interface WalletAccount extends BaseWalletAccount, WithSigner {
  network: Network;
  hidden?: boolean;
}
