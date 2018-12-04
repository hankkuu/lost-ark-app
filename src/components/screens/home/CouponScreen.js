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
            notification: null,
            pushResult: [],
            receiptId: [],
            status: '',
            receiptResult: [],
            receiptStatus: ''
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
                        <View style={{ borderWidth: 2, borderColor: 'black' }}>
                            <Text style={styles.text}>Push Json Data(Client received)</Text>
                            <Text style={styles.text}>{JSON.stringify(this.state.notification.data)} </Text>
                            <Text style={styles.text}>{(this.state.notification.data.message)} </Text>
                            {/* <Text style={styles.text}>http status: {this.state.status} </Text> */}
                        </View>
                    ) : null}
                    {this.state.pushResult.length> 0 ? (
                        <View style={{ borderWidth: 2, borderColor: 'black', marginTop: 5 }} >
                            <Text style={styles.text}>push result</Text>
                            <Text style={styles.text}>{this.state.pushResult[0].id}</Text>
                            <Text style={styles.text}>{this.state.pushResult[0].status}</Text>
                        </View>
                    ) : null}
                    {this.state.receiptResult.length > 0 ? (
                        <View style={{ borderWidth: 2, borderColor: 'black', marginTop: 5 }} >
                            <Text style={styles.text}>receipt result</Text>                            
                            <Text style={styles.text}>{JSON.stringify(this.state.receiptResult)} </Text>
                        </View>
                    ) : null}
                    <View>
                        <Text style={styles.text}>push send status : {this.state.status} </Text>
                    </View>
                    <View>
                        <Text style={styles.text}>receipt send status : {this.state.receiptStatus} </Text>
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
        //console.log("1111");
        this.subscription = Notifications.addListener(this.handleToken);
        //console.log("2222");
        this.setState({ token });
    }

    static subscription = (notification) => {
        console.log(notification);
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
        })
            .then((res) => res.json())
            .then((data) => {   
                let arr = [];               
                for(let obj in data) {
                    arr.push(data[obj]);
                    this.setState({                         
                        status: data[obj].status, 
                    })                    
                }  
                //console.log(arr);
                this.setState({
                    pushResult : arr
                })       
            })
            .catch((error) => {
                console.log(error);
            });

        let receiptId = [];
        // data.then(response => response.json())
        //     .then(data => {
        //         //console.log(data)            
        //         if (data.data.status === 'ok') {
        //             receiptId.push(data.data.id);
        //             //console.log(receiptId);
        //             this.setState({ receiptId })
        //         }
        //     })

        //Platform.select({
        //    ios:
                // Expo.Notifications.presentLocalNotificationAsync({
                //     title: title,
                //     body: body,
                //     android: {
                //         channelId: 'reminders',  
                //         //icon: getAssetByFilename("pushIcon") 
                //     }
                // })
        //    android: null
        //})
        return data;
    }

    getPushNotificationReceipts() {
        const data = this.state.pushResult[0];
        let arr = [];
        if(data.status === 'ok') {            
            arr.push(data.id);                     
        } else {
            return null;
        }  
        //console.log("11" + arr);

        let result = fetch("https://exp.host/--/api/v2/push/getReceipts", {
            body: JSON.stringify({
                ids: arr
            }),
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
        })
            .then((res) => res.json())
            .then((data) => {
                //console.log(data);
                for( let key in data ) {
                    let receipt = data[key];
                    for(let r in receipt) {
                        let s = receipt[r];
                        for(let status in s) {
                            //console.log(s[status]);
                            let arr = [];
                            arr.push(receipt);
                            let tt = s[status];
                            this.setState({
                                receiptResult: arr,
                                receiptStatus: s[status]
                            });
                        }
                    }
                }                
            })
            .catch((error) => {
                console.log(error);
            });

        // if (!data || typeof data !== 'object' || Array.isArray(data)) {
        //   let apiError = new Error(
        //     `Expected Expo to respond with a map from receipt IDs to receipts but received data of another type`
        //   );
        //   apiError.data = data;
        //   throw apiError;
        // }

        // data.then(function (response) {
        //     //console.log(response);
        // });

        // data.then(response => response.json())
        //     .then(data1 => {
        //         const { data } = data1;
        //         let status = data[this.state.receiptId[0]];
        //         //console.log(status);
        //         this.setState({ status: status.status })
        //     })

        // return data;
    }

    handleToken = (notification) => {
        console.log(notification);
        if( notification.origin === 'selected' ) {
            console.log(notification);
            this.props.navigation.navigate('Notice');
        }
        
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