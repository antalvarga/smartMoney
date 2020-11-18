/**
 * @format
 
if(__DEV__) {
    import('./config/ReactotronConfig');
    // import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
  }
*/

import {AppRegistry} from 'react-native';
import App from './App';

//import Main from './src/Pages/Main';
//import NewEntry from './src/Pages/NewEntry';
//import Report from './src/Pages/Report';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
//AppRegistry.registerComponent(appName, () => Main);
//AppRegistry.registerComponent(appName, () => Report);
