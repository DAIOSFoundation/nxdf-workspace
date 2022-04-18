import React, { useEffect } from 'react';
import Line from '../../line/Line';
import { View, ViewRow } from '../../styled/View';
import { GestureButton } from '../../styled/GestureButton';
import { Text } from '../../styled/Text';
import { Image } from '../../styled/Image';
import icon_next from '../../../assets/wallet/icon_next.png';
import { getCoin } from '../../../api/coinStaking';
import { useQuery } from 'react-query';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { CoinAmountAtom } from '../../../lib/atoms';

const Coin = (props) => {
  const { isLoading: infoLoading, data: infoData } = useQuery(
    ['info', props.name],
    getCoin.info
  );
  const price = infoData?.tickers[0].last;
  let value = props.amount * price;
  const SetAmount = useSetRecoilState(CoinAmountAtom);
  // console.log(` ${infoData?.name} : ${value}`);
  useEffect(() => {
    infoLoading ? null : SetAmount((data) => data + value);
  }, [infoLoading]);
  return infoLoading ? null : (
    <View>
      <Line width={'100%'} height={1} />
      <GestureButton onPress={props.onPress}>
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
              <Text ftWhite>{infoData.name}</Text>
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
