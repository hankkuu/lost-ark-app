import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class Resultcreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Resultcreen</Text>
            </View>
        );
    }
}
export default Resultcreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});