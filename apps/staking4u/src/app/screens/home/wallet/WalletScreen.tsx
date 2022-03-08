import React, { useEffect, useMemo, useState } from 'react';
import { SceneMap, TabView } from 'react-native-tab-view';
import { SafeAreaView, View, ViewAbsolute, ViewRow } from '../../../components/styled/View';
import TabViewBar from '../../../components/bar/TabViewBar';
import WalletCoinScreen from './WalletCoinScreen';
import WalletNftScreen from './WalletNftScreen';
import { Text } from '../../../components/styled/Text';
import Line from '../../../components/line/Line';
import { Image } from '../../../components/styled/Image';
import orbsLogo from '../../../assets/logos/orbs.png';
import aaveLogo from '../../../assets/logos/aave.png';
import rayLogo from '../../../assets/logos/ray.png';
import atlasLogo from '../../../assets/logos/atlas.png';
import solLogo from '../../../assets/logos/sol.png';
import dollarIcon from '../../../assets/common/dollar.png';
import checkPressed from '../../../assets/common/iconOvalCheckPressed.png';
import { useDispatch } from 'react-redux';
import { localeString } from '../../../utils/functions';
import { format } from 'date-fns';
import { Button } from '../../../components/styled/Button';





const WalletScreen = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
  ]);
  const [tabItems] = useState(['Token', 'Collection']);

  // 탭뷰 스크린
  const renderScene = SceneMap({
    first: WalletCoinScreen,
    second: WalletNftScreen,
  });

  const tickers = {
    AAVE: { info: { priceChangePercent: -1.2 }, close: 1.2 },
    ORBS: { info: { signed_change_rate: 0.1 }, close: 12.45 },
    SOL: { info: { priceChangePercent: -3.14 }, close: 123.45 },
    RAY: { info: { priceChangePercent: 2.23 }, close: 67.8 },
    ATLAS: { info: { priceChangePercent: 10.01 }, close: 10.0 },
  };
  const aaveAmount = { data: { balance: 1 } };
  const orbsAmount = { data: { balance: 2 } };
  const solAmount = { data: { balance: 3 } };
  const [rayBalance, setRayBalance] = useState(0);
  const [atlasBalance, setAtlasBalance] = useState(1);

  const dispatch = useDispatch();

  const solTokenList = [];

  useEffect(() => {
    setRayBalance(123);
  }, [solTokenList]);

  // 총 보유 자산 계산
  const totalBalanceCalculation = (
    exchangeRate,
    orbsCurrentPrice,
    orbsAmount,
    aaveCurrentPrice,
    aaveAmount,
    rayCurrentPrice,
    rayAmount,
    atlasCurrentPrice,
    atlasAmount,
    solCurrentPrice,
    solAmount
  ) => {
    let orbsPrice;
    let aavePrice;
    let rayPrice;
    let atlasPrice;
    let solPrice;

    orbsPrice = (orbsCurrentPrice * orbsAmount) / exchangeRate;
    aavePrice = aaveCurrentPrice * aaveAmount;
    rayPrice = rayCurrentPrice * rayAmount;
    atlasPrice = atlasCurrentPrice * atlasAmount;
    solPrice = solCurrentPrice * solAmount;

    if (
      Number.isInteger(orbsPrice + aavePrice + rayPrice + atlasPrice + solPrice)
    ) {
      return localeString(
        orbsPrice + aavePrice + rayPrice + atlasPrice + solPrice
      );
    } else {
      return (orbsPrice + aavePrice + rayPrice + atlasPrice + solPrice).toFixed(
        2
      );
    }
  };

  const usdExchangeRate = 1;

  const totalBalances = useMemo(() => {
    return totalBalanceCalculation(
      usdExchangeRate,
      tickers?.['ORBS']?.close,
      orbsAmount?.data.balance,
      tickers?.['AAVE']?.close,
      aaveAmount?.data.balance,
      tickers?.['RAY']?.close,
      rayBalance,
      tickers?.['ATLAS']?.close,
      atlasBalance,
      tickers?.['SOL']?.close,
      solAmount?.data.balance
    );
  }, []);

  const coins = [
    {
      name: 'Aave', // 코인명
      symbol: 'AAVE', // 단위
      logo: aaveLogo, // 로고 이미지
      ticker: tickers?.['AAVE']?.close, // 현재 시장 가격 (시세)
      amount: aaveAmount?.data.balance, //  보유 코인 개수
      price: tickers?.['AAVE']?.close * aaveAmount?.data.balance, // 현재 시장 가 * 보유 코인 갯수 ( $ )
    },
    {
      name: 'Orbs',
      symbol: 'ORBS',
      logo: orbsLogo,
      ticker: tickers?.['ORBS']?.close,
      amount: orbsAmount?.data.balance,
      price:
        (tickers?.['ORBS']?.close * orbsAmount?.data.balance) / usdExchangeRate,
    },
    {
      name: 'Solana',
      symbol: 'SOL',
      logo: solLogo,
      ticker: tickers?.['SOL']?.close,
      amount: solAmount?.data.balance,
      price: tickers?.['SOL']?.close * solAmount?.data.balance,
    },
    {
      name: 'Raydium',
      symbol: 'RAY',
      logo: rayLogo,
      ticker: tickers?.['RAY']?.close,
      amount: rayBalance,
      price: tickers?.['RAY']?.close * rayBalance,
    },
    {
      name: 'Star Atlas',
      symbol: 'ATLAS',
      logo: atlasLogo,
      ticker: tickers?.['ATLAS']?.close,
      amount: atlasBalance,
      price: tickers?.['ATLAS']?.close * atlasBalance,
    },
  ];

  const renderCoin = ({ item }) => {
    let solTokenPublicKey;
    let mintAddress;

    solTokens.map((data) => {
      if (item.symbol === data.tokenSymbol) {
        solTokenPublicKey = data.publicKey;
        mintAddress = data.mint;
      }
    });

    const onPressItem = (symbol) => {
      // 해당 코인 디테일 페이지로 이동
      Actions.walletDetailScreen({
        coin: item,
        solTokenPublicKey,
        mintAddress,
      });
    };

    return (
      <Coin
        logo={item.logo}
        name={item.name}
        symbol={item.symbol}
        amount={item.amount}
        price={item.price}
        onPress={onPressItem}
      />
    );
  };



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
              $ {totalBalances !== 'NaN' ? localeString(totalBalances) : 0}
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
