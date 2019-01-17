import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class TransactionHistoryScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>TransactionHistoryScreen</Text>
            </View>
        );
    }
}
export default TransactionHistoryScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});