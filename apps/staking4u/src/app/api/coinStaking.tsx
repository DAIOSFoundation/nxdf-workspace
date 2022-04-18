const BASE_URL = 'https://api.coingecko.com/api/v3/coins/';

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
