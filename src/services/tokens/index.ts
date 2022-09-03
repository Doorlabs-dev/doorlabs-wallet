import { Account } from '@features/account/account.model';
import { Abi, Contract, number, uint256, Call, shortString } from 'starknet';
import defaultTokens from './default_tokens.json';
import { Token } from './token.model';
import ERC20ABI from '../../abi/ERC20.json';
import { BigNumber } from 'ethers';
import { tokensStore } from './token.store';

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

export async function transfer({
  fromAccount,
  to,
  token,
  amount,
}: {
  fromAccount: Account;
  to: string;
  token: Token;
  amount: BigNumber;
}) {
  const contract = new Contract(
    ERC20ABI as Abi,
    token.address,
    fromAccount.provider
  );
  const snAccount = fromAccount.getStarknetAccount();
  contract.connect(snAccount);

  return await contract.transfer(to, uint256.bnToUint256(amount.toHexString()));
}

export async function getEstimatedFee(
  account: Account,
  call: Call
): Promise<{ amount: string; suggestedMaxFee: string }> {
  const starknetAccount = account.getStarknetAccount();
  const result = await starknetAccount.estimateFee(call);

  return {
    amount: number.toHex(result.amount),
    suggestedMaxFee: number.toHex(result.suggestedMaxFee),
  };
}

export async function fetchTokensByNetwork(networkId: string) {
  return await tokensStore.get((t) => t.network === networkId);
}

export async function fetchToken(tokenAddress: string, account: Account) {
  const contract = new Contract(
    ERC20ABI as Abi,
    tokenAddress,

    account.provider
  );

  const [name, symbol, decimals] = await Promise.all([
    contract
      .call('name')
      .then((x) => shortString.decodeShortString(number.toHex(x.name))),
    contract
      .call('symbol')
      .then((x) => shortString.decodeShortString(number.toHex(x.symbol))),
    contract.call('decimals').then((x) => number.toHex(x.decimals)),
  ]);

  const decimalsBigNumber = BigNumber.from(decimals);

  return {
    address: tokenAddress,
    name,
    symbol,
    network: account.networkId,
    decimals: decimalsBigNumber.toNumber(),
  };
}
