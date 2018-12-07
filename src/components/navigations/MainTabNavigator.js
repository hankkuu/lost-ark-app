import React from 'react';
import { 
    Platform, 
    StyleSheet, 
    TouchableOpacity, 
    Text 
} from 'react-native';
import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation';
// 해당 네비게이터도 사용할 수 있다 
// 라이브러리 설명 : https://reactnavigation.org/docs/en/material-bottom-tab-navigator.html
//import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import { colors } from '@util/Colors';

import HomeStackNavigator from '@navigation/HomeStackNavigator';
import ItemAuctionStackNavigator from '@navigation/ItemAuctionStackNavigator';
import ItemAuctionScreen from '@screen/itemAuction/itemAuctionScreen';

import CurrencyAuctionStackNavigator from '@navigation/CurrencyAuctionStackNavigator';


import CurrencyAuctionScreen from '@screen/mainTab/CurrencyAuctionScreen';
import ShopScreen from '@screen/mainTab/ShopScreen';
import SettingsScreen from '@screen/mainTab/SettingsScreen';

//import SettingStackNavigator from '@navigation/SettingStackNavigator';



const TabNavigator = createBottomTabNavigator({
    Home: { screen: HomeStackNavigator, }, 
    ItemAuction: { screen: ItemAuctionStackNavigator, },
    //CurrencyAution: { screen: CurrencyAuctionStackNavigator },
    Shop: { screen: ShopScreen },
    SettingStack: { screen: SettingsScreen },
}, {
        navigationOptions: ({ navigation }) => ({
            //...MainTabNavigationOptions,
            //header: null,
            
            tabBarVisible: true,
            tabBarLabel: ({ focused }) => {
                const { routeName } = navigation.state;
                switch (routeName) {
                    case 'Home':
                        return <Text style={[styles.txt, { opacity: focused ? 1 : 0.5 }]}>{('My')}</Text>;
                    case 'ItemAuction':
                        return <Text style={[styles.txt, { opacity: focused ? 1 : 0.5 }]}>{('아이템경매')}</Text>;
                    case 'CurrencyAution':
                        return <Text style={[styles.txt, { opacity: focused ? 1 : 0.5 }]}>{('화폐경매')}</Text>;
                    case 'Shop':
                        return <Text style={[styles.txt, { opacity: focused ? 1 : 0.5 }]}>{('상점')}</Text>;
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
             indicatorStyle: {
                 backgroundColor: 'yellow'
            },   // TopTap에서 사용
            labelStyle: {
                
            },
            style: {
                height: 50,
                backgroundColor: colors.darkBlue,                
            },
            tabStyle: {
                alignItems: 'center',
            }
        }
    })
export default TabNavigator;

const styles = StyleSheet.create({
    txt: {
        color: 'white',
        fontSize: 15,
        paddingVertical: 15
        //justifyContent: 'center',
        //alignItems: 'center',
    },
})