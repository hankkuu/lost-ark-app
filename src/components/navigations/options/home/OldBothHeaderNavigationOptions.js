import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";

import { colors } from '@util/Colors';

export const OldBothHeaderNavigationOptions = ({ navigation }) => ({
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
    
    title: "Home",
    headerLeft: () => {
        const { routeName } = navigation.state;     // 알람 개수를 파라미터로 받아와야 할 듯
        return (
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => { navigation.navigate('Alarm') }}
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
                onPress={() => navigation.navigate('My')}
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
});