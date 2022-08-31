import { getNetwork } from '@services/network';
import { getProvider } from '@services/provider';
import ArrayStore from '@services/store';
import { BigNumber } from 'ethers';
import { lowerCase, upperFirst } from 'lodash-es';
import { Call, Provider, uint256 } from 'starknet';
import {
  compareTransactions,
  Transaction,
  TransactionMeta,
  TransactionRequest,
} from './transaction.type';

export function entryPointToHumanReadable(entryPoint: string): string {
  try {
    return upperFirst(lowerCase(entryPoint));
  } catch {
    return entryPoint;
  }
}

export function nameTransaction(calls: Call | Call[]): TransactionMeta {
  const callsArray = Array.isArray(calls) ? calls : [calls];
  const entrypointNames = callsArray.map((call) =>
    entryPointToHumanReadable(call.entrypoint)
  );
  const lastName = entrypointNames.pop();
  return {
    title: entrypointNames.length
      ? `${entrypointNames.join(', ')} and ${lastName}`
      : lastName,
  };
}

const timestampInSeconds = (): number => Math.floor(Date.now() / 1000);

export function getUint256CalldataFromBN(bn: BigNumber) {
  return {
    type: 'struct' as const,
    ...uint256.bnToUint256(bn.toHexString()),
  };
}

export async function getTransactionReceipt(transaction: Transaction) {
  const network = getNetwork(transaction.account.networkId);
  const provider = getProvider(network);

  return await provider.getTransactionReceipt(transaction.hash);
}

export const transactionStore = new ArrayStore<Transaction>({
  name: 'walletme:transactions',
  compareFn: compareTransactions,
});

export async function addTransaction(transactionRequest: TransactionRequest) {
  const newTransaction: Transaction = {
    ...transactionRequest,
    status: 'RECEIVED',
    timestamp: timestampInSeconds(),
  };

  await transactionStore.push(newTransaction);
}
