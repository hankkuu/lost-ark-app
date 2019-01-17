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
        backgroundColor: '#ffffff',
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        elevation: 0,
        //
    },
    headerTitleStyle: {
        flex: 1,
        color: 'black',
        textAlign: 'center',   //
    },
    headerTintColor: 'red',

    title: "화폐 거래소",
    headerLeft:
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => { navigation.navigate('ChargePoint') }}
        >
            <Text style={styles.txt}>충전</Text>
        </TouchableOpacity>,
    headerRight:
        <View>
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => navigation.navigate('TransactionHistory')}
            >
                <Text style={styles.txt}>거래내역</Text>
            </TouchableOpacity>
        </View>,
})


const styles = StyleSheet.create({
    leftWrap: {
        flexDirection: 'row'
    },
    txt: {
        color: 'black',
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