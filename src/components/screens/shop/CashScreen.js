import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class CashScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>CashScreen</Text>
            </View>
        );
    }
}
export default CashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});