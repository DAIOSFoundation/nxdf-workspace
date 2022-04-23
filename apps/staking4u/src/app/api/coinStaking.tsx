const BASE_URL = 'https://api.coingecko.com/api/v3/coins/';
const D_Wallet = 'https://d-wallet-api-dev.daios.net ';

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
  get: async ({ queryKey }) => {
    const [_, mnemonic] = queryKey;
    return await fetch(`${D_Wallet}/v1/sol/decodeMnemonic`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        mnemonic:
          'genius human spirit run movie copy change choose grunt soda give filter',
        accountIndex: '0',
        walletIndex: '0',
      }),
    })
      .then((response) => response.json())
      .catch((err) => console.log(err));
  },
  post: ({ queryKey }) => {
    const [_, coin] = queryKey;
    return fetch(
      `${D_Wallet}/v1/sol/balance?network=mainnet-beta&address=9ompFcaiqDjBmzNGtppoieYGmKZ9AjLTykZfZfuz7W3G`
    ).then((response) => response.json());
  },
};
