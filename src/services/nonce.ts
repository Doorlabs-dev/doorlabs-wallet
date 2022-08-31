import { Account } from '@features/account/account.model';
import { number } from 'starknet';
import { getAccountIdentifier } from './account';
import LocalStorage from './store/localstore';

export async function getNonce(account: Account): Promise<string> {
  const starknetAccount = account.getStarknetAccount();
  const storageAddress = getAccountIdentifier(account);
  const result = await starknetAccount.getNonce();
  const nonceStore = new LocalStorage<string>({ name: storageAddress });

  const nonceBn = number.toBN(result);
  const storedNonce = await nonceStore.get();

  // If there's no nonce stored or the fetched nonce is bigger than the stored one, store the fetched nonce
  if (!storedNonce || nonceBn.gt(number.toBN(storedNonce))) {
    await nonceStore.set(number.toHex(nonceBn));
  }

  // If the stored nonce is greater than the fetched nonce, use the stored nonce
  if (storedNonce && number.toBN(storedNonce).gt(nonceBn)) {
    return number.toHex(number.toBN(storedNonce));
  }

  // else return the fetched nonce
  return number.toHex(nonceBn);
}

export async function increaseStoredNonce(account: Account): Promise<void> {
  const storageAddress = getAccountIdentifier(account);
  const nonceStore = new LocalStorage<string>({ name: storageAddress });
  const storedNonce = await nonceStore.get();

  if (storedNonce) {
    nonceStore.set(number.toHex(number.toBN(storedNonce).add(number.toBN(1))));
  }
}

export async function resetStoredNonce(account: Account): Promise<void> {
  const storageAddress = getAccountIdentifier(account);
  const nonceStore = new LocalStorage<string>({ name: storageAddress });

  await nonceStore.delete();
}
