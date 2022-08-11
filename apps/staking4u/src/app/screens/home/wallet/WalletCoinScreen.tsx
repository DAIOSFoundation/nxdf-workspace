import React, { useEffect, useMemo, useState } from 'react';
import { FlatList } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { format } from 'date-fns';
import { useDispatch } from 'react-redux';
import Line from '../../../components/line/Line';
import Coin from '../../../components/items/wallet/Coin';
import {
  SafeAreaView,
  View,
  ViewAbsolute,
  ViewRow,
} from '../../../components/styled/View';
import { Text } from '../../../components/styled/Text';
import { Button } from '../../../components/styled/Button';
import { Image } from '../../../components/styled/Image';
import { localeString } from '../../../utils/functions';
import dollarIcon from '../../../assets/common/dollar.png';
import checkPressed from '../../../assets/common/iconOvalCheckPressed.png';

// 나의 지갑
const WalletCoinScreen = (props) => {
  const usdExchangeRate = 1; 

  const renderCoin = ({ item }) => {
    const onPressItem = (item) => {
      // 해당 코인 디테일 페이지로 이동
      Actions.walletDetailScreen({
        coin: item,
        solPublicKey: props.solPublicKey
      });
    };

    return (
      <Coin
        logo={item.logoURI}
        name={item.name}
        symbol={item.symbol}
        amount={item.uiAmount}
        price={item.price}
        onPress={() => {onPressItem(item)}}
      />
    );
  };

  return (
    <SafeAreaView bgNavyTheme>
      <View
        flex={1}
        justifyContent={'center'}
        alignSelf={'center'}
        width={'96%'}
      >
        <View flex={5}>
          <FlatList
            data={props.solTokenList}
            renderItem={renderCoin}
            keyExtractor={(item) => item.name}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WalletCoinScreen;
