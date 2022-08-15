import { useEffect } from 'react';
import { atom, useRecoilState } from 'recoil';
import { DEFAULT_NETWORKS } from '../services/network/default_networks';

const networkState = atom({
  key: 'networkState',
  default: DEFAULT_NETWORKS[0],
});

const useNetwork = () => {
  const [selectedNetwork, setSelectedNetwork] = useRecoilState(networkState);

  const getNetworks = (): Network[] => DEFAULT_NETWORKS;

  useEffect(() => {
    console.log(selectedNetwork);
  }, [selectedNetwork]);

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
