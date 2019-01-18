import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class CurrencyItem extends Component {
    constructor(props){
        super(props);

    }
    render() {
        const { crystal, gold } = this.props.item;
        return (
            <View style={styles.container}>
                <View style={{flexDirection: 'row', justifyContent: 'space-around'}} >
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{paddingHorizontal: 10}}>C</Text>
                        <Text>{crystal}</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{paddingHorizontal: 10}}>G</Text>
                        <Text>{gold}</Text>
                    </View>                
                </View>
            </View>
        );
    }
}
export default CurrencyItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,      
        margin: 5,  
        borderColor: 'black',
        borderWidth: 1
    }
});