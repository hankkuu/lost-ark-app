import { createStackNavigator } from 'react-navigation';
import StackViewStyleInterpolator from 'react-navigation-stack/dist/views/StackView/StackViewStyleInterpolator';
import { BothHeaderNavigationOptions } from '@navigation/options/currencyAuction/BothHeaderNavigationOptions';
import CurrencyAuctionScreen from '@screen/currencyAuction/CurrencyAuctionScreen';

const routeConfig = {
    CurrencyAuction: { screen: CurrencyAuctionScreen }
    // 추가 화면은?? 
}

const navigatorConfig = {
    initialRouteName: 'CurrencyAuction',
    gesturesEnabled: true,
    navigationOptions: BothHeaderNavigationOptions,
    transitionConfig: () => ({ screenInterpolator: StackViewStyleInterpolator.forFade, }),
} 

const CurrencyAuctionStackNavigator = createStackNavigator(routeConfig, navigatorConfig)
export default CurrencyAuctionStackNavigator;