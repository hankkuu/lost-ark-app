import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";

import { colors } from '@util/Colors';

import {
    RkStyleSheet,
    RkTheme,
} from 'react-native-ui-kitten';

export const BothHeaderNavigationOptions = ({ navigation }) => ({
    headerBackTitle: null,
    headerStyle: {
        backgroundColor: RkTheme.current.colors.screen.base,
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
    
    title: "홈",
    headerLeft: () => {
        const { routeName } = navigation.state;     // 알람 개수를 파라미터로 받아와야 할 듯
        return (
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => { navigation.navigate('OldHome') }}
            >
            <View style={styles.leftWrap}>
                <Text style={styles.txt}>과거 Home</Text>
            </View>
            </TouchableOpacity>
        )
    },
    // headerRight: 
    //         <TouchableOpacity
    //             activeOpacity={0.5}
    //             onPress={() => navigation.navigate('My')}
    //         >
    //             <Text style={styles.txt}>계정</Text>
    //         </TouchableOpacity>,
})


const styles = RkStyleSheet.create(theme => ({
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
}));