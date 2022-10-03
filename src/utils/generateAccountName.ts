import { Account } from '@features/account/account.model';
import { generateTokenSymbol } from '@features/tokens/utils/generateTokenSymbol';
import { getIndexForPath } from '@services/keys/keyDerivation';
import { baseDerivationPath } from '@services/wallet';

const MAX_LENGTH = 16;

export default function generateAccountName(account?: Account): {
  name: string;
  symbol: string;
} {
  if (!account) {
    return {
      name: '',
      symbol: '',
    };
  }

  if (account.name) {
    return {
      name:
        account.name.length > MAX_LENGTH
          ? `${account.name.slice(0, MAX_LENGTH)}...`
          : account.name,
      symbol: account.name.slice(0, 2).toUpperCase(),
    };
  }

  const index = getIndexForPath(
    account.signer.derivationPath,
    baseDerivationPath
  );

  return {
    name: `Account ${index + 1}`,
    symbol: `A${index + 1}`,
  };
}
