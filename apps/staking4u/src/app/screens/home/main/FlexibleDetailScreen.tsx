import React, { useCallback } from 'react';
import { Linking } from 'react-native';
import { useDispatch } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import * as modalActions from '../../../store/modules/modal/actions';
import Topbar from '../../../components/bar/TopBar';
import Line from '../../../components/line/Line';

import {
  SafeAreaView,
  View,
  ViewAbsolute,
  ViewRow,
  ViewBorderRadius,
} from '../../../components/styled/View';
import { Text } from '../../../components/styled/Text';
import { Image } from '../../../components/styled/Image';
import { GestureButtonBorderRadius } from '../../../components/styled/GestureButton';
import { ButtonRadius } from '../../../components/styled/Button';
import iconInfo from '../../../assets/main/icon_coin_info.png';

const tickers = {
  AAVE: { info: { priceChangePercent: 1.2 } },
  ORBS: { info: { signed_change_rate: 0.1 } },
  SOL: { info: { priceChangePercent: -3.14 } },
  RAY: { info: { priceChangePercent: 2.23 } },
};

const FlexibleDetailScreen = ({ item }) => {
  const dispatch = useDispatch();

  // TODO 추후 상품이 정해지면 리팩토링 필요
  // → 참고 : 오브스의 경우 업비트 API이기때문에 전일대비 시세 기준이 바이낸스/FTX와 다르다.
  const renderFluctateRate = useCallback(
    (tickers) => {
      if (item.symbol === 'ORBS') {
        const rate = tickers[item.symbol].info.signed_change_rate || 0;
        if (rate > 0) {
          return <Text ftMint>{`+${(rate * 100).toFixed(2)}%`}</Text>;
        } else if (rate < 0) {
          return <Text ftLightRed>{`${(rate * 100).toFixed(2)}%`}</Text>;
        } else {
          return <Text ftLightGray>0.00%</Text>;
        }
      } else {
        const percent = tickers[item.symbol].info.priceChangePercent || 0;
        if (percent > 0) {
          return <Text ftMint>{`+${Number(percent).toFixed(2)}%`}</Text>;
        } else if (percent < 0) {
          return <Text ftLightRed>{`${Number(percent).toFixed(2)}%`}</Text>;
        } else {
          return <Text ftLightGray>0.00%</Text>;
        }
      }
    },
    [tickers]
  );

  // TODO 추후 상품이 정해지면 코인 등급 부분을 어떻게 처리할지 논의 필요
  // 임시용
  const renderFCAS = (symbol) => {
    switch (symbol) {
      case 'AAVE': {
        return 'A';
      }
      case 'ORBS': {
        return 'U';
      }
      case 'SOL': {
        return 'B';
      }
      case 'RAY': {
        return 'U';
      }
      default: {
      }
    }
  };

  const onPressStart = () => {
    if (item.symbol !== 'RAY') {
      // TODO 우선 하드코딩으로 레이만 스테이킹을 시작할 수 있게 만들어 놓음
      dispatch(modalActions.change_modal_message('Coming Soon'));
      dispatch(modalActions.change_modal_one_button(true));
    } else {
      Actions.flexibleInputScreen({ item });
    }
  };

  const onPressCoinInfo = () => {
    Linking.openURL(
      `https://coinmarketcap.com/en/currencies/${item.name.toLowerCase()}`
    );
  };
  const onPressFCAS = () => {
    Linking.openURL(
      `https://coinmarketcap.com/en/currencies/${item.name.toLowerCase()}/ratings/`
    );
  };

  return (
    <SafeAreaView bgNavyTheme>
      <Topbar isLeftButton title={item.symbol} />
      <View
        flex={1.5}
        width={'90%'}
        alignSelf={'center'}
        justifyContent={'center'}
      >
        <Text fontSize={28} ftWhite bold marginBottom={5}>{`$ ${1}`}</Text>
        {renderFluctateRate(tickers)}
        <Line width={'100%'} height={1} marginTop={10} marginBottom={10} />
        <ViewRow
          justifyContent={'flex-start'}
          alignItems={'center'}
          marginBottom={10}
        >
          <Image source={item.logo} width={25} height={25} marginRight={10} />
          <Text fontSize={18} ftWhite>{`${item.name} Flexible Staking`}</Text>
        </ViewRow>
        <ViewRow justifyContent={'flex-start'} alignItems={'center'}>
          <Text fontSize={13} ftMint marginRight={10}>
            APR
          </Text>
          <Text fontSize={18} ftMint bold>
            {`${item.annualInteresetRate}%`}
          </Text>
        </ViewRow>
      </View>
      <Line width={'100%'} height={3} />
      <View flex={3} width={'100%'}>
        <ViewRow
          flex={1}
          flewWrap={'wrap'}
          justifyContent={'space-around'}
          alignItems={'center'}
          marginTop={20}
          marginBottom={20}
        >
          <GestureButtonBorderRadius
            width={170}
            height={70}
            onPress={onPressCoinInfo}
            borderRadius={6}
            bgYellowTheme
            justifyContent={'center'}
            alignItems={'center'}
            paddingTop={15}
            paddingBottom={15}
            paddingRight={40}
            activeOpacity={1}
            style={{ overflow: 'hidden' }}
          >
            <ViewBorderRadius
              bgLightPurple
              borderRadius={20}
              width={40}
              height={40}
              justifyContent={'center'}
              alignItems={'center'}
              marginRight={10}
            >
              <Image source={iconInfo} width={20} height={20} />
            </ViewBorderRadius>
            <View>
              <Text fontSize={15} bold>
                Coin
              </Text>
              <Text fontSize={13}>Info</Text>
            </View>
            <ViewAbsolute
              bgWhite
              bottom={0}
              right={0}
              style={{
                borderTopWidth: 23,
                borderRightWidth: 23,
                borderBottomWidth: 23,
                borderLeftWidth: 23,
                borderTopColor: '#ffcc00',
                borderRightColor: 'white',
                borderBottomColor: 'white',
                borderLeftColor: '#ffcc00',
              }}
            />
          </GestureButtonBorderRadius>
          <GestureButtonBorderRadius
            width={170}
            height={70}
            onPress={onPressFCAS}
            borderRadius={6}
            bgYellowTheme
            justifyContent={'center'}
            alignItems={'center'}
            paddingTop={15}
            paddingBottom={15}
            paddingRight={40}
            activeOpacity={1}
            style={{ overflow: 'hidden' }}
          >
            <ViewBorderRadius
              bgLightPurple
              borderRadius={20}
              width={40}
              height={40}
              justifyContent={'center'}
              alignItems={'center'}
              marginRight={10}
            >
              <Text fontSize={22} bold ftWhite>
                {renderFCAS(item.symbol)}
              </Text>
            </ViewBorderRadius>
            <View>
              <Text fontSize={18} bold>
                FCAS
              </Text>
            </View>
            <ViewAbsolute
              bgWhite
              bottom={0}
              right={0}
              style={{
                borderTopWidth: 23,
                borderRightWidth: 23,
                borderBottomWidth: 23,
                borderLeftWidth: 23,
                borderTopColor: '#ffcc00',
                borderRightColor: 'white',
                borderBottomColor: 'white',
                borderLeftColor: '#ffcc00',
              }}
            />
          </GestureButtonBorderRadius>
        </ViewRow>
        <View flex={2} width={'94%'} alignSelf={'center'}>
          <Text fontSize={15} ftYellowTheme bold marginBottom={10}>
            Product Outline
          </Text>
          <ViewRow
            flewWrap={'wrap'}
            justifyContent={'space-between'}
            alignItems={'center'}
            marginBottom={8}
          >
            <Text width={'50%'} fontSize={14} ftBlueGray>
              Product Type
            </Text>
            <Text
              width={'50%'}
              fontSize={14}
              ftWhite
              bold
              textAlign={'right'}
            >{`${item.name} Flexible Staking`}</Text>
          </ViewRow>
          <ViewRow marginBottom={8}>
            <Text fontSize={14} ftBlueGray width={'60%'}>
              Minimum Locked Amount
            </Text>
            <Text width={'40%'} fontSize={14} ftWhite textAlign={'right'}>
              {item.minimumLockedAmount > 0
                ? `${item.minimumLockedAmount} ${item.symbol}`
                : 'None'}
            </Text>
          </ViewRow>
          <ViewRow marginBottom={8}>
            <Text width={'50%'} fontSize={14} ftBlueGray>
              Due Date
            </Text>
            <Text width={'50%'} fontSize={14} ftWhite textAlign={'right'}>
              Withdrawal any time
            </Text>
          </ViewRow>
          <ViewRow marginBottom={8}>
            <Text width={'50%'} fontSize={14} ftBlueGray>
              Est. APR
            </Text>
            <Text width={'50%'} fontSize={14} ftWhite textAlign={'right'}>
              {`${item.annualInteresetRate}%`}
            </Text>
          </ViewRow>
        </View>
      </View>
      <View flex={1} justifyContent={'flex-end'}>
        <ButtonRadius
          bgYellowTheme
          width={'94%'}
          paddingTop={10}
          paddingBottom={10}
          marginTop={20}
          marginBottom={20}
          marginLeft={'auto'}
          marginRight={'auto'}
          onPress={onPressStart}
        >
          <Text ftNavyTheme bold fontSize={16}>
            Start Staking
          </Text>
        </ButtonRadius>
      </View>
    </SafeAreaView>
  );
};

export default FlexibleDetailScreen;
