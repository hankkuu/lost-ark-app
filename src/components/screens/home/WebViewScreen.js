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
import { ProgressBar } from "@shared/ProgressBar";
import { RkTheme, RkText } from "react-native-ui-kitten";
import { scale } from "@kittenDesign/scale";
import { screenWidth } from "@util/Styles";

const WEBVIEW_REF = React.createRef();
const delay = 100;

class WebViewScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: true,
            goBackVisible: false,
            progress: 0,
            isLoaded: false,
        }
    }

    componentDidMount(){
        this.timer = setInterval(this.updateProgress, delay);
        //console.log(`timer: ${this.timer}`);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    updateProgress = () => {
        if (this.state.progress === 1) {
            clearInterval(this.timer);
        } else {
            const randProgress = this.state.progress + (Math.random() * 0.5);
            console.log(randProgress);
            this.setState({ progress: randProgress > 1 ? 1 : randProgress });
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
                {this.state.isLoaded === false ? 
                        (
                            <View style={styles.progressWrap}>
                                <ProgressBar
                                    color={RkTheme.current.colors.accent}
                                    style={styles.progress}
                                    progress={this.state.progress}
                                    width={scale(screenWidth)}
                                />
                            </View>
                        ) : 
                        (
                            null
                        ) 
                }
                   
                    <WebView style={styles.container}
                        ref={WEBVIEW_REF}
                        onNavigationStateChange={this.onNavigationStateChange}
                        source={{ uri: 'http://m-lostark.game.onstove.com/Main' }}
                        //onLoadStart={console.log("start")}
                        //onLoadEnd={console.log("end")}
                        onLoad={this.onLoadWebView}
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
    onLoadWebView = () => {
        this.setState({ progress: 1, isLoaded : true });
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
    },
    progressWrap: {
        //marginTop: statusBarHeight,
        //backgroundColor : "rgb(134,154,183)", 
        width: '100%',
        alignItems: 'center',
    },
    progress: {
        //marginTop: 35,
        //marginBottom: 35,
        backgroundColor: '#e5e5e5',
    },
});