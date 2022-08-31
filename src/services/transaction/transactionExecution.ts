import { Account } from '@features/account/account.model';
import { getNonce, increaseStoredNonce } from '@services/nonce';
import { Abi, Call, constants, InvocationsDetails, number } from 'starknet';
import { addTransaction, nameTransaction } from './index';

export const checkTransactionHash = (
  transactionHash?: number.BigNumberish
): boolean => {
  try {
    if (!transactionHash) {
      throw Error('transactionHash not defined');
    }
    const bn = number.toBN(transactionHash);
    if (bn.lte(constants.ZERO)) {
      throw Error('transactionHash needs to be >0');
    }
    return true;
  } catch {
    return false;
  }
};

export async function executeTransaction({
  account,
  transactions,
  transactionsDetail,
  abis,
}: {
  account: Account;
  transactions: Call | Call[];
  transactionsDetail?: InvocationsDetails;
  abis?: Abi[];
}) {
  const starknetAccount = account.getStarknetAccount();
  const nonceWasProvidedByUI = transactionsDetail?.nonce !== undefined; // nonce can be a number of 0 therefore we need to check for undefined
  const nonce = nonceWasProvidedByUI
    ? number.toHex(number.toBN(transactionsDetail?.nonce || 0))
    : await getNonce(account);

  // estimate fee with onchain nonce even tho transaction nonce may be different
  const { suggestedMaxFee } = await starknetAccount.estimateFee(transactions);
  const maxFee = number.toHex(suggestedMaxFee);

  const tx = await starknetAccount.execute(transactions, abis, {
    ...transactionsDetail,
    nonce,
    maxFee,
  });

  if (!checkTransactionHash(tx.transaction_hash)) {
    throw Error('Transaction could not get added to the sequencer');
  }

  await addTransaction({
    hash: tx.transaction_hash,
    account: account.getWalletAccount(),
    meta: nameTransaction(transactions),
  });

  if (!nonceWasProvidedByUI) {
    await increaseStoredNonce(account);
  }
  return tx;
}
