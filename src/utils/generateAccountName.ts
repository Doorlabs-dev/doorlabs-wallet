import { Account } from '@features/account/account.model';
import { getIndexForPath } from '@services/keys/keyDerivation';
import { baseDerivationPath } from '@services/wallet';

export default function generateAccountName(account?: Account) {
  if (!account) return '';

  const index = getIndexForPath(
    account.signer.derivationPath,
    baseDerivationPath
  );

  return `Account ${index + 1}`;
}
