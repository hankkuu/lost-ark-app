// import Expo from 'expo';
// import App from './src/Main';

// // package.json 에서 main: App.js로 변경 
// Expo.registerRootComponent(App);

import { AppRegistry, YellowBox } from 'react-native'; // AppRegistry는 expo 없을 때 구동 방법
/**
 * React Native 0.54 warning message ignore.
 */
YellowBox.ignoreWarnings([
    'Warning: componentWillMount is deprecated',
    'Warning: componentWillReceiveProps is deprecated',,
    'Module RCTImageLoader',
  ]);

// 위 방식보다 아래 방식이 간단하다 package.json 을 건들지 않아도 된다 
import App from '@app/Main';
export default App;