import { BaseWalletAccount } from '@services/wallet/wallet.model';

export interface AspectNft {
  contract_address: string;
  token_id: string;
  name?: string;
  description?: string;
  image_uri?: string;
  image_url_copy?: string;
  animation_uri?: string;
  external_uri?: string;
  owner?: AspectNftOwner;
}

interface AspectNftOwner {
  account_address: string;
}

const baseUrlGoerli = 'https://api-testnet.aspect.co/api/v0/assets';
const baseUrlMainnet = 'https://api.aspect.co/api/v0/assets';

export const fetchAspectNfts = async (
  account: BaseWalletAccount
): Promise<AspectNft[]> => {
  try {
    const { address } = account;
    const baseUrl =
      account.networkId === 'goerli-alpha'
        ? baseUrlGoerli
        : account.networkId === 'mainnet-alpha' && baseUrlMainnet;

    if (!baseUrl) {
      throw new Error('Unknown network');
    }

    return fetchAspectNftsByUrl(baseUrl, address);
  } catch {
    return [];
  }
};

export const fetchAspectNftsByUrl = async (
  url: string,
  address: string
): Promise<AspectNft[]> => {
  try {
    const params = new URLSearchParams({ owner_address: address });
    const response = await fetch(`${url}?${params}&limit=50`);
    const data = await response.json();

    if (data.next_url) {
      return data.assets.concat(
        await fetchAspectNftsByUrl(data.next_url, address)
      );
    }
    return data.assets;
  } catch {
    return [];
  }
};

export const openAspectNft = (
  contractAddress: string,
  tokenId: string,
  networkId: string
) => {
  const url =
    networkId === 'goerli-alpha'
      ? `https://testnet.aspect.co/asset/${contractAddress}/${tokenId}`
      : `https://aspect.co/asset/${contractAddress}/${tokenId}`;
  window.open(url, '_blank')?.focus();
};

export const getNftPicture = ({ image_uri, image_url_copy }: AspectNft) => {
  if (image_uri && image_url_copy) {
    if (!image_url_copy.startsWith('ipfs://')) {
      return image_url_copy;
    }
    if (!image_uri.startsWith('ipfs://')) {
      return image_uri;
    }
  }
  if (image_url_copy) {
    return image_url_copy;
  }
  return image_uri;
};
