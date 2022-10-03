import { getNetwork } from '@services/network';
import { WalletAccount } from '@services/wallet/wallet.model';
import { Account } from '../account.model';

export function mapWalletAccountToAccount(
  walletAccount: WalletAccount
): Account {
  return new Account({
    address: walletAccount.address,
    network: getNetwork(walletAccount.networkId),
    signer: walletAccount.signer,
    name: walletAccount.name,
  });
}
