import React, { useEffect, useMemo, useState } from 'react';
import QRCode from 'react-native-qrcode-svg';
import Clipboard from '@react-native-clipboard/clipboard';
import { useDispatch } from 'react-redux';
import * as globalActions from '../../../../store/modules/global/actions';
import Topbar from '../../../../components/bar/TopBar';
import Line from '../../../../components/line/Line';
import {
  SafeAreaView,
  ScrollView,
  View,
  ViewRow,
  ViewRowBorderRadius,
} from '../../../../components/styled/View';
import { Text } from '../../../../components/styled/Text';
import { Image } from '../../../../components/styled/Image';
import { ButtonBorderRadius } from '../../../../components/styled/Button';
import { GestureButtonBorderRadius } from '../../../../components/styled/GestureButton';
import iconCopyGrey from '../../../../assets/wallet/iconCopyGrey.png';
import InputBorderRadius from '../../../../components/input/InputBorderRadius';
import * as modalActions from '../../../../store/modules/modal/actions';

import {Keypair, PublicKey} from '@solana/web3.js';
import * as RNFS from 'react-native-fs';
import * as bs58 from "bs58";
import {encode, decode} from 'string-encode-decode'
import { useDispatch } from 'react-redux';
import * as globalActions from '../../../../store/modules/global/actions';
import { generateMnemonic, mnemonicToSeed, accountFromSeed } from '../../../../utils/keypair';
import {Actions} from 'react-native-router-flux';

const KeyPairFileName = "id.json";
const MnemonicsFileName = "mnemonics.json";
const KeyFilePath = RNFS.DocumentDirectoryPath + KeyPairFileName;
const MFilePath = RNFS.DocumentDirectoryPath + MnemonicsFileName;

const ReceiveScreen = ({ title, address }) => {
  const dispatch = useDispatch();

  const [mnemonics, setMnemonics] = useState('');
  const [isMnemonicsEditable, setIME] = useState(false);
  const onBackup = () => {
    setIME(false);
    const res = await RNFS.readFile(MFilePath, 'ascii');
    setMnemonics(res);
  };

  const onSave = async() => {
    if (mnemonics === '') {
      return;
    }
    /////// Restore Keypair from Mnemonics
    const seed = await mnemonicToSeed(mnemonics);
    const keypair = accountFromSeed(seed, 0, 'bip44Change', 0);
    let strSecretKey = await bs58.encode(secretKey);
    let encodedSecretKey = await encode(strSecretKey);
    RNFS.writeFile(KeyFilePath, encodedSecretKey, 'ascii');
    RNFS.writeFile(MFilePath, mnemonics, 'ascii');        
    onGetSolKey({publicKey, secretKey}); 
    Actions.popTo('walletScreen');
  }

  const onRestore = () => {
    if (isMnemonicsEditable == true ) {
      dispatch(
        modalActions.change_modal_message(
          'Do you want to restore Keypair?'
        )
      );
      dispatch(modalActions.change_modal_one_button(false));
      dispatch(modalActions.change_modal_on_press_ok(onSave));
      setIME(false);
    } else {
      setIME(true);
    }
  };

  const onChangeMnemonics = (text) => {
    setMnemonics(text);
  }

  const onPressCopy = () => {
    Clipboard.setString(address);
    dispatch(globalActions.change_toast_message('Copied!'));
  };
  return (
    <SafeAreaView bgNavyTheme>
      <ScrollView>
        <Topbar isLeftButton title={`${title} Receive`} />
        <View
          paddingLeft={15}
          paddingRight={15}
          marginTop={30}
          alignItems={'center'}
        >
          <QRCode value={address} size={150} />
        </View>
        <View paddingLeft={15} paddingRight={15}>
          <Text bold marginTop={15} paddingLeft={10} ftWhite>
            Wallet address
          </Text>
        </View>
        <ViewRowBorderRadius
          alignItems={'center'}
          bgLineNavy
          marginTop={15}
          marginLeft={20}
          paddingLeft={15}
          marginRight={20}
        >
          <View flex={1}>
            <Text ftWhite>{address}</Text>
          </View>
          <GestureButtonBorderRadius
            onPress={onPressCopy}
            flexDirection={'column'}
            paddingLeft={10}
            paddingRight={10}
            width={'auto'}
            paddingTop={25}
            paddingBottom={25}
            bgWhite
            flex={1}
            borderTopRightRadius={5}
            borderBottomRightRadius={5}
          >
            <View>
              <Image width={18} height={18} source={iconCopyGrey} />
            </View>
            <View>
              <Text bold ftFontNavy>
                Copy
              </Text>
            </View>
          </GestureButtonBorderRadius>
        </ViewRowBorderRadius>
        <View marginTop={30}>
          <Line height={5} />
        </View>
        <View paddingLeft={15} paddingRight={15}>
          <Text bold marginTop={15} paddingLeft={10} ftWhite>
            Backup and Restore Mnemonics
          </Text>
        </View>

        <ViewRowBorderRadius
          alignItems={'center'}
          bgLineNavy
          marginTop={15}
          marginLeft={20}
          paddingLeft={15}
          marginRight={20}
        >
        {
          (isMnemonicsEditable == true) ?  
            <InputBorderRadius
              height={40}
              ftWhite
              value={mnemonics}
              onChangeText={onChangeMnemonics}
              maxLength={null}
            />
          :
            <View flex={1} height={40} ftWhite>
              <Text ftWhite>{mnemonics}</Text>
            </View>
        }
        </ViewRowBorderRadius>

        <View paddingLeft={20} paddingRight={20} marginTop={30}>
          <ViewRow justifyContent={'space-around'} width={'100%'} marginTop={25}>
          <ButtonBorderRadius
            borderRadius={6}
            bgLightNavy
            width={'43%'}
            paddingTop={15}
            paddingBottom={15}
            onPress={onBackup}
          >
            <Text fontSize={15} ftYellowTheme>
              Backup
            </Text>
          </ButtonBorderRadius>
          <ButtonBorderRadius
            borderRadius={6}
            bgLightNavy
            width={'43%'}
            onPress={onRestore}
          >
            <Text ftWhite fontSize={15}>
              { (isMnemonicsEditable) ? 'Save' : 'Restore' }
            </Text>
          </ButtonBorderRadius>
        </ViewRow>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ReceiveScreen;
