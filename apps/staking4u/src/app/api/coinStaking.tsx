import RNFetchBlob from 'rn-fetch-blob';
import { headers } from '../utils/request';
import { postMnemonic } from '../lib/api/mnemonic';

const BASE_URL = 'https://api.coingecko.com/api/v3/coins/';
const D_Wallet = 'https://d-wallet-api-dev.daios.net';

export const getCoin = {
  info: ({ queryKey }) => {
    const [_, coin] = queryKey;
    return fetch(`${BASE_URL}${coin.toLowerCase()}`).then((response) =>
      response.json()
    );
  },
  ticker: ({ queryKey }) => {
    const [_, coin] = queryKey;
    return fetch(`${BASE_URL}${coin.toLowerCase()}/tickers`).then((response) =>
      response.json()
    );
  },
};

export const Mnemonic = {
  postMnemonic: async ({ queryKey }) => {
    try {
      const [_, mnemonic] = queryKey;
      const method = 'POST';
      const url = `${D_Wallet}/v1/sol/decodeMnemonic`;
      const body = JSON.stringify({
        mnemonic,
        accountIndex: '0',
        walletIndex: '0',
      });
      const result = await RNFetchBlob.config({
        trusty: true,
      }).fetch(method, url, headers(''), body);

      return JSON.parse(result.data);
    } catch (error) {
      console.log('postMnemonic error => ', error);
    }
  },
  getMnemonic: async () => {
    const method = 'POST';
    const url = 'https://d-wallet-api-dev.daios.net/v1/xlm/mnemonic';
    const result = await RNFetchBlob.config({
      trusty: true,
    }).fetch(method, url, headers(''));

    return JSON.parse(result.data);
  },
};
