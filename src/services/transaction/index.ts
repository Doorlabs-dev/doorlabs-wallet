import ArrayStore from '@services/store';
import { BigNumber } from 'ethers';
import { uint256 } from 'starknet';
import { compareTransactions } from './transaction.type';

export function getUint256CalldataFromBN(bn: BigNumber) {
  return {
    type: 'struct' as const,
    ...uint256.bnToUint256(bn.toHexString()),
  };
}

export const transactionStore = new ArrayStore({
  name: 'walletme:transactions',
  compareFn: compareTransactions,
});
