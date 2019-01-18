import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class CurrencyHistoryItem extends Component {
    render() {
        const { crystal, gold, bidGold } = this.props.item;
        return (
            <View style={styles.container}>
                <View style={{flexDirection: 'row', justifyContent: 'space-around'}} >
                    <View style={{flexDirection: 'row'}}>
                        <Text>{bidGold}</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text>{gold}</Text>
                    </View>     
                    <View style={{flexDirection: 'row'}}>
                        <Text>{crystal}</Text>
                    </View>             
                </View>
            </View>
        );
    }
}
export default CurrencyHistoryItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //alignItems: 'center',
        //justifyContent: 'center'
        margin: 5,  
        borderColor: 'black',
        borderWidth: 1
    }
});