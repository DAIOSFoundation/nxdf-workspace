
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
import { ButtonBorderRadius, ButtonRadius } from '../../../components/styled/Button';
import { findOneThemeToken } from '../../../utils/functions';
import { Image } from '../../../components/styled/Image';
import icon_undefined from '../../../assets/logos/undefined.png';

// 지갑 상세
const WalletNftDetailScreen = (props) => {
  // 전송 버튼
  const onPressSend= () => {
    const param = {
      title: props.coin.symbol,
      decimals: props.coin.decimals,
      mintAddress: props.mintAddress,   // mintaddress
      logo: props.coin.logoURI
    };
    Actions.sendNftScreen(param);
  };

  // 판매 버튼
  const onPressSell = () => {
    const param = {
      title: props.coin.symbol,
      amount,
      decimals: props.coin.decimals,
      mintAddress: props.mintAddress,
      logo: props.coin.logoURI,
    };
    Actions.sellNftScreen(param);
  };

  return (
    <SafeAreaView bgNavyTheme>
      <TopBar isLeftButton title={props.coin.name} />
        <View flex={5}>
        {
          (() => {
            if (props.coin.logoURI == undefined)
              return <Image source={icon_undefined} width={"90%"} height={"100%"} borderRadius={10} bgLightGray marginLeft={'auto'}
              marginRight={'auto'} />
            else
              return <Image source={{uri : props.coin.logoURI}} width={"90%"} height={"100%"} borderRadius={10} bgLightGray marginLeft={'auto'}
              marginRight={'auto'}/>
          })()
        }
        </View>
        <View flex={4} width={"90%"}  marginTop={10} marginBottom={10} marginLeft={'auto'}
        marginRight={'auto'}>
          <Text ftWhite>{props.coin.name}</Text>
          <Text ftWhite>{props.coin.name}</Text>
        </View>
        <View flex={2} flexDirection={"row"} justifyContent={'center'} alignItems={''}>
        <ButtonRadius
        bgWhite
        width={'40%'}
        height={'40%'}
        paddingTop={10}
        paddingBottom={10}
        marginTop={20}
        marginBottom={20}
        marginLeft={'auto'}
        marginRight={'auto'}
        onPress={onPressSend}
        >
            <Text ftNavyTheme bold fontSize={16}>
                Send
            </Text>
        </ButtonRadius>
        <ButtonRadius
        bgYellowTheme
        width={'40%'}
        height={'40%'}
        paddingTop={10}
        paddingBottom={10}
        marginTop={20}
        marginBottom={20}
        marginLeft={'auto'}
        marginRight={'auto'}
        onPress={onPressSell}
        >
            <Text ftNavyTheme bold fontSize={16}>
                Sell
            </Text>
        </ButtonRadius>
      </View>
    </SafeAreaView>
  );
};

export default WalletNftDetailScreen;
