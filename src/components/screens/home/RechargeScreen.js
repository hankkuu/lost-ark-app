import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    StatusBar
} from "react-native";
import CoinView from './coin/ConinView';
import TopBar from './coin/TopBar';

class RechargeScreen extends Component {
    constructor(props){
        super(props);
        this.state ={
            refreshDate: '-'
        }
    }

    setRefreshDate(date) {
        this.setState({
            refreshDate: date,
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar 
                    hidden={false}
                    backgroundColor='red'
                    barStyle='light-content'
                /> 
                <TopBar 
                    title='코인 시세'
                    refreshDate={this.state.refreshDate}
                />
                <CoinView 
                    style={styles.coniView}
                    refreshDate={(date) => this.setRefreshDate(date)}
                />
            </View>
        );
    }
}
export default RechargeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    coniView: {
        flex: 1,
        width: '100%',
        flexDirection: 'column',
        backgroundColor: 'white'
    }
});