import { Account } from '@features/account/account.model';
import { getEstimatedFee } from '@services/tokens';
import { BigNumber } from 'ethers';
import { Call } from 'starknet';
import useSWR from 'swr';

const useFeeEstimation = (
  account: Account | undefined,
  call: Call | Call[]
) => {
  if (!account || !call)
    return {
      fee: undefined,
      error: 'No account found',
      isValidating: false,
    };

  const {
    data: fee,
    error,
    isValidating,
  } = useSWR([account, call], getEstimatedFee, {
    suspense: false,
    refreshInterval: 30e3,
  });

  return {
    fee: fee ? BigNumber.from(fee.suggestedMaxFee) : undefined,
    error,
    isValidating,
  };
};

export default useFeeEstimation;
