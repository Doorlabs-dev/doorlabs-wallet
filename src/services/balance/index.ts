import { BigNumber } from 'ethers';
import { Abi, Contract, uint256 } from 'starknet';
import ERC20ABI from '../../abi/ERC20.json';
import { Account } from '../../features/account/account.model';

export async function fetchBalance(
  tokenAddress: string,
  account?: Account
): Promise<BigNumber> {
  if (!account || !tokenAddress) return BigNumber.from('0x0');

  const contract = new Contract(
    ERC20ABI as Abi,
    tokenAddress,
    account.provider
  );

  const res = await contract.balanceOf(account.address);

  return BigNumber.from(uint256.uint256ToBN(res.balance).toString());
}
