import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";

import { colors } from '@util/Colors';

class UserListItem extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={this.props.onPress}
                    onLongPress={this.props.onLongPress}
                >
                    <View style={styles.wrapper}>
                        <Text style={styles.img}>{this.props.item.img}</Text>
                        <Text style={styles.txt}>{this.props.item.displayName}</Text>
                        {
                            this.props.item.statusMsg ? <Text style={styles.txtRight}>{this.props.item.statusMsg}</Text> : null
                        }
                    </View>
                </TouchableOpacity>                
            </View>
        );
    }
}
export default UserListItem;

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