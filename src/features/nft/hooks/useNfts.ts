import useSWR from 'swr';
import { Account } from '@features/account/account.model';
import { fetchAspectNfts } from '@services/nft/aspect.service';

type Props = {
  account?: Account;
};

const useNfts = ({ account }: Props) => {
  const { data: nfts = [], ...rest } = useSWR(
    !!account && [account],
    (acc) => !!acc && fetchAspectNfts(acc)
  );

  return {
    nfts,
    ...rest,
  };
};

export default useNfts;
