import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { SystemProgram, Transaction, LAMPORTS_PER_SOL, Connection, PublicKey, clusterApiUrl, Keypair } from "@solana/web3.js";
import * as spl from "@solana/spl-token";
import { TOKEN_PROGRAM_ID, Token } from "@solana/spl-token";
import BN from 'bn.js';
import { TokenListProvider, TokenInfo } from '@solana/spl-token-registry';
import axios from 'axios';
import * as bs58 from "bs58";
import { SceneMap, TabView } from 'react-native-tab-view';
import { format } from 'date-fns';
import { Actions } from 'react-native-router-flux';

import { SafeAreaView, View, ViewAbsolute, ViewRow } from '../../../components/styled/View';
import TabViewBar from '../../../components/bar/TabViewBar';
import WalletCoinScreen from './WalletCoinScreen';
import WalletNftScreen from './WalletNftScreen';
import { Text } from '../../../components/styled/Text';
import Line from '../../../components/line/Line';
import { Image } from '../../../components/styled/Image';
import dollarIcon from '../../../assets/common/dollar.png';
import checkPressed from '../../../assets/common/iconOvalCheckPressed.png';
import { localeString } from '../../../utils/functions';
import { Button } from '../../../components/styled/Button';
import { tickers } from '../../../utils/dummy';
import Coin from '../../../components/items/wallet/Coin';
import { getNFTMetaData } from "../../../utils/nft";

const getListOfTokens = async (pubkey, networkMode) => {
  const connection = new Connection(clusterApiUrl(networkMode));

  let tokenList = [];
  let mintList = [];
  //////////////////////////////////////////////////////////////////////////////////////////////    Get SPL Token List owned by pubkey.
  ////////////////////////////////////  Get All Token List owned by pubkey
  const accounts = await connection.getParsedProgramAccounts(
    TOKEN_PROGRAM_ID,
    {
      filters: [
        {
          dataSize: 165,
        },
        {
          memcmp: {
            offset: 32,
            bytes: new PublicKey(pubkey),
          },
        },
      ],
    }
  );
  ///////////////////////////////////// Classify FT and NFT from token list with their useful info
  accounts.forEach((account) => {
    //  If it is token account owned by me
    if (parseInt(account.account.data.parsed.info.tokenAmount.amount) > 0) {
      const accountInfo = account.account.data.parsed.info;
      if (accountInfo.tokenAmount.amount == '1' && accountInfo.tokenAmount.decimals == 0) {
        tokenList.push({
          isNative: accountInfo.tokenAmount.isNative,
          name: accountInfo.tokenAmount.name,
          symbol: accountInfo.tokenAmount.symbol,
          logoURI: accountInfo.tokenAmount.logoURI,
          mint: accountInfo.mint,
          decimals: accountInfo.tokenAmount.decimals,
          amount: accountInfo.tokenAmount.amount,
          uiAmount: accountInfo.tokenAmount.uiAmount,
          type: "NFT"
        });
      } else if (accountInfo.tokenAmount.amount != '1' && accountInfo.tokenAmount.decimals > 0) {
        tokenList.push({
          isNative: accountInfo.tokenAmount.isNative,
          mint: accountInfo.mint,
          decimals: accountInfo.tokenAmount.decimals,
          amount: accountInfo.tokenAmount.amount,
          uiAmount: accountInfo.tokenAmount.uiAmount,
          type: "FT"
        });
      }
    }
  });

////////////////////////////////////////////////////////////////////////////////////////  Get FT name, symbol, logoURI, price based USD
  //////////////////////////////////// Get Symbol and logoURI of spl token list
  ////////////////////  Get All Token Info
  let tokens = await new TokenListProvider().resolve();
  const splTokens = tokens.filterByClusterSlug(networkMode).getList();
  ///////////////////   Get Token List with name, symbol, logoURI and so on
  let tkLists = [];
  await (async () => {
    for (let index = 0; index < tokenList.length ; index++) {
      let item = tokenList[index];
      if (item.type == "FT") {
        mintList.push(item.mint);
        for (let token in splTokens) {
          if (splTokens[token].address === item.mint) {
            tkLists.push({
              ...item,
              name: splTokens[token].name,
              symbol: splTokens[token].symbol,
              logoURI: splTokens[token].logoURI
            });
            break;
          }   
        }
      }
      else if (item.type == "NFT") {
        const res = await getNFTMetaData(new PublicKey(item.mint), new PublicKey(pubkey));
        tkLists.push({
          ...item,
          name: res.name,
          symbol: res.symbol,
          logoURI: res.image
        });   
      }
    }
  })();
  tokenList = tkLists;
  ///////////////////////////////////// Get Token Prices
  let tkList = {NFTs : [], FTs : []};
  await (async () => {
    for ( let index = 0 ; index < tokenList.length ; index++) {
      const item = tokenList[index];
      if (item != undefined && item.type == "FT") {
        const price = await axios.get(`https://public-api.birdeye.so/public/price?address=${item.mint}`);
        if (price.data.data.value != undefined)
          tkList.FTs.push({
            ...item,
            'price': price.data.data.value
          });
        else 
          tkList.FTs.push({
            ...item,
            price: undefined
          })
      }
      else if (item != undefined && item.type == "NFT") {
        tkList.NFTs.push(item);
      }
    }
  })();  
  /////////////////////////////////////// Add Sol to TokenList
  const result = await axios.get('https://public-api.birdeye.so/public/price?address=So11111111111111111111111111111111111111112');
  const solPrice = result.data.data.value;

  const balance = await connection.getBalance(new PublicKey(pubkey));
  if (balance > 0) {
    tkList.FTs.push({
      isNative: true,
      name: 'Solana',
      symbol: 'SOL',
      logoURI: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png',
      amount : 'XXXXX',
      decimals : 9,
      price: solPrice,
      mint : 'XXXXX',
      uiAmount : ((balance + 0.0)/LAMPORTS_PER_SOL),
      type : 'FT' //  Tokens show Wrapped SOL and Native SOL 
    });
  }
  return tkList; 
}

// Caculate Total Balance based USD from solTokenList
const totalBalanceCalculation = (tokenList) => {
  let totalBalance = 0.0;
  tokenList.forEach((item) => {
    if (item.price != undefined)
      totalBalance += item.uiAmount * item.price;
  });

  return totalBalance.toFixed(9);
};

////////////////////////////////////////////////////////////////////////////////////////////////////////  Main Wallet Component
const WalletScreen = () => {
/////////////////////////////////////////////////////////////////////////  State  
  const [solTokenList, setSolTokenList] = useState([]); //  List of Tokens owned by my wallet
  const [totalBalance, setTotalBalance] = useState(0);  //  Total Balance

  const message = useSelector(                   //  Modal Message.
    (state: RootStateOrAny) => state.wallet.message
  );
  const solSecretKey = useSelector(                     //  SecretKey of my wallet.
    (state: RootStateOrAny) => state.global.solSecret
  );
  const solPublicKey = useSelector(                     //  PublicKey of my wallet.
    (state: RootStateOrAny) => state.global.solPublic
  );
  const solNetworkMode = useSelector(                   //  Solana Network Mode. This value is initialState.
    (state: RootStateOrAny) => state.global.solNetworkMode
  );
  
  const [index, setIndex] = useState(0);                //  Tab View Index
  const [routes] = useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
  ]);
  const [tabItems] = useState(['Token', 'Collection']);

  // TabView Screen
  const renderScene = SceneMap({
    first: () => <WalletCoinScreen solTokenList={solTokenList.FTs} solPublicKey={solPublicKey} />,
    second: () => <WalletNftScreen solTokenList={solTokenList.NFTs} solPublicKey={solPublicKey} />,
  });

  const usdExchangeRate = 1;
//////////////////////////////////////////////////////////////////////////  Init Progress. Get TokenList of my Wallet.  
  useEffect(() => {
    if (solSecretKey != undefined) {
      (async () => {
        let tokenlist = await getListOfTokens(solPublicKey, solNetworkMode);
        setSolTokenList(tokenlist);  
        setTotalBalance(totalBalanceCalculation(tokenlist.FTs));
      })();      
    }
  }, [message]);

  return (
    <SafeAreaView bgNavyTheme>
      <View
        flex={1}
        width={'96%'}
        justifyContent={'center'}
        alignSelf={'center'}
      >
       
        <View height={50} marginTop={20} marginLeft={10}>
          <Text ftWhite bold fontSize={24}>
            My Wallet
          </Text>
        </View>
        <Line width={'100%'} height={1} />
        <View
          height={150}
          justifyContent={'space-around'}
          alignItems={'center'}
          paddingTop={10}
          paddingBottom={10}
        >
          <View width={'100%'} justifyContent={'center'} alignItems={'center'}>
            <Text ftYellowTheme marginBottom={5}>
              Total Assets
            </Text>
            <View bgYellowTheme height={3} width={50} />
            <ViewAbsolute
              top={0}
              right={15}
              bgLightNavy
              width={24}
              height={24}
              alignItems={'center'}
              justifyContent={'center'}
            >
              <Image source={dollarIcon} width={18} height={18} />
            </ViewAbsolute>
          </View>
          <View>
            <Text fontSize={30} ftWhite>
              $ {totalBalance !== 'NaN' ? localeString(totalBalance) : 0}
            </Text>
          </View>
          <View>
            <Text ftBlueGray>{format(new Date(), 'yyyy-MM-dd HH:mm')}</Text>
          </View>
        </View>
        <Line width={'100%'} height={3} />
         <View width={"90%"} height={50} marginTop={10} marginLeft={10}>
          <ViewRow  justifyContent={'space-between'} alignItems={'center'}>
            <TabViewBar ftsize={"16"} index={index} tabItems={tabItems} setIndex={setIndex} />
            <View marginLeft={"10"}  flexDirection={"row"} alignItems={'center'} >
              <Button width={30} height={30}>
                <Image width={24} height={24} source={checkPressed} />
              </Button>
              <Text ftBlueGray fontSize={12}>
                Show all assets
              </Text>
            </View>
          </ViewRow>
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

export default WalletScreen;