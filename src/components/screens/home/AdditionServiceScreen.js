import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class AdditionServiceScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>부가서비스를 할거다</Text>
            </View>
        );
    }
}
export default AdditionServiceScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});