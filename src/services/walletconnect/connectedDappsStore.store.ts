import ArrayStore from '@services/store';
import { AccountIdentifier } from '@services/wallet/wallet.model';
import { DAppMeta } from './walletconnect.action';

export type DAppConnection = {
  meta: DAppMeta;
  account: AccountIdentifier;
};

// Store dapp info which have connected with wallet
const connectedDAppStore = new ArrayStore<DAppConnection>({
  name: 'walletme:walletconnectDapps',
  defaultValue: [],
  compareFn: compareDAppConnection,
});

export function compareDAppConnection(a: DAppConnection, b: DAppConnection) {
  return (
    a.account.networkId === b.account.networkId &&
    a.account.address === b.account.address &&
    a.meta.uri === b.meta.uri
  );
}

export async function addNewDApp(dAppConnection: DAppConnection) {
  await connectedDAppStore.push(dAppConnection);
}

export default connectedDAppStore;
