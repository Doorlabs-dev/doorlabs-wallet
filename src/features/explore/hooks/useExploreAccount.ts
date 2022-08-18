import InAppBrowser from 'react-native-inappbrowser-reborn';
import { getExploreAccountURL } from '../../../services/explore';
import { Network } from '../../../services/network';

const useExploreAccount = (network?: Network, address?: string) => {
  const exploreAccount = async () => {
    if (!network || !address) return;
    if (!network.explorerUrl) return;
    const exploreUrl = getExploreAccountURL(network.explorerUrl, address);

    if (await InAppBrowser.isAvailable()) {
      InAppBrowser.open(exploreUrl, {
        animated: true,
      });
    }
  };

  return { exploreAccount };
};

export default useExploreAccount;
