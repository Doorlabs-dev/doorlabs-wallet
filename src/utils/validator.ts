import { BigNumber } from 'ethers';
import { isArray, isPlainObject } from 'lodash-es';
import {
  constants,
  number,
  validateAndParseAddress,
  validateChecksumAddress,
} from 'starknet';

export function isLiteralObject(data: any) {
  return isPlainObject(data) && data !== null;
}

export const isNumeric = (numToCheck: any): boolean =>
  !isNaN(parseFloat(numToCheck)) && isFinite(numToCheck);

export const isAllowedNumericInputValue = (value: string, maxDecimals = 18) => {
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

export function validateCallData(calldata: any) {
  if (!isArray(calldata)) return false;

  if (!calldata.length) return true;

  return calldata.every(
    (e) =>
      typeof e === 'string' || typeof e === 'number' || BigNumber.isBigNumber(e)
  );
}

export function validateStarknetTransaction(transaction: any) {
  if (!isLiteralObject(transaction)) return false;

  const { contractAddress, entrypoint, calldata } = transaction;
  if (!contractAddress || typeof contractAddress !== 'string') return false;

  if (!entrypoint || typeof entrypoint !== 'string') return false;

  if (calldata === undefined) return true;

  return validateCallData(calldata);
}

export function isHttpsURL(url: string) {
  const urlRegex =
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
  return urlRegex.test(url);
}
