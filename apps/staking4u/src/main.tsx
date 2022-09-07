import 'react-native-get-random-values';
import 'react-native-url-polyfill/auto';
import 'text-encoding';
import 'text-encoding-polyfill';
import { AppRegistry, LogBox } from 'react-native';
import App from './app/App';
import { name as appName } from './app.json';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

// 콘솔 Warning 설정
LogBox.ignoreAllLogs(); //Ignore all log notifications

AppRegistry.registerComponent('main', () => gestureHandlerRootHOC(App));
