import { BaseWalletAccount } from '@services/wallet/wallet.model';

export function compareEqualAccount(
  a: BaseWalletAccount,
  b: BaseWalletAccount
) {
  return a.address === b.address && a.networkId === b.networkId;
}
