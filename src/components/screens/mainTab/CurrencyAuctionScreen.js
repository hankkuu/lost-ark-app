import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class CurrencyAutionScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>CurrencyAutionScreen</Text>
            </View>
        );
    }
}
export default CurrencyAutionScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});