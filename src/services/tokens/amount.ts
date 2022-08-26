import { utils } from 'ethers';
import { number } from 'starknet';

export const parseAmount = (
  amount: string,
  decimals: number.BigNumberish = '18'
) => {
  return utils.parseUnits(
    amount.replace(',', '.'),
    number.toBN(decimals).toNumber()
  );
};
