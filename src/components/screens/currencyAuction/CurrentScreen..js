import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class CurrentScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>CurrentScreen</Text>
            </View>
        );
    }
}
export default CurrentScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});