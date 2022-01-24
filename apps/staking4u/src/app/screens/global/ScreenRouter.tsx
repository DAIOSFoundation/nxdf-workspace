import React, {useCallback, useEffect, useState} from 'react';
import {Router, Stack, Scene, Actions} from 'react-native-router-flux';

import IndexScreen from '../index/IndexScreen';
// import ServiceAgreementScreen from '../register/ServiceAgreementScreen';
// import MnemonicGuideScreen from '../register/MnemonicGuideScreen';
// import MnemonicGenerationScreen from '../register/MnemonicGenerationScreen';
// import MnemonicConfirmationScreen from '../register/MnemonicConfirmationScreen';
// import EmailVerificationScreen from '../register/EmailVerificationScreen';
// import EmailSendingSuccessScreen from '../register/EmailSendingSuccessScreen';
// import RegisterSuccessScreen from '../register/RegisterSuccessScreen';
import MnemonicInputScreen from '../login/MnemonicInputScreen';

// import MainScreen from '../home/main/MainScreen';
// import FlexibleDetailScreen from '../home/main/FlexibleDetailScreen';
// import FlexibleInputScreen from '../home/main/FlexibleInputScreen';
// import StakingCompleteScreen from '../home/main/StakingCompleteScreen';
// import ProductDetailScreen from '../home/main/ProductDetailScreen';
// import ProductOperationHistory from '../home/main/ProductOperationHistory';
// import FixedStakingScreen from '../home/main/FixedStakingScreen';
// import AutonomousDetailScreen from '../home/main/AutonomousDetailScreen';

// import WalletScreen from '../home/wallet/WalletScreen';
// import WalletDetailScreen from '../home/wallet/WalletDetailScreen';
// import ReceiveScreen from '../home/wallet/receive/ReceiveScreen';
// import SendAddressScreen from '../home/wallet/send/SendAddressScreen';
// import EthSendAmountScreen from '../home/wallet/send/EthSendAmountScreen';
// import QRCodeScannerScreen from '../qr/QRCodeScannerScreen';
// import SendRequestSuccessScreen from '../home/wallet/send/SendRequestSuccessScreen';
// import SendRequestFailedScreen from '../home/wallet/send/SendRequestFailedScreen';

// import InvestmentScreen from '../home/investment/InvestmentScreen';
// import InvestmentInfoScreen from '../home/investment/InvestmentInfoScreen';
// import InvestmentHistoryScreen from '../home/investment/InvestmentHistoryScreen';
// import FlexibleDetailInfoScreen from '../home/investment/FlexibleDetailInfoScreen';
// import InvestmentHistoryDetailScreen from '../home/investment/InvestmentHistoryDetailScreen';

// import MyInfoScreen from '../home/myinfo/MyInfoScreen';

import TabWrapperBar from '../../components/bar/TabWrapperBar';
import {Image} from '../../components/styled/Image';

// import iconHomeNormal from '../../assets/tabBar/icon_home_normal.png';
// import iconHomePressed from '../../assets/tabBar/icon_home_pressed.png';
// import iconWalletNormal from '../../assets/tabBar/icon_wallet_normal.png';
// import iconWalletPressed from '../../assets/tabBar/icon_wallet_pressed.png';
// import iconInvestmentNormal from '../../assets/tabBar/icon_investment_normal.png';
// import iconInvestmentPressed from '../../assets/tabBar/icon_investment_pressed.png';
// import iconMyInfoNormal from '../../assets/tabBar/icon_my_info_normal.png';
// import iconMyInfoPressed from '../../assets/tabBar/icon_my_info_pressed.png';

import {colors} from '../../components/styled/Common';
import {getData} from '../../utils/functions';
// import UnstakingCompleteScreen from '../home/investment/UnstakingCompleteScreen copy';
// import HarvestCompleteScreen from '../home/investment/HarvestCompleteScreen';
// import SolSendAmountScreen from '../home/wallet/send/SolSendAmountScreen';
// import TermsOfServiceScreen from './TermsOfServiceScreen';
// import PrivacyScreen from './PrivacyScreen';

// 라우터
const ScreenRouter = (props) => {
  const [jwt, setJWT] = useState(false);

  useEffect(() => {
    async function getStorage() {
      if (await getData('jwt')) {
        setJWT(true);
      } else if ((await getData('isValidAuth')) === 'false') {
        Actions.GenerateMnemonic();
        Actions.emailSendingSuccessScreen();
      } else if ((await getData('isValidAuth')) === 'true') {
        Actions.GenerateMnemonic();
        Actions.registerSuccessScreen();
      }
    }

    getStorage();
  }, []);

  // 탭 바 아이콘 설정
  const tabBarIcon = ({title, focused}) => {
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
      [title, focused],
    );

    // switch (title) {
    //   case 'main':
    //     return tabBarIconGenerator(iconHomePressed, iconHomeNormal);
    //   case 'wallet':
    //     return tabBarIconGenerator(iconWalletPressed, iconWalletNormal);
    //   case 'investment':
    //     return tabBarIconGenerator(iconInvestmentPressed, iconInvestmentNormal);
    //   case 'myInfo':
    //     return tabBarIconGenerator(iconMyInfoPressed, iconMyInfoNormal);
    // }
  };

  return (
    <Router>
      <Stack hideNavBar key="root">

        <Scene key={'Index'}>
          <Scene
            key="indexScreen"
            component={IndexScreen}
            hideTabBar
            hideNavBar
          />
        </Scene>

        <Scene key={'GetMnemonic'}>
          <Scene
            key="mnemonicInputScreen"
            component={MnemonicInputScreen}
            hideTabBar
            hideNavBar
          />
        </Scene>

      </Stack>
    </Router>
  );
};

export default ScreenRouter;