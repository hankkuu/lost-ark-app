import React from 'react';
import { 
    Platform, 
    StyleSheet, 
    Text 
} from 'react-native';
import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation';
// 해당 네비게이터도 사용할 수 있다 
// 라이브러리 설명 : https://reactnavigation.org/docs/en/material-bottom-tab-navigator.html
//import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import { colors } from '@util/Colors';

import HomeStackNavigator from '@navigation/HomeStackNavigator';
import MenuStackNavigator from '@navigation/MenuStackNavigator';
//import MenuScreen from '@screen/menu/MenuScreen'

import ItemAuctionStackNavigator from '@navigation/ItemAuctionStackNavigator';
import CurrencyAuctionStackNavigator from '@navigation/CurrencyAuctionStackNavigator';
import SettingStackNavigator from '@navigation/SettingStackNavigator';

import ShopScreen from '@screen/shop/ShopScreen';
import WebViewScreen from '@screen/home/WebViewScreen';

import {
    RkStyleSheet,
    RkTheme,
} from 'react-native-ui-kitten';

const TabNavigator = createBottomTabNavigator({
    Home: { screen: HomeStackNavigator, }, 

    // 기본적으로 내부의 내부의 화면을 들어가려면 StackNavigator를 써야 한다 
    Menu: { screen: MenuStackNavigator },

    //ItemAuction: { screen: ItemAuctionStackNavigator, },
    //CurrencyAution: { screen: CurrencyAuctionStackNavigator },
    //Shop: { screen: ShopScreen },

    WebView: { screen: WebViewScreen, },
    SettingStack: { screen: SettingStackNavigator },
}, {
        navigationOptions: ({ navigation }) => ({
            //...MainTabNavigationOptions,
            //header: null,
            
            tabBarVisible: true,
            tabBarLabel: ({ focused }) => {
                const { routeName } = navigation.state;
                switch (routeName) {
                    case 'Home':
                        return <Text style={[styles.txt, { opacity: focused ? 1 : 0.5 }]}>{('홈')}</Text>;
                    case 'Menu':
                        return <Text style={[styles.txt, { opacity: focused ? 1 : 0.5 }]}>{('Grid')}</Text>;
                    case 'WebView':
                        return <Text style={[styles.txt, { opacity: focused ? 1 : 0.5 }]}>{('웹뷰')}</Text>;   
                    case 'SettingStack':
                        return <Text style={[styles.txt, { opacity: focused ? 1 : 0.5 }]}>{('설정')}</Text>;
                    default:
                        return null;
                }
            }
        }),
        animationEnabled: true,
        swipeEnabled: Platform.select({ android: true, ios: false }),
        tabBarOptions: {
            //  indicatorStyle: {
            //      backgroundColor: 'yellow'
            // },   // TopTap에서 사용
            labelStyle: {
                
            },
            style: {
                height: 50,
                backgroundColor: RkTheme.current.colors.screen.base,           
                borderTopColor: 'gray',
                borderTopWidth: 1,
                elevation: 0
            },
            tabStyle: {
                alignItems: 'center',
            }
        }
    })
export default TabNavigator;

const styles = RkStyleSheet.create(theme => ({
    txt: {
        color: 'black',
        fontSize: 15,
        paddingVertical: 15
        //justifyContent: 'center',
        //alignItems: 'center',
    },
}))