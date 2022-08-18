import { atom } from 'recoil';
import { Account } from './account.model';

const selectedAccountState = atom<Account | null>({
  key: 'selectedAccountState',
  default: null,
});

export default selectedAccountState;
