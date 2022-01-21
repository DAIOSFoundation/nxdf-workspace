import { AppRegistry } from 'react-native';
import App from './app/App';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

AppRegistry.registerComponent('main', () => gestureHandlerRootHOC(App));
