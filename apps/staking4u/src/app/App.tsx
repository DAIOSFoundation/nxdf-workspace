import React, { useEffect, useState } from 'react';
// Redux Configure
import { Provider } from 'react-redux';
import configure from './store/configure';
// Internalization Config
import { initLocale } from './config/i18n';
// Global Screens
import ScreenRouter from './screens/global/ScreenRouter';
import ToastMessage from './screens/global/ToastMessage';
import GlobalModal from './screens/global/GlobalModal';
import Loading from './screens/global/Loading';
import AndroidBackHandle from './screens/global/AndroidBackHanlder';
// import { SafeAreaView } from './src/components/styled/View';
import Push from './screens/global/Push';
import SplashScreen from 'react-native-splash-screen';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot, useRecoilState, useSetRecoilState } from 'recoil';
import AsyncStorage from '@react-native-community/async-storage';
import { isLoggedin, tokenValue } from './lib/atoms';
import { Actions } from 'react-native-router-flux';
import TabBar from './components/tabBar/TabBar';
import { WalletData } from './utils/dummy';

const store = configure();

const queryClient = new QueryClient();
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
    initLocale();
  }, []);
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <ScreenRouter />
          <ToastMessage />
          <GlobalModal />
          <AndroidBackHandle />
          {/* <Push /> */}
        </RecoilRoot>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
