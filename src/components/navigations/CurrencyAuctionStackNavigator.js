import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import StackViewStyleInterpolator from 'react-navigation-stack/dist/views/StackView/StackViewStyleInterpolator';
import { BothHeaderNavigationOptions } from '@navigation/options/currencyAuction/BothHeaderNavigationOptions';

import { collapsibleOptionsForTab, collapsibleTabConfig } from 'react-navigation-collapsible';

import CurrencyAuctionScreen from '@screen/currencyAuction/CurrencyAuctionScreen';
import ChargePointScreen from '@screen/currencyAuction/ChargePointScreen';
import TransactionHistoryScreen from '@screen/currencyAuction/TransactionHistoryScreen';
import SellScreen from '@screen/currencyAuction/TransactionHistoryScreen';
import BuyScreen from '@screen/currencyAuction/TransactionHistoryScreen';
import CurrentScreen from '@screen/currencyAuction/TransactionHistoryScreen';

const TopCurrencyNavigator = createMaterialTopTabNavigator({
    CurrencyAuction: { screen: CurrencyAuctionScreen },
    Sell: { screen: SellScreen },
    Buy: { screen: BuyScreen },
    Current: { screen: CurrentScreen },
},
    collapsibleTabConfig({
        animationEnabled: true,
        navigationOptions: {
            tabBarOptions: {
                indicatorStyle: { backgroundColor: 'white' },
                style: { borderTopColor: 'transparent', borderTopWidth: 0, elevation: 0, backgroundColor: '#061' },
            }
        }
    })
)


const routeConfig = {
    CurrencyAuction: { screen: CurrencyAuctionScreen },
    // 추가 화면은?? 

    TopCurrency: { screen: TopCurrencyNavigator, navigationOptions: props => collapsibleOptionsForTab(props, { title: 'Test' }) },

    ChargePoint: { screen: ChargePointScreen },
    TransactionHistory: { screen: TransactionHistoryScreen }
}

const navigatorConfig = {
    initialRouteName: 'TopCurrency',
    gesturesEnabled: true,
    navigationOptions: BothHeaderNavigationOptions,
    transitionConfig: () => ({ screenInterpolator: StackViewStyleInterpolator.forFade, }),
} 

const CurrencyAuctionStackNavigator = createStackNavigator(routeConfig, navigatorConfig)
export default CurrencyAuctionStackNavigator;