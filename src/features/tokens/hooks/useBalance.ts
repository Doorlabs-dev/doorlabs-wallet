import { Account } from '@features/account/account.model';
import { fetchBalance } from '@services/balance';

import useSWR from 'swr';

export const useBalance = (tokenAddress?: string, account?: Account) => {
  return useSWR([tokenAddress, account], fetchBalance, {
    refreshInterval: 5000,
  });
};
