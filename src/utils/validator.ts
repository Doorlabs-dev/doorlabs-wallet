import {
  constants,
  number,
  validateAndParseAddress,
  validateChecksumAddress,
} from 'starknet';

export const isNumeric = (numToCheck: any): boolean =>
  !isNaN(parseFloat(numToCheck)) && isFinite(numToCheck);

export const isAllowedNumericInputValue = (value: string, maxDecimals = 16) => {
  const numericalRegex = new RegExp(`^[0-9]*.?[0-9]{0,${maxDecimals}}$`);
  if (value === '') {
    return true;
  }
  if (!isNumeric(value)) {
    return false;
  }
  if (numericalRegex.test(value)) {
    return true;
  }
  return false;
};

const isChecksumAddress = (address: string) => {
  if (/^0x[0-9a-f]{63,64}$/.test(address)) {
    return false;
  }
  return true;
};

export function isValidAddress(address: string) {
  try {
    if (!/^0x[0-9a-fA-F]+$/.test(address)) {
      return false;
    }

    if (!/^0x[0-9a-fA-F]{63,64}$/.test(address)) {
      return false;
    }

    const parsedAddress = validateAndParseAddress(address);
    if (number.toBN(parsedAddress).eq(constants.ZERO)) {
      return false;
    }

    if (isChecksumAddress(address) && !validateChecksumAddress(address)) {
      return false;
    }
  } catch {
    return false;
  }

  return true;
}
