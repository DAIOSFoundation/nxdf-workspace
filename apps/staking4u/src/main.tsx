import { AppRegistry, LogBox } from 'react-native';
import App from './app/App';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

// 콘솔 Warning 설정
LogBox.ignoreAllLogs(); //Ignore all log notifications

AppRegistry.registerComponent('main', () => gestureHandlerRootHOC(App));
