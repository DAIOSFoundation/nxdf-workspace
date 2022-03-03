import React, { useCallback } from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';

// import IndexScreen from '../index/IndexScreen';
// import ServiceAgreementScreen from '../register/ServiceAgreementScreen';
// import MnemonicGuideScreen from '../register/MnemonicGuideScreen';
// import MnemonicGenerationScreen from '../register/MnemonicGenerationScreen';
// import MnemonicConfirmationScreen from '../register/MnemonicConfirmationScreen';
// import EmailVerificationScreen from '../register/EmailVerificationScreen';
// import EmailSendingSuccessScreen from '../register/EmailSendingSuccessScreen';
// import RegisterSuccessScreen from '../register/RegisterSuccessScreen';
// import MnemonicInputScreen from '../login/MnemonicInputScreen';

import MainScreen from '../home/main/MainScreen';
import FlexibleDetailScreen from '../home/main/Flexible/FlexibleDetailScreen';
import FlexibleInputScreen from '../home/main/Flexible/FlexibleInputScreen';
import StakingCompleteScreen from '../home/main/StakingCompleteScreen';
// import ProductDetailScreen from '../home/main/ProductDetailScreen';
// import ProductOperationHistory from '../home/main/ProductOperationHistory';
// import FixedStakingScreen from '../home/main/FixedStakingScreen';
// import AutonomousDetailScreen from '../home/main/AutonomousDetailScreen';

import WalletScreen from '../home/wallet/WalletScreen';
import SwapScreen from '../home/swap/SwapScreen';
import WalletDetailScreen from '../home/wallet/WalletDetailScreen';
import ReceiveScreen from '../home/wallet/receive/ReceiveScreen';
import SendAddressScreen from '../home/wallet/send/SendAddressScreen';
// import EthSendAmountScreen from '../home/wallet/send/EthSendAmountScreen';
//import QRCodeScannerScreen from '../qr/QRCodeScannerScreen';
import SendRequestSuccessScreen from '../home/wallet/send/SendRequestSuccessScreen';
import SendRequestFailedScreen from '../home/wallet/send/SendRequestFailedScreen';

import InvestmentScreen from '../home/investment/InvestmentScreen';
import InvestmentInfoScreen from '../home/investment/InvestmentInfoScreen';
import InvestmentHistoryScreen from '../home/investment/InvestmentHistoryScreen';
import FlexibleDetailInfoScreen from '../home/investment/FlexibleDetailInfoScreen';
import InvestmentHistoryDetailScreen from '../home/investment/InvestmentHistoryDetailScreen';

import MyInfoScreen from '../home/myinfo/MyInfoScreen';

import TabWrapperBar from '../../components/bar/TabWrapperBar';
import { Image } from '../../components/styled/Image';

import iconHomeNormal from '../../assets/tabBar/icon_home_normal.png';
import iconHomePressed from '../../assets/tabBar/icon_home_pressed.png';
import iconWalletNormal from '../../assets/tabBar/icon_wallet_normal.png';
import iconWalletPressed from '../../assets/tabBar/icon_wallet_pressed.png';
import iconInvestmentNormal from '../../assets/tabBar/icon_investment_normal.png';
import iconInvestmentPressed from '../../assets/tabBar/icon_investment_pressed.png';
import iconMyInfoNormal from '../../assets/tabBar/icon_my_info_normal.png';
import iconMyInfoPressed from '../../assets/tabBar/icon_my_info_pressed.png';
import iconCoinInfo from '../../assets/tabBar/icon-coin-info_noraml.png';

import { colors } from '../../components/styled/Common';
import UnstakingCompleteScreen from '../home/investment/UnstakingCompleteScreen';
import HarvestCompleteScreen from '../home/investment/HarvestCompleteScreen';
import SolSendAmountScreen from '../home/wallet/send/SolSendAmountScreen';
import LiquidityDetailScreen from '../home/main/Liquidity/LiquidityDetailScreen';
import SwapDetailScreen from '../home/swap/SwapDetailScreen';
// import TermsOfServiceScreen from './TermsOfServiceScreen';
// import PrivacyScreen from './PrivacyScreen';

// 라우터
const ScreenRouter = (props) => {
  // 탭 바 아이콘 설정
  const tabBarIcon = ({ title, focused }) => {
    const iconSize = 25;
    const tabBarIconGenerator = useCallback(
      (pressedImg, normalImg) => (
        <TabWrapperBar focused={focused}>
          <Image
            width={iconSize}
            height={iconSize}
            resizeMode={'contain'}
            source={focused ? pressedImg : normalImg}
          />
        </TabWrapperBar>
      ),
      [title, focused]
    );

    switch (title) {
      case 'main':
        return tabBarIconGenerator(iconHomePressed, iconHomeNormal);
      case 'wallet':
        return tabBarIconGenerator(iconWalletPressed, iconWalletNormal);
      case 'investment':
        return tabBarIconGenerator(iconInvestmentPressed, iconInvestmentNormal);
      case 'myInfo':
        return tabBarIconGenerator(iconMyInfoPressed, iconMyInfoNormal);
      case 'Swap':
        return tabBarIconGenerator(iconCoinInfo, iconCoinInfo);
    }
  };

  return (
    <Router>
      <Stack hideNavBar key="root">
        <Scene
          key={'tabBar'}
          tabs
          showLabel={false}
          tabBarStyle={{
            height: 80,
            borderTopWidth: 0,
            backgroundColor: colors.NavyTheme,
          }}
        >
          {/* 메인 */}
          <Scene
            hideNavBar
            key={'Main'}
            title={'main'}
            icon={tabBarIcon}
            initial
          >
            <Scene key="mainScreen" component={MainScreen} />
            {/* 시세창 이동 */}
            <Scene
              hideNavBar
              hideTabBar
              key="flexibleDetailScreen"
              component={FlexibleDetailScreen}
            />
            <Scene
              hideNavBar
              hideTabBar
              key="flexibleInputScreen"
              component={FlexibleInputScreen}
            />
            {/* 유동성풀 이동 */}
             <Scene
              hideNavBar
              hideTabBar
              key="LiquidityDetailScreen"
              component={LiquidityDetailScreen}
            />
            <Scene
              hideNavBar
              hideTabBar
              key="stakingCompleteScreen"
              component={StakingCompleteScreen}
            />
          </Scene>
          {/* 지갑 */}
          <Scene hideNavBar key={'Wallet'} title={'wallet'} icon={tabBarIcon}>
            <Scene key="walletScreen" component={WalletScreen} />
            <Scene
              hideTabBar
              key="walletDetailScreen"
              component={WalletDetailScreen}
            />
            <Scene key={'receiveScreen'} component={ReceiveScreen} hideTabBar />
            <Scene
              key={'sendAddressScreen'}
              component={SendAddressScreen}
              hideTabBar
            />
            {/* <Scene
              key={'ethSendAmountScreen'}
              component={EthSendAmountScreen}
              hideTabBar
            /> */}
            <Scene
              key={'solSendAmountScreen'}
              component={SolSendAmountScreen}
              hideTabBar
            />
          </Scene>
          {/* 투자내역 */}
          <Scene
            hideNavBar
            key={'Investment'}
            title={'investment'}
            icon={tabBarIcon}
          >
            <Scene key="investmentScreen" component={InvestmentScreen} />
            <Scene
              key="investmentInfoScreen"
              component={InvestmentInfoScreen}
            />
            <Scene
              key="investmentHistoryScreen"
              component={InvestmentHistoryScreen}
            />
            <Scene
              hideTabBar
              key="flexibleDetailInfoScreen"
              component={FlexibleDetailInfoScreen}
            />
            <Scene
              hideTabBar
              key="unstakingCompleteScreen"
              component={UnstakingCompleteScreen}
            />
            <Scene
              hideTabBar
              key="harvestCompleteScreen"
              component={HarvestCompleteScreen}
            />
            <Scene
              hideTabBar
              key="investmentHistoryDetailScreen"
              component={InvestmentHistoryDetailScreen}
            />
          </Scene>
          {/* swap */}
           <Scene hideNavBar key={'Swap'} title={'Swap'} icon={tabBarIcon}>
            <Scene hideNavBar key="SwapScreen" component={SwapScreen} />
              <Scene
              hideNavBar
              hideTabBar
              key="swapDetailScreen"
              component={SwapDetailScreen}
            />
          </Scene>
          {/* 나의 정보 */}
          <Scene hideNavBar key={'MyInfo'} title={'myInfo'} icon={tabBarIcon}>
            <Scene hideNavBar key="myInfoScreen" component={MyInfoScreen} />
          </Scene>
        </Scene>

        {/* <Scene
          key={'qRCodeScannerScreen'}
          hideNavBar
          component={QRCodeScannerScreen}
        /> */}
        <Scene
          key={'sendRequestSuccessScreen'}
          hideTabBar
          component={SendRequestSuccessScreen}
        />
        <Scene
          key={'sendRequestFailedScreen'}
          hideTabBar
          component={SendRequestFailedScreen}
        />
        {/* <Scene key={'termsOfServiceScreen'} component={TermsOfServiceScreen} /> */}
        {/* <Scene key={'privacyScreen'} component={PrivacyScreen} /> */}
      </Stack>
    </Router>
  );
};

export default ScreenRouter;
