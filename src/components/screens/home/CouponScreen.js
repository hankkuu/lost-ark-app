import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    ScrollView,
    Platform
} from "react-native";
import { Permissions, Notifications } from 'expo';
import { getAssetByFilename } from '@util/Images';

class CouponScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: null,
            Notifications: null,
            receiptId: [],
            status: '',
        }
    }

    render() {
        return (
            <KeyboardAvoidingView 
                style={styles.container} 
                keyboardVerticalOffset={120}
                behavior="padding"              // or position, height
                enabled   
            >
                <ScrollView
                    style={styles.scrollView}
                    contentContainerStyle={styles.scrollViewContainer}  // 정렬용
                >
                    <Text style={styles.title}>Expo Notification Test</Text>
                    <Text style={styles.text}>Title</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={title => this.setState({ title })}
                        maxLength={100}
                        value={this.state.title}
                    ></TextInput>
                    <Text style={styles.text}>Message</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={body => this.setState({ body })}
                        maxLength={100}
                        value={this.state.body}
                    ></TextInput>
                    <TouchableOpacity
                        onPress={() => this.registerForPushNotification()}
                        style={styles.touchable}
                    >
                        <Text>Register</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.sendPushNotification()}
                        style={styles.touchable}
                    >
                        <Text>Send Notification</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.getPushNotificationReceipts()}
                        style={styles.touchable}
                    >
                        <Text>Get Receipts</Text>
                    </TouchableOpacity>
                    {this.state.token ? (
                        <View>
                            <Text style={styles.text}>Token</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={token => this.setState({ token })}
                                value={this.state.token}
                            ></TextInput>
                        </View>
                    ) : null}
                    {this.state.notification ? (
                        <View>
                            <Text style={styles.text}>{JSON.stringify(this.state.notification.data)} </Text>
                            <Text style={styles.text}>{JSON.stringify(this.state.notification.data.message)} </Text>
                            {/* <Text style={styles.text}>http status: {this.state.status} </Text> */}
                        </View>
                    ) : null}
                    {this.state.receiptId ? (
                        <View>
                            <Text style={styles.text}>{this.state.receiptId} </Text>
                        </View>
                    ) : null}

                    <View>
                        <Text style={styles.text}>receipt status : {this.state.status} </Text>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>

        );
    }
    async registerForPushNotification() {
        const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
        if (status !== 'granted') {
            const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
            if (status !== 'granted') {
                return;
            }
        }

        const token = await Notifications.getExpoPushTokenAsync();
        this.subscription = Notifications.addListener(this.handleToken);
        this.setState({ token });
    }

    sendPushNotification(token = this.state.token, title = this.state.title, body = this.state.body) {
        let data = fetch('https://exp.host/--/api/v2/push/send', {
            body: JSON.stringify({
                to: token,
                title: title,
                body: body,
                data: { message: `${title} - ${body}` },
            }),
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
        });

        data.then(function (response) {
            //console.log(response);
        })

        let receiptId = [];
        data.then(response => response.json())
            .then(data => {
                //console.log(data)            
                if (data.data.status === 'ok') {
                    receiptId.push(data.data.id);
                    //console.log(receiptId);
                    this.setState({ receiptId })
                }
            })

        Platform.select({
            ios:
                Expo.Notifications.presentLocalNotificationAsync({
                    title: title,
                    body: body,
                    android: { icon: getAssetByFilename("pushIcon") }
                }),
            android: null
        })
        return data;
    }

    getPushNotificationReceipts() {
        let data = fetch("https://exp.host/--/api/v2/push/getReceipts", {
            body: JSON.stringify({
                ids: this.state.receiptId
            }),
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
        });

        // if (!data || typeof data !== 'object' || Array.isArray(data)) {
        //   let apiError = new Error(
        //     `Expected Expo to respond with a map from receipt IDs to receipts but received data of another type`
        //   );
        //   apiError.data = data;
        //   throw apiError;
        // }

        data.then(function (response) {
            //console.log(response);
        });

        data.then(response => response.json())
            .then(data1 => {
                const { data } = data1;
                let status = data[this.state.receiptId[0]];
                //console.log(status);
                this.setState({ status: status.status })
            })

        return data;
    }

    handleToken = (notification) => {
        this.setState({ notification, });
    };
}
export default CouponScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        //justifyContent: 'center',
        //paddingTop: 40,
    },
    scrollView: {
        alignSelf: 'stretch',
    },
    scrollViewContainer: {
        //justifyContent: 'center',
        //alignItems: 'center',
        paddingVertical: 40,
    },
    title: {
        alignItems: 'center',
        fontSize: 18,
        padding: 8
    },
    text: {
        paddingBottom: 2,
        padding: 8
    },
    touchable: {
        borderWidth: 1,
        borderRadius: 4,
        margin: 8,
        padding: 8,
        width: '90%'
    },
    input: {
        height: 40,
        borderWidth: 1,
        margin: 8,
        padding: 8,
        width: '90%'
    }
});