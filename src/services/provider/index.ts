import { Provider } from 'starknet';
import { Network } from '../network';

export function getProvider(network: Network): Provider {
  return new Provider({ baseUrl: network.baseUrl });
}
