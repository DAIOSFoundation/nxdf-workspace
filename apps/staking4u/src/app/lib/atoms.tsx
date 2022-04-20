import { atom } from 'recoil';

export const CoinAmountAtom = atom({
  key: 'Amount',
  default: 0,
});

export const CoinInfo = atom({
  key: 'CoinInfo',
  default: {},
});
