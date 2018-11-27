import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

class CoinDetail extends Component {
    render() {
        let date = new Date();
        let now = date.toLocaleString();
        //console.log(this.props.time);

        return (
            <View style={styles.container}>
                <Image
                    style={{ width: 50, height: 50, marginRight: 5, marginLeft: 5 }}
                    // source={{ uri: this.props.iconUri }}
                    source={require('./opengraph.png')}
                />
                <Text style={styles.rank}>{'#' + (this.props.rank || 'Rank')}</Text>
                <View style={{ flexDirection: 'column' }}>
                    <View>
                        <Text style={[styles.name]}>{this.props.name || 'Name'}</Text>
                        <Text style={[styles.volume]}>{'Volume: ' + (this.props.volume || 0)}</Text>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 10, marginBottom: 5, alignItems: 'center'}}>
                        <Text>$:</Text>
                        <Text style={[styles.price]}>{(this.props.price || 0)}</Text>                        
                    </View>
                </View>
                <Text style={[styles.text, { flex: 1 }]}>{'Updated ' + (Date(this.props.time) || now)}</Text>
            </View>
        );
    }
}
export default CoinDetail;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 80,
        flexDirection: 'row', // row
        backgroundColor: 'white',
        alignItems: 'center',
        //justifyContent: 'space-around', // center, space-around
        marginTop: 5,
        marginBottom: 5,
        borderBottomColor: '#bbb',
        borderBottomWidth: 1,
    },
    text: {
        color: 'black'
    },
    rank: {
        fontSize: 20,
        marginRight: 15,
    },
    name: {
        fontSize: 20,
        marginRight: 15,
    },
    price: {
        marginLeft: 5,
        fontSize: 17,
        fontWeight: 'bold',
        marginRight: 15,
    },
    volume: {
        marginTop: 3,
        fontSize: 13,
        color: '#a8a5a5',
        marginRight: 15,
    },
});