import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from "react-native";

import { colors } from '@util/Colors';

class GoodsItem extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={this.props.onPress}
                >
                    <View style={styles.wrapper}>
                        <Image style={styles.img} source={this.props.item.img} ></Image>
                        <Text style={styles.txt}>{this.props.item.displayName}</Text>
                        {
                            this.props.item.tag ? <Text style={styles.txtRight}>{this.props.item.tag}</Text> : null
                        }
                        <Text style={styles.cost}>{this.props.item.cost}</Text>
                    </View>
                </TouchableOpacity>                
            </View>
        );
    }
}
export default GoodsItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    wrapper: {
        backgroundColor: 'white',
        height: 80,
        borderBottomWidth: 1,
        borderColor: 'rgb(247,248,251)',

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    img: {
        marginHorizontal: 20,
        width: 40,
        height: 40
    },
    txt: {
        width: 100,
        fontSize: 14,
        color: colors.dusk
    },
    cost:{
        paddingLeft: 100,
    },
    txtRight: {
        position: 'absolute',
        right: 20,
        fontSize: 12,
        color: colors.dusk,
        maxWidth: 134.2,
        borderWidth: 1,
        borderColor: colors.paleGray,
        paddingHorizontal: 8,
        paddingVertical: 4
    }
});