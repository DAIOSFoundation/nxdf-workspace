import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Topbar from '../../../../components/bar/TopBar';
import { Image } from '../../../../components/styled/Image';
import {
  SafeAreaView,
  View,
  ViewBorderRadius,
  ViewRow,
} from '../../../../components/styled/View';
import {
  ButtonBorderRadius,
  ButtonRadius,
} from '../../../../components/styled/Button';
import { Text } from '../../../../components/styled/Text';
import { findOneThemeToken } from '../../../../utils/functions';
import scan from '../../../assets/main/icon_scan.png';
import { Actions } from 'react-native-router-flux';
import { isEmpty } from '../../../../utils/functions';

import Clipboard from '@react-native-clipboard/clipboard';
import * as modalActions from '../../../../store/modules/modal/actions';
import * as walletActions from '../../../../store/modules/wallet/actions';
import InputBorderRadius from '../../../../components/input/InputBorderRadius';


const NftSendScreen = (props) => {
  const dispatch = useDispatch();
  
  const address = useSelector(                     //  SecretKey of my wallet.
    (state: RootStateOrAny) => state.wallet.address
  );

  // 전송 버튼
  const onPressSend= () => {

    const param = {
      address: address,
      title: props.title,
      decimals: props.decimals,
      mintAddress: props.mintAddress,
      logo: props.logo
    };
    Actions.sendNftDetailScreen(param);
  };

  const pasteClipboard = async () => {
    dispatch(walletActions.change_wallet_address(await Clipboard.getString()));
  };

  const qrScan = () => {
    Actions.qRCodeScannerScreen();
  };

  const onChangeAddress = (text) => {
    dispatch(walletActions.change_wallet_address(text));
  };

  //뒤로가기
  const onPressLeft = () => {
    if (isEmpty(props.onPressLeft)) {
      Actions.pop();
    } else {
      props.onPressLeft();
    }
  };

  return (
    <SafeAreaView bgNavyTheme>
      <Topbar isLeftButton title={`${props.title} Send`} />
      <View marginTop={30} paddingLeft={20} paddingRight={20} flex={1}>
        <Text ftWhite bold>
          Wallet address
        </Text>
        <ViewBorderRadius
          marginTop={15}
          brBlueGray
          paddingLeft={10}
          paddingRight={10}
        >
          <InputBorderRadius
            height={37}
            ftWhite
            value={address}
            onChangeText={onChangeAddress}
            maxLength={null}
          />
        </ViewBorderRadius>
        <ViewRow justifyContent={'center'} marginTop={15}>
          <ButtonBorderRadius
            bgLightWhite
            width={'auto'}
            paddingLeft={15}
            paddingTop={10}
            paddingBottom={10}
            paddingRight={15}
            marginRight={5}
            onPress={qrScan}
          >
            <Text>Scan QR</Text>
          </ButtonBorderRadius>
          <ButtonBorderRadius
            bgLightWhite
            width={'auto'}
            paddingLeft={15}
            paddingTop={10}
            paddingBottom={10}
            paddingRight={15}
            marginLeft={5}
            onPress={pasteClipboard}
          >
            <Text>Paste Clipboard</Text>
          </ButtonBorderRadius>
        </ViewRow>
      </View>
      <ButtonRadius
        width={'88%'}
        paddingTop={10}
        paddingBottom={10}
        marginTop={20}
        bgYellowTheme
        onClick={this}
        onPress={onPressSend}
        marginLeft={'auto'}
        marginRight={'auto'}
        marginBottom={20}
      >
        <Text bold fontSize={16}>
          Send
        </Text>
      </ButtonRadius>
    </SafeAreaView>
  );
};

export default NftSendScreen;
