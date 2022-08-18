import { useRecoilState } from 'recoil';
import { Network } from '../../../services/network';
import { DEFAULT_NETWORKS } from '../../../services/network/default_networks';
import networkState from '../network.state';

const useNetwork = () => {
  const [selectedNetwork, setSelectedNetwork] = useRecoilState(networkState);

  const getNetworks = (): Network[] => DEFAULT_NETWORKS;

  const selectNetwork = (network: Network) => {
    setSelectedNetwork(network);
  };

  return {
    getNetworks,
    selectedNetwork,
    selectNetwork,
  };
};

export default useNetwork;
