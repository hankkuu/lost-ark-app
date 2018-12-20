import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Image
} from "react-native";
import { Permissions, Notifications } from 'expo';
import Swiper from 'react-native-swiper';

import Button from '@shared/Button';
import { colors } from '@util/Colors'
import { getAssetByFilename } from '@util/Images'

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noticeList: [],
            notice: '',
            token: null,
            notification: null,
            swipe: [
                { imageName: 'banner1' },
                { imageName: 'banner2' },
                { imageName: 'banner3' },
            ]
        }
    }

    componentDidMount() {
        this.registerForPushNotification();
    }

    render() {
        return (
            <ScrollView style={styles.container}
                contentContainerStyle={styles.scrollViewContainer}
            >
                <View style={styles.notice}>
                    <Swiper style={styles.swiper} showsButtons={true} autoplay={true}
                        buttonWrapperStyle={{}} paginationStyle={{ bottom: 5 }}
                        nextButton={<Text>&gt;</Text>} prevButton={<Text>&lt;</Text>}
                    >
                        {this.state.swipe.map((data, index) => {
                            const { imageName } = data;
                            return (
                                <View key={index} style={styles.slide}>
                                    <TouchableOpacity
                                        onPress={() => this.props.navigation.navigate('')}>
                                        <Image style={styles.imgBanner} source={getAssetByFilename(imageName)} />
                                    </TouchableOpacity>
                                </View>
                            )
                        })}                       
                    </Swiper>
                </View>
                <View>
                    <Button
                        style={styles.btn100Percent}
                        onPress={() => this.props.navigation.navigate('Notice')}
                    >공지사항</Button>
                </View>

                <View style={styles.gridSpace}>
                    <View style={{ width: '50%' }}>
                        <Button
                            style={styles.btn}
                            onPress={() => this.props.navigation.navigate('Coupon')}
                        >쿠폰</Button>
                    </View>
                    <View style={{ width: '50%' }}>
                        <Button
                            style={styles.btn}
                            onPress={() => this.props.navigation.navigate('Recharge')}
                        >충전</Button>
                    </View>

                    <View style={{ width: '33%' }}>
                        <Button
                            style={styles.btn}
                            onPress={() => this.props.navigation.navigate('AdditionService')}
                        >부가서비스</Button>
                    </View>
                    <View style={{ width: '33%' }}>
                        <Button
                            style={styles.btn}
                            onPress={() => this.props.navigation.navigate('MyShop')}
                        >내 상점현황</Button>
                    </View>
                    <View style={{ width: '33%' }}>
                        <Button
                            style={styles.btn}
                            onPress={() => this.props.navigation.navigate('PCRoom')}
                        >전용피시방 찾기</Button>
                    </View>

                    <View style={{ width: '50%' }}>
                        <Button
                            style={styles.btn}
                            onPress={() => this.props.navigation.navigate('CS')}
                        >고객상담실</Button>
                    </View>
                    <View style={{ width: '50%' }}>
                        <Button
                            style={styles.btn}
                            onPress={() => this.props.navigation.navigate('List')}
                        >Best Practice</Button>
                    </View>
                    <View style={{ width: '100%' }}>
                        <Button
                            style={styles.btn}
                            onPress={() => this.props.navigation.navigate('WebView')}
                        >로스트아크 N샵</Button>
                    </View>
                </View>
            </ScrollView>
        );
    }

    registerForPushNotification = async () => {
        const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
        if (status !== 'granted') {
            const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
            if (status !== 'granted') {
                return;
            }
        }

        const token = await Notifications.getExpoPushTokenAsync();
        this.subscription = Notifications.addListener(this.handleNotification);
        this.setState({ token });

        // Push Server 연동은 일단 보류
        // return fetch(PUSH_REGISTRATION_ENDPOINT, {
        //     method: 'POST',
        //     headers: {
        //       'Accept': 'application/json',
        //       'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //       token: {
        //         value: token,
        //       },
        //       user: {
        //         username: 'warly',
        //         name: 'Dan Ward'
        //       },
        //     }),
        //   });
    }

    handleNotification = (notification) => {
        this.setState({ notification, });
    };
}
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    scrollViewContainer: {
        paddingVertical: 0,
    },
    notice: {
        flexDirection: "row",
        //justifyContent: "space-around",
        height: 180,                        // 감싸고 있는 View를 기준으로 잡는다
        //alignItems: 'center',
    },
    gridSpace: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    btn100Percent: {
        backgroundColor: colors.dusk,
        marginTop: 5,
        borderRadius: 20,
        borderWidth: 2,
        width: '100%',
        height: 102,
        borderColor: 'white',

        alignItems: 'center',
        justifyContent: 'center',
    },
    btn: {
        backgroundColor: colors.dusk,
        marginTop: 5,

        borderRadius: 20,
        borderWidth: 2,

        height: 122,
        borderColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',

        marginHorizontal: 3,
    },
    swiper: {
        //height: 180
    },
    slide: {
        height: "100%", 
        width: "100%",
    },
    imgBanner: {
        height: "100%", 
        width: "100%",
    }
});