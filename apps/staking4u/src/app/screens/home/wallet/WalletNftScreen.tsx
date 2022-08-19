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
import Nft from '../../../components/items/wallet/Nft';

// 나의 지갑
const WalletNftScreen = (props) => { 
  const usdExchangeRate = 1;

  const renderCoin = ({ item }) => {
    let mintAddress;

    props.solTokenList.map((data) => {
      if (item.symbol === data.symbol) {
        mintAddress = data.mint;
      }
    });

    const onPressItem = (symbol) => {
      // 해당 코인 디테일 페이지로 이동
      Actions.walletNftDetailScreen({
        coin: item,
        mintAddress,
      });
    };

    return (
      <Nft
        logo={item.logoURI}
        name={item.name}
        symbol={item.symbol}
        amount={item.uiAmount}
        price={item.price}
        onPress={onPressItem}
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
            numColumns={2}
            renderItem={renderCoin}
            keyExtractor={(item) => item.name}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WalletNftScreen;
