import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import StackViewStyleInterpolator from 'react-navigation-stack/dist/views/StackView/StackViewStyleInterpolator';
import { BothHeaderNavigationOptions } from '@navigation/options/currencyAuction/BothHeaderNavigationOptions';

import { collapsibleOptionsForTab, collapsibleTabConfig } from 'react-navigation-collapsible';

import CurrencyAuctionScreen from '@screen/currencyAuction/CurrencyAuctionScreen';
import ChargePointScreen from '@screen/currencyAuction/ChargePointScreen';
import TransactionHistoryScreen from '@screen/currencyAuction/TransactionHistoryScreen';
import SellScreen from '@screen/currencyAuction/SellScreen';
import BuyScreen from '@screen/currencyAuction/BuyScreen';
import CurrentScreen from '@screen/currencyAuction/CurrentScreen';

import ProgressScreen from '@screen/currencyAuction/ProgressScreen';
import Resultcreen from '@screen/currencyAuction/Resultcreen';

const TapCurrencyNavigator = createMaterialTopTabNavigator({
    //CurrencyAuction: { screen: CurrencyAuctionScreen },
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

const TapHistoryNavigator = createMaterialTopTabNavigator({
    Progress: { screen: ProgressScreen },
    Result: { screen: Resultcreen },    
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
    //CurrencyAuction: { screen: CurrencyAuctionScreen },
    // 추가 화면은?? 

    TapCurrency: { screen: TapCurrencyNavigator, navigationOptions: props => collapsibleOptionsForTab(props, { title: '화폐 거래소' }) },

    ChargePoint: { screen: ChargePointScreen },
    TransactionHistory: { screen: TapHistoryNavigator, navigationOptions: props => collapsibleOptionsForTab(props, { title: '거래내역' })  }
}

const navigatorConfig = {
    initialRouteName: 'TapCurrency',
    gesturesEnabled: true,
    navigationOptions: BothHeaderNavigationOptions,
    transitionConfig: () => ({ screenInterpolator: StackViewStyleInterpolator.forFade, }),
} 

const CurrencyAuctionStackNavigator = createStackNavigator(routeConfig, navigatorConfig)
export default CurrencyAuctionStackNavigator;