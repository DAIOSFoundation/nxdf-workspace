import React, { useEffect, useMemo, useState } from 'react';
import { FlatList, Linking } from 'react-native';
import { format } from 'date-fns';
import { Actions } from 'react-native-router-flux';
import TopBar from '../../../components/bar/TopBar';
import Line from '../../../components/line/Line';
import ETHTransaction from '../../../components/items/wallet/ETHTransaction';
import SOLTransaction from '../../../components/items/wallet/SOLTransaction';
import SOLTokensTransaction from '../../../components/items/wallet/SOLTokensTransaction';
import { SafeAreaView, View, ViewRow } from '../../../components/styled/View';
import { Text } from '../../../components/styled/Text';
import { ButtonBorderRadius } from '../../../components/styled/Button';
import { findOneThemeToken } from '../../../utils/functions';
import { Connection } from '@solana/web3.js';
import { WalletCoin } from '../../../utils/dummy';

// 지갑 상세
const WalletDetailScreen = (props) => {
  const { coin } = props;
  const coinData = WalletCoin.filter((data) => data.name === coin.name).flat();
  const price = coin?.tickers.find(
    (data) => data.target === 'USD' && data.last
  ).last;

  // 입금 버튼
  const onPressReceive = () => {
    // const param = {
    //   title: props.coin.symbol,
    //   address: getAddressBySymbol(props.coin.symbol),
    // };
    const param = {
      title: props.coin.symbol,
      address: '1111111',
    };
    Actions.receiveScreen(param);
  };

  // 출금 버튼
  const onPressSend = () => {
    const param = {
      title: props.coin.symbol,
      mintAddress: props.mintAddress,
    };
    Actions.sendAddressScreen(param);
  };

  return (
    <SafeAreaView bgNavyTheme>
      <TopBar isLeftButton title={props.coin.name} />
      <View alignItems={'center'} marginTop={15} marginBottom={30}>
        <View alignItems={'center'}>
          <Text ftYellowTheme>Total</Text>
          <View bgYellowTheme height={3} marginTop={5} width={50} />
        </View>
        <View marginTop={15} marginBottom={15}>
          <Text ftBigLarge ftWhite>
            {coinData[0].amount} {props.coin.symbol}
          </Text>
        </View>
        <View>
          <Text fontSize={15} ftBlueGray>
            ${(coinData[0].amount * price).toFixed(4)}
          </Text>
        </View>
        <ViewRow justifyContent={'space-around'} width={'100%'} marginTop={25}>
          <ButtonBorderRadius
            borderRadius={6}
            bgLightNavy
            width={'43%'}
            paddingTop={15}
            paddingBottom={15}
            onPress={onPressReceive}
          >
            <Text fontSize={15} ftYellowTheme>
              Receive
            </Text>
          </ButtonBorderRadius>
          <ButtonBorderRadius
            borderRadius={6}
            bgLightNavy
            width={'43%'}
            onPress={onPressSend}
          >
            <Text ftWhite fontSize={15}>
              Send
            </Text>
          </ButtonBorderRadius>
        </ViewRow>
      </View>
      <Line height={4} />
      <View paddingLeft={15} paddingRight={15} flex={1}>
        {/* 내역보기 문구 */}
        <ViewRow
          alignItems={'center'}
          marginTop={25}
          marginBottom={25}
          justifyContent={'space-between'}
        >
          <Text ftWhite>History</Text>
          {/*//todo 미구현 UI 주석처리, 추후 구현 예정*/}
          {/*<ButtonBorderRadius*/}
          {/*  bgDeepBlue*/}
          {/*  width={'auto'}*/}
          {/*  paddingLeft={10}*/}
          {/*  paddingRight={10}>*/}
          {/*  <Text*/}
          {/*    ftSmall*/}
          {/*    ftWhite*/}
          {/*    paddingTop={5}*/}
          {/*    paddingBottom={5}*/}
          {/*    marginRight={5}>*/}
          {/*    All*/}
          {/*  </Text>*/}
          {/*  <Image width={12} height={12} source={iconWhiteDown} />*/}
          {/*</ButtonBorderRadius>*/}
        </ViewRow>
        <Line height={1} />
        {/* 내역 상세 리스트 */}
        {/* <FlatList
          data={transactions}
          renderItem={renderTransactions}
          keyExtractor={(item) =>
            findOneThemeToken(props.coin.symbol)
              ? item.blockNumber
              : item.txHash
          }
        /> */}
      </View>
    </SafeAreaView>
  );
};

export default WalletDetailScreen;
