import { getChecksumAddress as SNgetCheckSumAddress } from 'starknet';

export function getChecksumAddress(address: string | undefined): string {
  if (!address) return '';
  try {
    return SNgetCheckSumAddress(address);
  } catch (error) {
    return '';
  }
}
