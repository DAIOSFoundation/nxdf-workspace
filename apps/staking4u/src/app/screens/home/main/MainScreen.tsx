import React, { useState } from 'react';
import { SceneMap, TabView } from 'react-native-tab-view';
import { SafeAreaView, View } from '../../../components/styled/View';
import TabViewBar from '../../../components/bar/TabViewBar';
import FlexibleScreen from './FlexibleScreen';
import LiquidityScreen from './LiquidityScreen';

/////////////////////////////////////////////////////////////// Set/Get Wallet Address
import {Keypair, PublicKey} from '@solana/web3.js';
import * as RNFS from 'react-native-fs';
import * as bs58 from "bs58";
import {encode, decode} from 'string-encode-decode'
import { useDispatch } from 'react-redux';
import * as globalActions from '../../../store/modules/global/actions';
import { generateMnemonic, mnemonicToSeed, accountFromSeed } from '../../../utils/keypair';

const KeyPairFileName = "id.json";
const MnemonicsFileName = "mnemonics.json";
const KeyFilePath = RNFS.DocumentDirectoryPath + KeyPairFileName;
const MFilePath = RNFS.DocumentDirectoryPath + MnemonicsFileName;
///////////////////////////////////////////////////////////////

const MainScreen = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
  ]);
  const [tabItems] = useState(['Staking', 'Liquidity']);

  // 탭뷰 스크린
  const renderScene = SceneMap({
    first: FlexibleScreen,
    second: LiquidityScreen,
  });

 /////////////////////////////////////////////////////// Store Keypair to State.
 const dispatch = useDispatch();
 const onGetSolKey = (keypair) => {
    dispatch(
      globalActions.get_sol_keys(keypair)
    );
 }
 
 (async () => {
      try {
        const res = await RNFS.readFile(KeyFilePath, 'ascii');
        let secretKey = bs58.decode(decode(res));
        keypair = Keypair.fromSecretKey(Uint8Array.from(secretKey));
        let publicKey = keypair.publicKey;
        onGetSolKey({publicKey, secretKey});                
      }
      catch(err) {
        const mnemonics = await generateMnemonic();
        const seed = await mnemonicToSeed(mnemonics);
        const keypair = accountFromSeed(seed, 0, 'bip44Change', 0);
        let strSecretKey = await bs58.encode(secretKey);
        let encodedSecretKey = await encode(strSecretKey);
        RNFS.writeFile(KeyFilePath, encodedSecretKey, 'ascii');
        RNFS.writeFile(MFilePath, mnemonics, 'ascii');        
        onGetSolKey({publicKey, secretKey}); 
      }
  })();
 ////////////////////////////////////////////////////////
  return (
    <SafeAreaView bgNavyTheme>
      <View
        flex={1}
        width={'96%'}
        justifyContent={'center'}
        alignSelf={'center'}
      >
        <View height={50} marginTop={10} marginLeft={10}>
          <TabViewBar index={index} tabItems={tabItems} setIndex={setIndex} />
        </View>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          renderTabBar={() => null}
          onIndexChange={setIndex}
          initialLayout={{ width: 10, height: 100 }}
        />
      </View>
    </SafeAreaView>
  );
};

export default MainScreen;
