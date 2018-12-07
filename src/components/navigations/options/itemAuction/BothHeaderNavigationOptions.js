import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";

import { colors } from '@util/Colors';

export const BothHeaderNavigationOptions = ({ navigation }) => ({
    headerBackTitle: null,
    headerStyle: {
        backgroundColor: colors.blueyGray,
        borderBottomColor: 'red',
        borderBottomWidth: 1,
        elevation: 0,
        //
    },
    headerTitleStyle: {
        flex: 1,
        color: 'white',
        textAlign: 'center',   //
    },
    headerTintColor: 'red',

    title: "아이템경매",
    headerLeft:
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => { navigation.navigate('') }}
        >
            <Text style={{ color: 'white', fontSize: 15, }}>관심상품</Text>
        </TouchableOpacity>,
    headerRight:
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => navigation.navigate('')}
            >
                <Text style={{ color: 'white', fontSize: 15, }}>구매히스토리</Text>
            </TouchableOpacity>
        </View>,
})


const styles = StyleSheet.create({
    leftWrap: {
        flexDirection: 'row'
    },
    txt: {
        color: 'white',
        fontSize: 15,
        marginHorizontal: 10,
    },
    txtSub: {
        color: 'red',
        fontSize: 15,
        fontWeight: '700',
        marginLeft: -5,
    },
});