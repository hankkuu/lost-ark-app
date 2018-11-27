import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class ItemAuctionScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Test</Text>
            </View>
        );
    }
}
export default ItemAuctionScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});