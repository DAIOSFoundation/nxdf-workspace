import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import useSWR from 'swr';
import * as tickerActions from '../store/modules/ticker/actions';
import {fetcher} from '../utils/functions';

const useFetchExchangeRate = () => {
  const dispatch = useDispatch();

  const {data: exchangeRate, error: exchangeRateError} = useSWR(
    'https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWUSD',
    fetcher,
    {
      refreshInterval: 5000,
    },
  );

  useEffect(() => {
    if (exchangeRate && exchangeRate.length > 0) {
      const _exchangeRate = exchangeRate[0].basePrice;
      dispatch(tickerActions.change_usd_exchange_rate(_exchangeRate));
    }
  }, [exchangeRate]);
};

export default useFetchExchangeRate;
