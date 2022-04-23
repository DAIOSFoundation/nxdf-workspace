import { atom } from 'recoil';

export const CoinAmountAtom = atom({
  key: 'Amount',
  default: 0,
});

export const CoinInfo = atom({
  key: 'CoinInfo',
  default: {},
});

export const isLoggedin = atom({
  key: 'Login',
  default: false,
});

export const tokenValue = atom({
  key: 'token',
  default: '',
});
