import { AccountIdentifier } from '@services/wallet/wallet.model';

export function compareEqualAccount(
  a: AccountIdentifier,
  b: AccountIdentifier
) {
  return a.address === b.address && a.networkId === b.networkId;
}

export function getAccountIdentifier(account: AccountIdentifier) {
  return `${account.networkId}:${account.address}`;
}
