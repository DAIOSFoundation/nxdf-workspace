/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';

// import {Router, Stack, Scene, Actions} from 'react-native-router-flux';
import IndexScreen from './screens/index/IndexScreen';
import configure from './store/configure';
import {Provider} from 'react-redux';
const store = configure();

// Internalization Config
import {initLocale} from './config/i18n';
// Global Screens
import ScreenRouter from './screens/global/ScreenRouter';
import SplashScreen from 'react-native-splash-screen';

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
    </Provider>
  );
};

export default App;
