import { getNetwork } from '@services/network';
import { WalletAccount } from '@services/wallet/wallet.model';
import { Account } from '../account.model';

export function mapWalletAccountToAccount(
  walletAccount: WalletAccount
): Account {
  return new Account(
    walletAccount.address,
    getNetwork(walletAccount.networkId),
    walletAccount.signer
  );
}
