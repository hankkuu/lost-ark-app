import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class PurchaseHistoryScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>PurchaseHistoryScreen</Text>
            </View>
        );
    }
}
export default PurchaseHistoryScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});