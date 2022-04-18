import React, { useEffect, useMemo, useState } from 'react';
import { SceneMap, TabView } from 'react-native-tab-view';
import {
  SafeAreaView,
  View,
  ViewAbsolute,
  ViewRow,
} from '../../../components/styled/View';
import TabViewBar from '../../../components/bar/TabViewBar';
import WalletCoinScreen from './WalletCoinScreen';
import WalletNftScreen from './WalletNftScreen';
import { Text } from '../../../components/styled/Text';
import Line from '../../../components/line/Line';
import { Image } from '../../../components/styled/Image';

import dollarIcon from '../../../assets/common/dollar.png';
import checkPressed from '../../../assets/common/iconOvalCheckPressed.png';
import { useDispatch } from 'react-redux';
import { localeString } from '../../../utils/functions';
import { format } from 'date-fns';
import { Button } from '../../../components/styled/Button';
import { tickers } from '../../../utils/dummy';
import { Actions } from 'react-native-router-flux';
import Coin from '../../../components/items/wallet/Coin';
import { useRecoilValue } from 'recoil';
import { CoinAmountAtom } from '../../../lib/atoms';

const WalletScreen = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
  ]);
  const [tabItems] = useState(['Token', 'Collection']);
  const Amount = useRecoilValue(CoinAmountAtom);
  console.log(Amount);

  // 탭뷰 스크린
  const renderScene = SceneMap({
    first: WalletCoinScreen,
    second: WalletNftScreen,
  });

  const aaveAmount = { data: { balance: 1 } };
  const orbsAmount = { data: { balance: 2 } };
  const solAmount = { data: { balance: 3 } };
  const rayAmount = { data: { balance: 4 } };
  const [rayBalance, setRayBalance] = useState(0);
  const [atlasBalance, setAtlasBalance] = useState(1);

  const dispatch = useDispatch();

  const solTokenList = [];

  // 총 보유 자산 계산

  const usdExchangeRate = 1;

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
              $ {Amount.toFixed(3)}
            </Text>
          </View>
          <View>
            <Text ftBlueGray>{format(new Date(), 'yyyy-MM-dd HH:mm')}</Text>
          </View>
        </View>
        <Line width={'100%'} height={3} />
        <View width={'90%'} height={50} marginTop={10} marginLeft={10}>
          <ViewRow justifyContent={'space-between'} alignItems={'center'}>
            <TabViewBar
              ftsize={'16'}
              index={index}
              tabItems={tabItems}
              setIndex={setIndex}
            />
            <View marginLeft={'10'} flexDirection={'row'} alignItems={'center'}>
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
