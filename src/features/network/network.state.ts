import { atom } from 'recoil';
import {
  defaultNetwork,
  DEFAULT_NETWORKS,
} from '../../services/network/default_networks';

const networkState = atom({
  key: 'networkState',
  default: defaultNetwork,
});

export default networkState;
