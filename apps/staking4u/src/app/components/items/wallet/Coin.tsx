import React, { useEffect, useState } from 'react';
import Line from '../../line/Line';
import { View, ViewRow } from '../../styled/View';
import { GestureButton } from '../../styled/GestureButton';
import { Text } from '../../styled/Text';
import { Image } from '../../styled/Image';
import icon_next from '../../../assets/wallet/icon_next.png';
import { getCoin } from '../../../api/coinStaking';
import { useQuery } from 'react-query';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { CoinAmountAtom, CoinInfo } from '../../../lib/atoms';
import { Actions } from 'react-native-router-flux';

const Coin = (props) => {
  const setAmount = useSetRecoilState(CoinAmountAtom);
  const {
    isLoading: coinLoading,
    data: coinData,
    isRefetching,
    isFetched,
  } = useQuery(['coin', props.name], getCoin.info);
  const price = coinData?.tickers.find(
    (data) => data.target === 'USD' && data.last
  ).last;
  const [value, setValue] = useState(0);
  // setInfo((allInfo) => {
  //   return { ...allInfo, name, price };
  // });
  useEffect(() => {
    setValue(
      price && props.amount
        ? (prev) =>
            prev !== price * props.amount ? price * props.amount : prev
        : 0
    );
    setTimeout(() => {
      isRefetching
        ? setAmount((data) => data - value)
        : setAmount((data) => data + value);
      console.log(`isRefetching: ${isRefetching}`);
      // console.log(`isFetched: ${isFetched}`);
      // console.log(`coinLoading: ${coinLoading}`);
    }, 1000);
  }, [setAmount, coinLoading, isRefetching, isFetched, setValue, value]);

  const onPressItem = (symbol) => {
    // 해당 코인 디테일 페이지로 이동
    Actions.walletDetailScreen({
      coin: coinData,
      solTokenPublicKey: 12345,
      mintAddress: 12345,
    });
  };
  return coinLoading ? null : (
    <View>
      <Line width={'100%'} height={1} />
      <GestureButton onPress={onPressItem}>
        <ViewRow
          width={'94%'}
          height={70}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <ViewRow alignItems={'center'}>
            <View width={25} height={25} marginRight={10}>
              <Image source={props.logo} />
            </View>
            <View>
              <Text ftWhite>{coinData?.name}</Text>
              <Text ftWhite ftSmall marginTop={5}>
                {props.symbol}
              </Text>
            </View>
          </ViewRow>
          <View>
            <ViewRow alignItems={'center'} justifyContent={'flex-end'}>
              <Text ftWhite fontSize={20}>
                {props.amount ? props.amount.toFixed(6) : 0}
              </Text>
              <Image width={20} height={18} source={icon_next} />
            </ViewRow>
            <View alignItems={'flex-end'}>
              <Text ftSmall ftBlueGray>
                $ {price ? price.toFixed(4) : 0}
              </Text>
            </View>
          </View>
        </ViewRow>
      </GestureButton>
      <View bgDarkGray height={1} />
    </View>
  );
};

export default Coin;
