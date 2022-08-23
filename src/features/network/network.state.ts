import { atom } from 'recoil';
import { defaultNetwork } from '../../services/network/default_networks';

const networkState = atom({
  key: 'networkState',
  default: defaultNetwork,
});

export default networkState;
