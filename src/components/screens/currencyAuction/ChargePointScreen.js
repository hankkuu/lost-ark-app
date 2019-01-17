import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class ChargePointScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>ChargePointScreen</Text>
            </View>
        );
    }
}
export default ChargePointScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});