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

//import AuctionScreen from '@screen/mainTab/AuctionScreen';
//import ShopScreen from '@screen/mainTab/ShopScreen';

//import SettingStackNavigator from '@navigation/SettingStackNavigator';
import HomeStackNavigator from '@navigation/HomeStackNavigator';


const TabNavigator = createBottomTabNavigator({
    Home: { screen: HomeStackNavigator, }, 
    //Auction: { screen: AuctionScreen, },
    //Shop: { screen: ShopScreen },
    //SettingStack: { screen: SettingStackNavigator },
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
                    case 'Auction':
                        return <Text style={[styles.txt, { opacity: focused ? 1 : 0.5 }]}>{('경매장')}</Text>;
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
                backgroundColor: 'red'
            },
            labelStyle: {
                fontSize: 27,
                //justifyContent: 'center',
                //alignItems: 'center',
            },
            style: {
                height: 50,
                //justifyContent: 'center',
                backgroundColor: colors.darkBlue,
                //alignItems: 'center',
            },
            tabStyle: {
                justifyContent: 'center',
                alignItems: 'center',
            }
        }
    })
export default TabNavigator;

const styles = StyleSheet.create({
    txt: {
        color: 'white',
        fontSize: 15,
        marginBottom: 15,
        //justifyContent: 'center',
        //alignItems: 'center',
    },
    txtSub: {
        color: 'white',
        fontSize: 15,
        fontWeight: '700',
    },
})