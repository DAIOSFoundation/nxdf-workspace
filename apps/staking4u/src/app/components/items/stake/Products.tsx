import React from 'react';
import {useSelector, shallowEqual} from 'react-redux';
import Line from '../../line/Line';
import {View, ViewBorderRadius, ViewRow} from '../../styled/View';
import {GestureButton} from '../../styled/GestureButton';
import {Text} from '../../styled/Text';
import {Image} from '../../styled/Image';
import {convertPrice} from '../../../utils/price';

const Product = ({name, symbol, annualInteresetRate, logo, onPress}) => {
  const {tickers, usdExchangeRate} = useSelector(
    (state) => ({
      tickers: state.ticker.tickers,
      usdExchangeRate: state.ticker.usdExchangeRate,
    }),
    shallowEqual,
  );

  return (
    <>
      <Line width={'100%'} height={1} />
      <GestureButton onPress={onPress}>
        <ViewRow flex={1} paddingTop={15} paddingBottom={15}>
          <ViewRow flex={2.5} alignItems={'center'} paddingLeft={10}>
            <Image
              source={logo}
              resizeMode={'contain'}
              width={25}
              height={25}
            />
            <View marginLeft={10}>
              <Text ftLightWhite fontSize={15} bold>
                {symbol}
              </Text>
              <Text ftLightWhite fontSize={12}>
                {name}
              </Text>
            </View>
          </ViewRow>
          <View
            flex={1}
            alignItems={'flex-end'}
            justifyContent={'center'}
            paddingRight={20}>
            <Text ftLightWhite fontSize={14}>
              {tickers && tickers[symbol]
                ? tickers[symbol].symbol !== 'ORBS/KRW' // TODO 하드코딩 이 부분 ORBS/KRW가 아닌 경우(환율 계산)에 대한 것 추후 수정 필요
                  ? `$${convertPrice(tickers[symbol].close)}`
                  : `$${convertPrice(tickers[symbol].close / usdExchangeRate)}`
                : `$0`}
            </Text>
          </View>
          <View
            flex={2}
            justifyContent={'center'}
            alignItems={'flex-end'}
            paddingRight={20}>
            <ViewBorderRadius
              bgMint
              width={80}
              paddingTop={7}
              paddingBottom={7}
              paddingRight={10}
              paddingLeft={10}>
              <Text
                textAlign={'center'}
                ftLightWhite
                fontSize={13}>{`${annualInteresetRate}%`}</Text>
            </ViewBorderRadius>
          </View>
        </ViewRow>
      </GestureButton>
    </>
  );
};

export default Product;
