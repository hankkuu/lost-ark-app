import React, { Component } from "react";
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
        alignSelf: 'center'
    },
    headerTintColor: 'red',
    
    title: "SETTINGS",
    headerLeft: () => {
        const { routeName } = navigation.state;
        return (
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => { navigation.navigate('Notice') }}
            >
                <View style={styles.leftWrap}>
                    <Text style={styles.txt}>알람</Text>
                    <Text style={styles.txtSub}>3</Text>
                </View>
            </TouchableOpacity>
        )
    },
    headerRight: 
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => navigation.navigate('Settings')}
            >
                <Text style={styles.txt}>계정</Text>
            </TouchableOpacity>,
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
    imgHeaderLeft: {
        marginLeft: 20,
        width: 28,
        height: 28,
        borderRadius: 14,
        borderColor: 'white',
        borderWidth: 1,
    },
    imgHeaderRight: {
        width: 24,
        height: 24,
        right: 12,
        tintColor: 'white',
        marginLeft: 20,
    },
});