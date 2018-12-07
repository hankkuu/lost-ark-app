import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    WebView
} from "react-native";
import { WebBrowser } from 'expo';
import { statusBarHeight } from '@util/Styles';

class PcRoomScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: null
        }
        this.linkWebBowser();
    }
    linkWebBowser = async () => {
        let result = await WebBrowser.openBrowserAsync('http://m-lostark.game.onstove.com/Main');
        console.log(result);
        this.setState({
            result: result
        })
    }

    render() {
        return (
            // <WebView style={styles.container}
            //          source={{ uri: 'http://m-lostark.game.onstove.com/Main' }}
            // >
            //     {/* {this.state.result.type === cancle ? this.props.navigation.navigate(Home) : null} */}
            // </WebView>
            <View>
                <Button
                    title='test'
                    onPress={this.test}
                >
                </Button>
            </View>
        );
    }
    test = () => {
        console.log(this.props.navigation)
        this.props.navigation.navigate("Home");
    }
}
export default PcRoomScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});