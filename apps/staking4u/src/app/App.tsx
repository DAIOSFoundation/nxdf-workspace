import React, { useEffect } from 'react';
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
import AndroidBackHandle from './screens/global/AndroidBackHanlde';
// import { SafeAreaView } from './src/components/styled/View';
import Push from './screens/global/Push';
import SplashScreen from 'react-native-splash-screen';

//import { SafeAreaView, StyleSheet, ScrollView, StatusBar } from 'react-native';

// import {Router, Stack, Scene, Actions} from 'react-native-router-flux';
//import IndexScreen from './screens/index/IndexScreen';

const store = configure();

const App = () => {
  // const [whatsNextYCoord, setWhatsNextYCoord] = useState<number>(0);
  // const scrollViewRef = useRef<null | ScrollView>(null);

  useEffect(() => {
    SplashScreen.hide();
    initLocale();
  }, []);

  return (
    <Provider store={store}>
      <ScreenRouter />
      <ToastMessage />
      <GlobalModal />
      <AndroidBackHandle />
      {/* <Push /> */}
      <Loading />
    </Provider>
  );
};

export default App;
