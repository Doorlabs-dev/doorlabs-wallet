import ArrayStore from '@services/store';
import { Token } from './token.model';

const DEFAULT_TOKENS = [
  {
    address:
      '0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7',
    name: 'Ether',
    symbol: 'ETH',
    decimals: '18',
    network: 'mainnet-alpha',
    image: 'https://dv3jj1unlp2jl.cloudfront.net/128/color/eth.png',
    showAlways: true,
  },
  {
    address:
      '0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7',
    name: 'Ether',
    symbol: 'ETH',
    decimals: '18',
    network: 'goerli-alpha',
    image: 'https://dv3jj1unlp2jl.cloudfront.net/128/color/eth.png',
    showAlways: true,
  },
];

export const compareEqualToken = (a: Token, b: Token) =>
  a.address === b.address && a.network === b.network;

export const tokensStore = new ArrayStore<Token>({
  name: 'walletme:tokensByNetwork',
  compareFn: compareEqualToken,
  defaultValue: DEFAULT_TOKENS,
});
