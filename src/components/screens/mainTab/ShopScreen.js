import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class ShopScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>ShopScreen</Text>
            </View>
        );
    }
}
export default ShopScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});