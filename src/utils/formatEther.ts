import { utils } from 'ethers';
import { BigNumberish } from 'starknet/dist/utils/number';

export default function formatEther(amount: BigNumberish) {
  const [int, dec = '0'] = utils.formatEther(amount).split('.');
  return `${int}.${dec.substring(0, 7)}`;
}
