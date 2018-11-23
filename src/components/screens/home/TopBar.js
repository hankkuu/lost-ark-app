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
                <Text>Left</Text>
                <View>
                    <Text style={{ fontSize: 20 }}>{this.props.title} </Text>
                    <Text style={{ fontSize: 10 }}>{this.props.refreshDate || ','}</Text>
                </View>
                <Text>Right</Text>
            </View>
        );
    }
}
export default TopBar;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 80,
        flexDirection: 'row', // row
        backgroundColor: '#ff9192',
        alignItems: 'center',
        justifyContent: 'space-between', // center, space-around
    },
    btn: {

    }
});