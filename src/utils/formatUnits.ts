import { utils } from 'ethers';
import { BigNumberish } from 'starknet/dist/utils/number';

export default function formatUnits(
  amount: BigNumberish,
  decimals: BigNumberish = '18'
) {
  const [int, dec = '0'] = utils.formatUnits(amount, decimals).split('.');
  return `${int}.${dec.substring(0, 9)}`;
}
