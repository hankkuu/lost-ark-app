import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from "react-native";

class AlarmItem extends Component {
    
    render() {
        return (
            <TouchableOpacity
                onPress={this.props.onPress}
                style={styles.item}
            >
                <View style={styles.container}>
                    <Text style={styles.img}>{this.props.item.subject}</Text>
                    <Text style={styles.txt}>{this.props.item.content}</Text>
                </View>
            </TouchableOpacity>    
        );
    }
    test = () => {
        console.log("test-test")
    }
}
export default AlarmItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'row',
        borderBottomWidth:1, 
        borderColor:'#0002',
        alignItems: 'center',
    },
    item: {
        width: '100%',
        height: 50,
        //flexDirection:'row',
        //paddingHorizontal:20, 
    },
    img : {
        //resizeMode:'cover',
        width:80, 
        marginLeft: 10,
        //borderRadius:25,
    },
    txt: {
        //alignSelf:'center', 
        marginLeft:10
    }
});