import { isLiteralObject, validateStarknetTransaction } from '@utils/validator';
import { isArray, isPlainObject } from 'lodash-es';

export function isValidConnectDappAction(payload: any) {
  if (!isLiteralObject(payload)) return false;

  const { meta } = payload;

  if (!meta || !meta?.name || !meta?.uri) return false;

  return true;
}

export function isValidExecuteTransactionAction(payload: any) {
  if (!isLiteralObject(payload)) return false;

  const { transactions } = payload;

  if (!transactions) return false;

  if (isArray(transactions)) {
    return transactions.every(validateStarknetTransaction);
  }

  return validateStarknetTransaction(transactions);
}
