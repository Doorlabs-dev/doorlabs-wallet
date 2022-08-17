import { atom } from 'recoil';
import { DEFAULT_NETWORKS } from '../../services/network/default_networks';

const networkState = atom({
  key: 'networkState',
  default: DEFAULT_NETWORKS[1],
});

export default networkState;
