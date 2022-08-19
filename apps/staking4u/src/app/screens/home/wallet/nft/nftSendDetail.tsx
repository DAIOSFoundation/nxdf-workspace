import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Actions } from 'react-native-router-flux';

import { SafeAreaView, View } from '../../../../components/styled/View';
import Topbar from '../../../../components/bar/TopBar';
import { ButtonRadius } from '../../../../components/styled/Button';
import { Image } from '../../../../components/styled/Image';
import styled from 'styled-components/native';
import { Text } from '../../../../components/styled/Text';
import scan from '../../../assets/main/icon_scan.png';
import * as globalActions from '../../../../store/modules/global/actions';
import * as modalActions from '../../../../store/modules/modal/actions';
import * as walletActions from '../../../../store/modules/wallet/actions';
import icon_undefined from '../../../../assets/logos/undefined.png';

const SendWalletScreen = styled(View)`
    height: 50px;
    width: 100%;
    border-radius: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    flex-direction: row;
    align-self: center;
    align-items: center;
    justify-content: center;
    background-color: #1E2048;
`;

const NftSendDetailScreen = (props) => {

  const dispatch = useDispatch();

  const message = useSelector(                   //  Modal Message.
    (state: RootStateOrAny) => state.wallet.message
  );
  const solSecret = useSelector(                     //  SecretKey of my wallet.
    (state: RootStateOrAny) => state.global.solSecret
  );
  const solPublicKey = useSelector(                     //  PublicKey of my wallet.
    (state: RootStateOrAny) => state.global.solPublic
  );
  const solNetworkMode = useSelector(                   //  Solana Network Mode. This value is initialState.
    (state: RootStateOrAny) => state.global.solNetworkMode
  );

  useEffect(() => {
    console.log(message);
    if (message === 'transactionSuccess') {
      dispatch(walletActions.reset_message());
      Actions.sendRequestSuccessScreen();
    } else if (message === 'transactionFailed') {
      dispatch(walletActions.reset_message());
      Actions.sendRequestFailedScreen();
    }
  }, [message]);


  const onPressSend = () => {
    let param = {
        networkMode: solNetworkMode,
        secretKey: solSecret,
        publicKey: solPublicKey,
        toAddress: props.address,
        mintAddress: props.mintAddress,
        withdrawalAmount: 1,
        decimals: props.decimals
      };

    console.log('To send SPL Token =====>', param);
    dispatch(walletActions.post_send_sol_token_transaction(param));
  }

  return (
    <SafeAreaView bgNavyTheme>
        <Topbar isLeftButton title={"NFT Send"} />
          <View flex={1} marginTop={50} width={"90%"} alignSelf={"center"} >
            <Text  ftWhite> Check out the information below</Text>
            <Text ftYellowTheme >Cancellation is not possible after sending</Text>
          </View>
          <View flex={1} marginTop={20} width={"90%"} alignSelf={"center"} >
            <Text  ftWhite>Wallet Address</Text>
              <SendWalletScreen border={true}>
                  <Text ftWhite>{props.address}</Text>
              </SendWalletScreen>
          </View>
        <View flex={4} marginTop={50}>
            <Text marginLeft={20} ftWhite>send a NFT</Text>
            {
              (() => {
                if (props.logo == undefined)
                  return <Image source={icon_undefined} width={"60%"} height={"80%"} borderRadius={10} bgLightGray marginLeft={'auto'}
                  marginRight={'auto'} marginTop={10} />
                else
                  return <Image source={{uri : props.logo}} width={"60%"} height={"80%"} borderRadius={10} bgLightGray marginLeft={'auto'}
                  marginRight={'auto'} marginTop={10} />
              })()
            }            
          </View>
          <View flex={2} width={"90%"}  marginTop={40} marginBottom={10} marginLeft={'auto'}
        marginRight={'auto'}>
            <Text marginBottom={10} fontSize={16} ftWhite>NFT Name plz...</Text>
            <Text  ftLightGray>{props.title}</Text>
          </View>
        <View flex={2} flexDirection={"row"} justifyContent={'center'} alignItems={''}>
        <ButtonRadius
        bgYellowTheme
        width={'80%'}
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
      </View>
    </SafeAreaView>
  );
};

export default NftSendDetailScreen;
