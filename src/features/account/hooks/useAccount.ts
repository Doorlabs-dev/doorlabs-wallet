import { useMemo } from 'react';
import useSWR from 'swr';

import { BaseWalletAccount } from '../../../services/wallet/wallet.model';

const BASE_EXPLORE_URL = 'https://goerli.voyager.online';

const useETHBalance = (address: string) => {
  const { data, error, mutate } = useSWR<{ balance: string }>(
    `${BASE_EXPLORE_URL}/api/contract/${address}`,
    (url) => fetch(url).then((res) => res.json())
  );

  const isLoading = useMemo(() => !data && !error, [data, error]);

  return {
    error,
    data,
    isLoading,
    mutate,
  };
};

const useAccount = (account?: BaseWalletAccount) => {
  const { data, error, mutate } = useETHBalance(account?.address ?? '');

  const reload = () => {
    mutate();
  };
  return {
    balance: data?.balance ?? '0x0',
    address: account?.address ?? '',
    reload,
  };
};
