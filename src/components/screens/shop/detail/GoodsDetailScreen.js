import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class GoodsDetailScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>GoodsDetailScreen</Text>
            </View>
        );
    }
}
export default GoodsDetailScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});