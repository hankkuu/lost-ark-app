import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";

class SettingItem extends Component {
    constructor(props){
        super(props);        
        //console.log(props);
    }
    render() {
        const { img, content } = this.props.item;
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={this.props.onPress}
                    style={{ flexDirection: 'row', padding: 20}}
                >
                    <Text style={{ fontSize: 20 }}>{img}</Text>
                    <Text style={{ marginLeft: 30, marginTop: 5}}>{content}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
export default SettingItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,       
    }
});