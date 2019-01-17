import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class BuyScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>BuyScreen</Text>
            </View>
        );
    }
}
export default BuyScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});