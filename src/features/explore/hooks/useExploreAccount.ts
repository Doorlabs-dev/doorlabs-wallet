import { useMemo } from 'react';
import { getExploreAccountURL } from '../../../services/explore';
import { Network } from '../../../services/network';

const useExploreAccount = (network?: Network, address?: string) => {
  const exploredAccountUrl = useMemo(
    () =>
      !!network && !!address
        ? getExploreAccountURL(network.explorerUrl, address)
        : '',
    [network?.explorerUrl, address]
  );

  return {
    exploredAccountUrl,
  };
};

export default useExploreAccount;
