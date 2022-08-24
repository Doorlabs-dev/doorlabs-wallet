import defaultTokens from './default_tokens.json';
import { Token } from './token.model';

export function getTokenInfo(
  symbol: string,
  networkId?: string
): Token | undefined {
  if (!networkId) return;

  const foundToken = defaultTokens.find(
    (token) => token.network == networkId && token.symbol == symbol
  );

  return foundToken;
}

export function getTokensByNetworkId(networkId: string): Token[] {
  return defaultTokens.filter((token) => token.network === networkId);
}
