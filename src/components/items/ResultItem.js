import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class ResultItem extends Component {
    render() {
        const { type, description } = this.props.item;
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }} >
                    <View style={{ width: '30%', alignItems: "center" }}>
                        <Text>{type}</Text>
                    </View>
                    <View style={{ width: '70%', alignItems: "center" }}>
                        <Text>{description}</Text>
                    </View>                
                </View>
            </View>
        )
    }
}
export default ResultItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //alignItems: 'center',
        //justifyContent: 'center'
        margin: 5,  
    }
});