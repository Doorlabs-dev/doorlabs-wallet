import { atom } from 'recoil';

export const accountAvailableState = atom({
  key: 'accountAvailableState',
  default: false,
});

export const authenticationState = atom({
  key: 'authenticationState',
  default: false,
});
