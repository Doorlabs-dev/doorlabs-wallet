import { isLiteralObject, validateStarknetTransaction } from '@utils/validator';
import { isArray } from 'lodash-es';

export function isValidConnectDappAction(queryData?: {
  action: string;
  data: any;
}) {
  if (!isLiteralObject(queryData)) return false;
  if (!isLiteralObject(queryData?.data)) return false;

  const { meta } = queryData?.data;

  if (!meta || !meta?.name || !meta?.appId) return false;

  return true;
}

export function isValidExecuteTransactionAction(queryData?: {
  action: string;
  data: any;
}) {
  if (!isLiteralObject(queryData)) return false;
  if (!isLiteralObject(queryData?.data)) return false;

  const { transactions } = queryData?.data;

  if (!transactions) return false;

  if (isArray(transactions)) {
    return transactions.every(validateStarknetTransaction);
  }

  return validateStarknetTransaction(transactions);
}
