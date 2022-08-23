import { atom } from 'recoil';
import { Account } from './account.model';

const selectedAccountState = atom<Account | undefined>({
  key: 'selectedAccountState',
  default: undefined,
});

export default selectedAccountState;
