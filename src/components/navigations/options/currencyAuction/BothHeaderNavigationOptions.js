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

    title: "화폐경매",
    headerLeft:
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => { navigation.navigate('') }}
        >
            <Text style={styles.txt}>관심상품</Text>
        </TouchableOpacity>,
    headerRight:
        <View>
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => navigation.navigate('')}
            >
                <Text style={styles.txt}>경매내역</Text>
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