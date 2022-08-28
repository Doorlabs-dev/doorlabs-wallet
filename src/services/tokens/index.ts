import { Account } from '@features/account/account.model';
import {
  Abi,
  Contract,
  Account as SNAccount,
  number,
  uint256,
  Call,
} from 'starknet';
import { BigNumberish } from 'starknet/dist/utils/number';
import defaultTokens from './default_tokens.json';
import { Token } from './token.model';
import ERC20ABI from '../../abi/ERC20.json';
import { BigNumber } from 'ethers';

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
