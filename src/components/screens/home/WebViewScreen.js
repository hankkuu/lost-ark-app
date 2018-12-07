import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    Modal,
    WebView,
    TouchableOpacity,
    Platform
} from "react-native";

const WEBVIEW_REF = React.createRef();

class WebViewScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: true,
            goBackVisible: false,
        }
    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    closeModal = () => {
        //this.setModalVisible(false);
        this.props.navigation.goBack();
    }

    render() {
        return (
            <View style={styles.container}>
                <Modal
                    anmationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={this.onBack}
                >
                    <WebView style={styles.container}
                        ref={WEBVIEW_REF}
                        onNavigationStateChange={this.onNavigationStateChange}
                        source={{ uri: 'http://m-lostark.game.onstove.com/Main' }}
                    >
                    </WebView>
                    {Platform.select({
                        ios:
                            < View style={styles.topbar} >
                                <TouchableOpacity
                                    disabled={!this.state.goBackVisible}
                                    onPress={this.onBack}
                                >
                                    <Text style={this.state.goBackVisible ? styles.topbarText : styles.topbarTextDisabled}>Go Back</Text>
                                </TouchableOpacity>
                            </View>
                    })}
                </Modal>
            </View>
        );
    }
    onNavigationStateChange = (navState) => {
        this.setState({
            goBackVisible: navState.canGoBack
        })
    }
    onBack = () => {
        const { goBackVisible } = this.state;
        if (goBackVisible) {
            WEBVIEW_REF.current.goBack();
        } else {
            this.props.navigation.goBack();
        }
    }
}
export default WebViewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        //marginTop: 22,
    },
    topbar: {
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    topbarTextDisabled: {
        color: 'gray'
    }
});