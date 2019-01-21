import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class TransactionItem extends Component {
    render() {
        const { type, gold, crystal, cost, remainTime } = this.props.item;
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }} >
                    <View style={{ width: '13%', alignItems: "center" }}>
                        <Text>{type}</Text>
                    </View>
                    <View style={{ width: '32%', alignItems: "center" }}>
                        <Text>{gold}</Text>
                    </View>
                    <View style={{ width: '20%', alignItems: "center" }}>
                        <Text>{crystal}</Text>
                    </View>
                    <View style={{ width: '10%', alignItems: "center" }}>
                        <Text>{cost}</Text>
                    </View>
                    <View style={{ width: '25%', alignItems: "center" }}>
                        <Text>{remainTime}</Text>
                    </View>
                </View>
            </View>
   
        );
    }
}
export default TransactionItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //alignItems: 'center',
        //justifyContent: 'center'
        margin: 5,  
    }
});