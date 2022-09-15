import { AccountIdentifier } from '@services/wallet/wallet.model';
import connectedDAppStore from './connectedDappsStore.store';
import { DAppMeta } from './walletconnect.action';

async function walletConnectPreAuthorize(
  accountIdentifier: AccountIdentifier,
  dappMeta: DAppMeta
) {
  const result = await connectedDAppStore.get(
    (c) =>
      c.account.address === accountIdentifier.address &&
      c.account.networkId === accountIdentifier.networkId &&
      c.meta.scheme === dappMeta.scheme
  );

  return result.length !== 0;
}

export default walletConnectPreAuthorize;
