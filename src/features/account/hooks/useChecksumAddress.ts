import { useMemo } from 'react';
import { getChecksumAddress } from '@utils/getChecksumAddress';

const useChecksumAddress = (address?: string) => {
  const checksumAddress = useMemo(() => getChecksumAddress(address), [address]);

  return checksumAddress;
};

export default useChecksumAddress;
