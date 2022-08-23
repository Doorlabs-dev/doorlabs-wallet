import { Account } from '@features/account/account.model';
import { getIndexForPath } from '@services/keys/keyDerivation';
import { baseDerivationPath } from '@services/wallet';

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

  const index = getIndexForPath(
    account.signer.derivationPath,
    baseDerivationPath
  );

  return {
    name: `Account ${index + 1}`,
    symbol: `A${index + 1}`,
  };
}
