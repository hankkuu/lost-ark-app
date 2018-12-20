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
import { colors } from '@util/Colors';
import { getAssetByFilename } from '@util/Images';

import SlideItem from "@item/SlideItem";
import TagItem from "@item/TagItem";

import { screenWidth } from '@util/Styles';
import {
    RkText,
    RkStyleSheet,
    RkTheme,
    RkSwitch
} from 'react-native-ui-kitten';
import { List, Divider, withTheme, } from 'react-native-paper';

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
            ],
            test: [
                { categoryId: 1, categoryName: '패키지' },
            ],
            items: [
                { uid: 0, displayName: '#팬아트', },
                { uid: 1, displayName: '#공학', },
                { uid: 2, displayName: '#하랑',  },
                { uid: 3, displayName: '#연재툰',  },
                { uid: 4, displayName: '#단편툰', },
                { uid: 5, displayName: '#베스트UGC', },
                { uid: 6, displayName: '#툰스푼', },
                { uid: 7, displayName: '#일단그림이좋아', },
                { uid: 8, displayName: '#더뮤지션', },
                { uid: 9, displayName: '#로스트아크', },
            ],
   
        }
    }

    componentDidMount() {
        this.registerForPushNotification();
    }

    render() {
        return (
            <ScrollView style={styles.container}
                contentContainerStyle={styles.scrollViewContainer}
                style={{ backgroundColor: '#f0f1f5', }}
            >
                <View style={{ width: '100%', height: 50, }}>
                    <TouchableOpacity>
                        <Image style={{ height: "100%", width: "100%", }} source={getAssetByFilename('stoveAuth')} ></Image>
                    </TouchableOpacity>
                    {/* <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <View>
                            <Text>로고</Text>
                        </View>
                        <View>
                            <Text>안전한 게임생활</Text>
                            <Text>STOVE인증기 바로가기</Text>
                        </View>
                        <View> 
                            <Text>>></Text>
                        </View>
                    </View> */}
                </View>
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
                <View style={{ width: '100%', backgroundColor: RkTheme.current.colors.screen.base}}>
                    <View style={{ justifyContent: 'flex-start', height: 60, backgroundColor: RkTheme.current.colors.screen.base }}>
                        <View style={{ alignContent: 'center', justifyContent: 'center', marginTop: 10, marginLeft: 10, marginRight: 10, borderBottomColor: 'gray', borderBottomWidth: 1, }}>
                            <RkText rkType='header10'>테일즈러너</RkText>
                            <RkText rkType='header9' style={{ marginBottom: 10 }}>[팬아트 공모전] 세명의 크리스마스</RkText>
                        </View>
                    </View>
                    <View style={{ justifyContent: 'flex-start', height: 60, backgroundColor: RkTheme.current.colors.screen.base }}>
                        <View style={{ alignContent: 'center', justifyContent: 'center', marginTop: 10, marginLeft: 10, marginRight: 10, borderBottomColor: 'gray', borderBottomWidth: 1, }}>
                            <RkText rkType='header10'>LOST ARK</RkText>
                            <RkText rkType='header9' style={{ marginBottom: 10 }}>2티어 베르투스 너무너무너무너무 쉽게잡기</RkText>
                        </View>
                    </View>
                    <View style={{ justifyContent: 'flex-start', height: 60, backgroundColor: RkTheme.current.colors.screen.base }}>
                        <View style={{ alignContent: 'center', justifyContent: 'center', marginTop: 10, marginLeft: 10, marginRight: 10, borderBottomColor: 'gray', borderBottomWidth: 1, }}>
                            <RkText rkType='header10'>LOST ARK</RkText>
                            <RkText rkType='header9' style={{ marginBottom: 10 }}>자케짤</RkText>
                        </View>
                    </View>
                    <View style={{padding: 10}}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
                            <View style={{ width: '50%', height: 180 }}>
                                <Image style={{width: '100%', height: '60%'}} source={getAssetByFilename('vod1')}></Image>
                                <RkText rkType='header10' style={{marginTop: 10}}>LOST ARK</RkText>
                                <RkText rkType='header9' style={{marginTop: 4}}>2티어 베르투스 너무너무너무너무 쉽게잡기</RkText>
                            </View>
                            <View style={{ width: '50%', height: 180 }}>
                                <Image style={{width: '100%', height: '60%'}} source={getAssetByFilename('vod2')}></Image>
                                <RkText rkType='header10' style={{marginTop: 10}}>LOST ARK</RkText>
                                <RkText rkType='header9' style={{marginTop: 4}}>2티어 베르투스 너무너무너무너무 쉽게잡기</RkText>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{ marginTop: 30, backgroundColor: RkTheme.current.colors.screen.base }}>
                    <View style={{ backgroundColor: 'lightblue', flexDirection: "row", justifyContent: 'space-between'}}>
                        <RkText rkType='header6'>STOVE 추천 태그</RkText>
                        <View style={{justifyContent:'flex-end', }}>
                            <TouchableOpacity>
                                <Text>모두보기 >></Text>                                
                            </TouchableOpacity>
                        </View>
                    </View>
                    <ScrollView
                        horizontal={true}
                        snapToInterval={screenWidth - 60}
                        snapToAlignment={'end'}
                        decelerationRate={0}
                        contentInset={{
                            top: 0,
                            left: 30,
                            bottom: 0,
                            right: 30,
                        }}
                        style={{ height: 50 }}
                    >
                        {this.state.items.map((data, index) => {
                            const { displayName } = data;
                            return (
                                <TagItem key={index} name={displayName} ></TagItem>
                            )
                        })}
                    </ScrollView>

                </View>

                <View style={{ marginTop: 40, backgroundColor: RkTheme.current.colors.screen.base }}>
                    {this.state.test.map((data, index) => {
                        const { categoryName } = data;
                        return (
                            <ScrollList key={index} tabLabel={categoryName} navigation={this.props.navigation}></ScrollList>
                        )
                    })}
                </View>

                <View style={{ marginTop: 10 }}>
                    <Text>이미지 한장</Text>
                </View>

                <View style={{ marginTop: 40, backgroundColor: RkTheme.current.colors.screen.base }}>
                    {this.state.test.map((data, index) => {
                        const { categoryName } = data;
                        return (
                            <ScrollList key={index} tabLabel={categoryName} navigation={this.props.navigation}></ScrollList>
                        )
                    })}
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

export class ScrollList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            items2: [],
            items3: [],
            items4: [],
            items5: [],
        }

    }

    componentDidMount() {
        const dummy = [
            { uid: 0, tag: 'New', img: getAssetByFilename('goods1'), displayName: '베아트리스의 축복 3일', cost: '45000원' },
            { uid: 1, tag: '인기', img: getAssetByFilename('goods1'), displayName: '베아트리스의 축복 3일', cost: '45000원' },
            { uid: 2, tag: '추천', img: getAssetByFilename('goods1'), displayName: '베아트리스의 축복 3일', cost: '45000원' },
            { uid: 3, tag: '한정', img: getAssetByFilename('goods1'), displayName: '베아트리스의 축복 3일', cost: '45000원' },
            { uid: 4, tag: '한정', img: getAssetByFilename('goods1'), displayName: '베아트리스의 축복 3일', cost: '45000원' },
            { uid: 5, tag: '한정', img: getAssetByFilename('goods1'), displayName: '베아트리스의 축복 3일', cost: '45000원' },
            { uid: 6, tag: '한정', img: getAssetByFilename('goods1'), displayName: '베아트리스의 축복 3일', cost: '45000원' },
            { uid: 7, tag: '한정', img: getAssetByFilename('goods1'), displayName: '베아트리스의 축복 3일', cost: '45000원' },
            { uid: 8, tag: '한정', img: getAssetByFilename('goods1'), displayName: '베아트리스의 축복 3일', cost: '45000원' },
            { uid: 9, tag: '한정', img: getAssetByFilename('goods1'), displayName: '베아트리스의 축복 3일', cost: '45000원' },
        ]
        const dummy2 = [
            { uid: 0, tag: 'New', img: getAssetByFilename('goods2'), displayName: '크리스탈', cost: '45000원' },
            { uid: 1, tag: '인기', img: getAssetByFilename('goods2'), displayName: '크리스탈', cost: '45000원' },
            { uid: 2, tag: '추천', img: getAssetByFilename('goods2'), displayName: '크리스탈', cost: '45000원' },
            { uid: 3, tag: '한정', img: getAssetByFilename('goods2'), displayName: '크리스탈', cost: '45000원' },
            { uid: 4, tag: '한정', img: getAssetByFilename('goods2'), displayName: '크리스탈', cost: '45000원' },
            { uid: 5, tag: '한정', img: getAssetByFilename('goods2'), displayName: '크리스탈', cost: '45000원' },
            { uid: 6, tag: '한정', img: getAssetByFilename('goods2'), displayName: '크리스탈', cost: '45000원' },
            { uid: 7, tag: '한정', img: getAssetByFilename('goods2'), displayName: '크리스탈', cost: '45000원' },
            { uid: 8, tag: '한정', img: getAssetByFilename('goods2'), displayName: '크리스탈', cost: '45000원' },
            { uid: 9, tag: '한정', img: getAssetByFilename('goods2'), displayName: '크리스탈', cost: '45000원' },
        ]
        const dummy3 = [
            { uid: 0, tag: 'New', img: getAssetByFilename('goods3'), displayName: '로얄 크리스탈', cost: '45000원' },
            { uid: 1, tag: '인기', img: getAssetByFilename('goods3'), displayName: '로얄 크리스탈', cost: '45000원' },
            { uid: 2, tag: '추천', img: getAssetByFilename('goods3'), displayName: '로얄 크리스탈', cost: '45000원' },
            { uid: 3, tag: '한정', img: getAssetByFilename('goods3'), displayName: '로얄 크리스탈', cost: '45000원' },
            { uid: 4, tag: '한정', img: getAssetByFilename('goods3'), displayName: '로얄 크리스탈', cost: '45000원' },
            { uid: 5, tag: '한정', img: getAssetByFilename('goods3'), displayName: '로얄 크리스탈', cost: '45000원' },
            { uid: 6, tag: '한정', img: getAssetByFilename('goods3'), displayName: '로얄 크리스탈', cost: '45000원' },
            { uid: 7, tag: '한정', img: getAssetByFilename('goods3'), displayName: '로얄 크리스탈', cost: '45000원' },
            { uid: 8, tag: '한정', img: getAssetByFilename('goods3'), displayName: '로얄 크리스탈', cost: '45000원' },
            { uid: 9, tag: '한정', img: getAssetByFilename('goods3'), displayName: '로얄 크리스탈', cost: '45000원' },
        ]
        const dummy4 = [
            { uid: 0, tag: 'New', img: getAssetByFilename('goods4'), displayName: '필살기', cost: '45000원' },
            { uid: 1, tag: '인기', img: getAssetByFilename('goods4'), displayName: '필살기', cost: '45000원' },
            { uid: 2, tag: '추천', img: getAssetByFilename('goods4'), displayName: '필살기', cost: '45000원' },
            { uid: 3, tag: '한정', img: getAssetByFilename('goods4'), displayName: '필살기', cost: '45000원' },
            { uid: 4, tag: '한정', img: getAssetByFilename('goods4'), displayName: '필살기', cost: '45000원' },
            { uid: 5, tag: '한정', img: getAssetByFilename('goods4'), displayName: '필살기', cost: '45000원' },
            { uid: 6, tag: '한정', img: getAssetByFilename('goods4'), displayName: '필살기', cost: '45000원' },
            { uid: 7, tag: '한정', img: getAssetByFilename('goods4'), displayName: '필살기', cost: '45000원' },
            { uid: 8, tag: '한정', img: getAssetByFilename('goods4'), displayName: '필살기', cost: '45000원' },
            { uid: 9, tag: '한정', img: getAssetByFilename('goods4'), displayName: '필살기', cost: '45000원' },
        ]
        const dummy5 = [
            { uid: 0, tag: 'New', img: getAssetByFilename('goods5'), displayName: '카드 3일', cost: '45000원' },
            { uid: 1, tag: '인기', img: getAssetByFilename('goods5'), displayName: '카드 3일', cost: '45000원' },
            { uid: 2, tag: '추천', img: getAssetByFilename('goods5'), displayName: '카드 3일', cost: '45000원' },
            { uid: 3, tag: '한정', img: getAssetByFilename('goods5'), displayName: '카드 3일', cost: '45000원' },
            { uid: 4, tag: '한정', img: getAssetByFilename('goods5'), displayName: '카드 3일', cost: '45000원' },
            { uid: 5, tag: '한정', img: getAssetByFilename('goods5'), displayName: '카드 3일', cost: '45000원' },
            { uid: 6, tag: '한정', img: getAssetByFilename('goods5'), displayName: '카드 3일', cost: '45000원' },
            { uid: 7, tag: '한정', img: getAssetByFilename('goods5'), displayName: '카드 3일', cost: '45000원' },
            { uid: 8, tag: '한정', img: getAssetByFilename('goods5'), displayName: '카드 3일', cost: '45000원' },
            { uid: 9, tag: '한정', img: getAssetByFilename('goods5'), displayName: '카드 3일', cost: '45000원' },
        ]
        this.setState({ items: dummy, items2: dummy2, items3: dummy3, items4: dummy4, items5: dummy5 })
    }
    render() {
        return (
            <ScrollView Style={{ flex: 1 }}>
                <View style={{ flexDirection: 'column' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'stretch', justifyContent: "space-between", borderStyle: 'solid', borderBottomColor: 'red' }}>
                        <Text style={{ color: 'red' }}>LOST ARK 인기 컨텐츠</Text>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate("Shop")}
                        >
                            <Text>모두보기</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView
                        horizontal={true}
                        snapToInterval={screenWidth - 60}
                        snapToAlignment={'end'}
                        decelerationRate={0}
                        contentInset={{
                            top: 0,
                            left: 30,
                            bottom: 0,
                            right: 30,
                        }}
                    >
                        {this.state.items.map((data, index) => {
                            const { img, displayName } = data;
                            if (index < 5) {
                                return (
                                    <SlideItem key={index} img={img} name={displayName}></SlideItem>
                                )
                            }
                        })}

                    </ScrollView>
                </View>
                <View style={{ flexDirection: 'column', marginTop: 20 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'stretch', justifyContent: "space-between", borderStyle: 'solid', borderBottomColor: 'red' }}>
                        <Text style={{ color: 'red' }}>테일즈러너 인기 컨텐츠</Text>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate("Shop")}
                        >
                            <Text>모두보기</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView
                        horizontal={true}
                        snapToInterval={screenWidth - 60}
                        snapToAlignment={'end'}
                        decelerationRate={0}
                        contentInset={{
                            top: 0,
                            left: 30,
                            bottom: 0,
                            right: 30,
                        }}
                    >
                        {this.state.items2.map((data, index) => {
                            const { img, displayName } = data;
                            if (index < 5) {
                                return (
                                    <SlideItem key={index} img={img} name={displayName}></SlideItem>
                                )
                            }
                        })}

                    </ScrollView>
                </View>
                <View style={{ flexDirection: 'column', marginTop: 20 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'stretch', justifyContent: "space-between", borderStyle: 'solid', borderBottomColor: 'red' }}>
                        <Text style={{ color: 'red' }}>소울워커인기 컨텐츠</Text>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate("Shop")}
                        >
                            <Text>더보기</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView
                        horizontal={true}
                        snapToInterval={screenWidth - 60}
                        snapToAlignment={'end'}
                        decelerationRate={0}
                        contentInset={{
                            top: 0,
                            left: 30,
                            bottom: 0,
                            right: 30,
                        }}
                    >
                        {this.state.items3.map((data, index) => {
                            const { img, displayName } = data;
                            if (index < 5) {
                                return (
                                    <SlideItem key={index} img={img} name={displayName}></SlideItem>
                                )
                            }
                        })}

                    </ScrollView>
                </View>
                
               
            </ScrollView>
        );
    }
}

const styles = RkStyleSheet.create(theme => ({
    container: {
        flex: 1,
        backgroundColor: 'gray',
    },
    scrollViewContainer: {
        paddingVertical: 0,
    },
    notice: {
        flexDirection: "row",
        //justifyContent: "space-around",
        height: 180,                        // 감싸고 있는 View를 기준으로 잡는다
        //alignItems: 'center',
        borderBottomWidth: 5,
        borderBottomColor: 'gray',
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
}));