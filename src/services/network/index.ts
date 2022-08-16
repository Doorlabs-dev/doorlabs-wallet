import { DEFAULT_NETWORKS } from './default_networks';

export type Network = {
  id: string;
  name: string;
  chainId: string;
  baseUrl: string;
  explorerUrl: string;
  accountClassHash: string;
  multicallAddress: string;
  readonly: boolean;
};

export function getNetwork(networkId: String): Network {
  const res = DEFAULT_NETWORKS.find((network) => network.id === networkId);
  return res!;
}
