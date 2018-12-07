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
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={this.props.onPress}
                    style={styles.item}
                >
                    <Text style={styles.img}>{this.props.item.subject}</Text>
                    <Text style={styles.txt}>{this.props.item.content}</Text>
                </TouchableOpacity>             
            </View>
        );
    }
    test = () => {
        console.log("dfsdf")
    }
}
export default AlarmItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //alignItems: 'center',
        //justifyContent: 'center'
        //alignSelf: 'stretch',
    },
    item: {
        width: '100%',
        flexDirection:'row',
        //paddingHorizontal:20, 
        borderBottomWidth:1, 
        borderColor:'#0002'
    },
    img : {
        alignSelf:'center', 
        //resizeMode:'cover',
        width:80, 
        height:50, 
        //borderRadius:25
    },
    txt: {
        alignSelf:'center', 
        marginLeft:10
    }
});