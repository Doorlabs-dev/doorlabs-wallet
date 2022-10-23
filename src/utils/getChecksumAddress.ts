import { getChecksumAddress as starknetGetChecksumAddress } from 'starknet';

export function getChecksumAddress(address: string | undefined): string {
  if (!address) return '';
  try {
    return starknetGetChecksumAddress(address).toLowerCase();
  } catch (error) {
    return '';
  }
}
