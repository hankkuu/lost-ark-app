import { createStackNavigator } from 'react-navigation';
import StackViewStyleInterpolator from 'react-navigation-stack/dist/views/StackView/StackViewStyleInterpolator';
import { BothHeaderNavigationOptions } from '@navigation/options/itemAuction/BothHeaderNavigationOptions';
import ItemAuctionScreen from '@screen/itemAuction/ItemAuctionScreen';

const routeConfig = {
    ItemAuction: { screen: ItemAuctionScreen }
    // 추가 화면은?? 
}

const navigatorConfig = {
    initialRouteName: 'ItemAuction',
    gesturesEnabled: true,
    navigationOptions: BothHeaderNavigationOptions,
    transitionConfig: () => ({ screenInterpolator: StackViewStyleInterpolator.forFade, }),
} 

const ItemAuctionStackNavigator = createStackNavigator(routeConfig, navigatorConfig)
export default ItemAuctionStackNavigator;