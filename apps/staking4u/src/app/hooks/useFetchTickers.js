import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import useSWR from 'swr';
import * as tickerActions from '../store/modules/ticker/actions';
import routes from '../routes';
import {fetcher} from '../utils/functions';
import {BINANCE_SYMBOLS, UPBIT_SYMBOLS, FTX_SYMBOLS} from '../utils/constants';

const useFetchTickers = () => {
  const dispatch = useDispatch();

  const {data: bTickers, error: bTickersError} = useSWR(
    routes.TICKER.GET_TICKERS('binance', BINANCE_SYMBOLS),
    fetcher,
    {
      refreshInterval: 5000,
    },
  );

  const {data: uTickers, error: uTickersError} = useSWR(
    routes.TICKER.GET_TICKERS('upbit', UPBIT_SYMBOLS),
    fetcher,
    {
      refreshInterval: 5000,
    },
  );

  const {data: fTickers, error: fTickersError} = useSWR(
    routes.TICKER.GET_TICKERS('ftx', FTX_SYMBOLS),
    fetcher,
    {
      refreshInterval: 5000,
    },
  );

  useEffect(() => {
    const _tickers = {};
    if (bTickers && bTickers.length > 0) {
      bTickers.forEach((ticker) => {
        const symbol = ticker.symbol.split('/')[0];
        _tickers[symbol] = ticker;
      });
    }
    if (uTickers && uTickers.length > 0) {
      uTickers.forEach((ticker) => {
        const symbol = ticker.symbol.split('/')[0];
        _tickers[symbol] = ticker;
      });
    }
    if (fTickers && fTickers.length > 0) {
      fTickers.forEach((ticker) => {
        const symbol = ticker.symbol.split('/')[0];
        _tickers[symbol] = ticker;
      });
    }

    dispatch(tickerActions.change_tickers(_tickers));
  }, [bTickers, uTickers, fTickers]);
};

export default useFetchTickers;
