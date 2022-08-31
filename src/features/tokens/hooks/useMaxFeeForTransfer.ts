import { Account } from '@features/account/account.model';
import { getEstimatedFee, getTokenInfo } from '@services/tokens';
import { getUint256CalldataFromBN } from '@services/transaction';
import { BigNumber, utils } from 'ethers';
import { Call, number } from 'starknet';
import {
  compileCalldata,
  estimatedFeeToMaxFee,
} from 'starknet/dist/utils/stark';
import useSWR from 'swr';

type Props = {
  tokenAddress: string;
  account: Account;
  balance: BigNumber;
};

const fetcher = async (account: Account, call: Call, tokenAddress: string) => {
  const feeToken = getTokenInfo('ETH', account.networkId);
  if (feeToken?.address !== tokenAddress) {
    return {
      amount: BigNumber.from(0),
      suggestedMaxFee: BigNumber.from(0),
      unit: 'wei',
    };
  }
  return await getEstimatedFee(account, call);
};

const useMaxFeeEstimateForTransfer = ({
  tokenAddress,
  account,
  balance,
}: Props): { maxFee?: BigNumber; error?: any; loading: boolean } => {
  if (!account || !balance || !tokenAddress) {
    throw new Error('Account, TokenAddress and Balance are required');
  }

  const call: Call = {
    contractAddress: tokenAddress,
    entrypoint: 'transfer',
    calldata: compileCalldata({
      recipient: account.address,
      amount: getUint256CalldataFromBN(balance),
    }),
  };

  const {
    data: estimatedFee,
    error,
    isValidating,
  } = useSWR([account, call, tokenAddress], fetcher, {
    suspense: false,
    refreshInterval: 30e3,
  });

  if (error)
    return {
      maxFee: undefined,
      error,
      loading: false,
    };

  if (estimatedFee) {
    const maxFee = estimatedFeeToMaxFee(
      estimatedFee.suggestedMaxFee.toString(),
      0.2
    );
    return { maxFee, error: undefined, loading: false };
  }

  return { maxFee: undefined, error: undefined, loading: isValidating };
};

export default useMaxFeeEstimateForTransfer;
