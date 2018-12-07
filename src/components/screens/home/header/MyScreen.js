import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class MyScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>MyScreen</Text>
            </View>
        );
    }
}
export default MyScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});