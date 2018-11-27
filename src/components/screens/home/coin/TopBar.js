import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

class TopBar extends Component {
    render() {
        // console.log(this.props.refreshDate);
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 20 }}>{this.props.title} </Text>
                <Text style={{ fontSize: 20 }}>{this.props.refreshDate || ','}</Text>
            </View>
        );
    }
}
export default TopBar;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 40,
        flexDirection: 'row', // row
        backgroundColor: '#ff9192',
        alignItems: 'center',
        justifyContent: 'center', // center, space-around
    },
});