import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from "react-native";

class TagItem extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={this.props.onPress}
                >
                    <View style={{flexDirection: 'column'}}>
                        <Text style={styles.txt}>{this.props.name}</Text>
                    </View>                    
                </TouchableOpacity>                
            </View>
        );
    }
}
export default TagItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100
    },
    img: {
        width: "90%", 
        height: "70%", 
        marginRight: 20, 
        marginBottom: 10 
    },
    txt: {
        fontSize: 8,
    }
});