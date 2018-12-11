import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    ScrollView,
    Image,
    TouchableOpacity,
    Animated,
    TextInput,
    FlatList,
    Platform,
    TouchableHighlight,
    Picker
} from "react-native";
import Swiper from "react-native-swiper";
import { ScrollableTabView, ScrollableTabBar, } from "@valdio/react-native-scrollable-tabview";
import GoodsItem from "@item/GoodsItem";

import { getAssetByFilename } from '@util/Images';
import { colors } from '@util/Colors'

class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            subCategoryName: '',
            subCategories: [],
            refreshing: false,
            searchTxt: '',
            scrollY: new Animated.Value(0),
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
        const category = [
            { label: '전체' },
            { label: '첫번째' },
            { label: '두번째' },
            { label: '세번째' },
        ]
        this.setState({ items: dummy, subCategories: category })
    }

    test = (itemValue) => {
        const dummy = [
            { uid: 0, tag: 'New', img: getAssetByFilename('goods1'), displayName: '베아트리스의 축복 3일', cost: '45000원' },
            { uid: 1, tag: '인기', img: getAssetByFilename('goods1'), displayName: '베아트리스의 축복 3일', cost: '45000원' },
            { uid: 2, tag: '추천', img: getAssetByFilename('goods1'), displayName: '베아트리스의 축복 3일', cost: '45000원' },
        ]

        this.setState({
            subCategory: itemValue,
            items: dummy
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.selector}>
                    <Picker
                        selectedValue={this.state.subCategory}
                        style={styles.picker}
                        onValueChange={(itemValue, itemIndex) => this.test(itemValue)}
                    >
                        {this.state.subCategories.map((data, index) => {
                            const { label } = data;
                            return (
                                <Picker.Item key={index} label={label} value={label} />
                            )
                        })}
                    </Picker>
                    <Animated.View
                        style={[styles.viewSearch, {
                            height: 50,
                            transform: [{
                                translateY: this.state.scrollY.interpolate({
                                    inputRange: [-50, 0, 50, 100],
                                    outputRange: [0, 0, -50, -50]
                                })
                            }]
                        }]}
                    >
                        <Animated.View style={{
                            position: 'absolute', width: '100%', paddingHorizontal: 20, height: 50,
                            opacity: this.state.scrollY.interpolate({
                                inputRange: [-50, 0, 50, 100],
                                outputRange: [1, 1, 0, 0]
                            })
                        }}>
                            <TextInput
                                onChangeText={(text => this.onTxtChanged(text))}
                                underlineColorAndroid='transparent'
                                autoCapitalize='none'
                                autoCorrect={false}
                                multiline={false}
                                style={styles.txtInput}
                                onSubmitEditing={this.onSearch}
                                defaultValue={this.state.searchTxt}
                            />
                            <Image source={getAssetByFilename('search')}
                                style={styles.imgSearch}
                            />
                        </Animated.View>
                    </Animated.View>
                </View>
                <FlatList
                    style={{ alignSelf: 'stretch' }}
                    contentContainerStyle={this.state.items.length === 0 ? styles.noContents : null}
                    keyExtractor={(item, index) => item.uid.toString()}
                    data={this.state.items}
                    renderItem={this.renderItem}
                    refreshing={this.state.refreshing}
                    onRefresh={this.onRefesh}
                    extraData={this.state}
                    ListEmptyComponent={<Text>{('NO_CONTENT')}</Text>}
                ></FlatList>
            </View>
        )
    }

    onRefesh = () => {
        console.log('refreshing')
    }
    // 자바스크립트의 비구조화 할당 == https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
    // ({item, index}) = Object  이렇게 하면 전체 객체에서 item과 index 부분만 가져올 수 있다 
    // (item, index) => { }  이렇게 사용할 경우는 item.item 에 접근해서 직접 꺼내와야 한다 
    renderItem = ({ item, index }) => {
        //console.log(index);
        const listItem =
            <GoodsItem
                item={item}
                onPress={() => this.onItemClick(item)}
            />
        return listItem;
    }
    onItemClick = (item) => {
        const { items } = this.state;
        this.props.navigation.navigate('GoodsDetail', { item: item });
    }
}

class ShopScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTxt: '',
            scrollY: new Animated.Value(0),
            refreshing: false,
            swipe: [
                { imageName: 'banner1' },
                { imageName: 'banner2' },
                { imageName: 'banner3' },
            ],
            tabLabel: [
                { labelName: '패키지' },
                { labelName: '부가서비스' },
                { labelName: '프레스티지' },
                { labelName: '임시다' },
                { labelName: '임시다' },
                { labelName: '임시다' },
                { labelName: '임시다' },
            ]
        }
    }

    componentDidMount() {

    }

    render() {
        const collapsableComponent = (
            <View style={styles.notice}>
                <Swiper style={styles.wrapper} showsButtons={true} autoplay={true}
                    buttonWrapperStyle={{}} paginationStyle={{ bottom: 5 }}
                    nextButton={<Text>&gt;</Text>} prevButton={<Text>&lt;</Text>}
                >
                    {this.state.swipe.map((data, index) => {
                        const { imageName } = data;
                        return (
                            <View key={index} style={styles.slide}>
                                <TouchableOpacity
                                    style={styles.link}
                                    onPress={() => this.props.navigation.navigate('')}>
                                    <Image style={{ height: "100%", width: "100%", }} source={getAssetByFilename(imageName)} />
                                </TouchableOpacity>
                            </View>
                        )
                    })}
                </Swiper>
            </View>
        )

        return (

            <ScrollableTabView
                style={{ marginTop: 0 }}
                renderTabBar={() => <ScrollableTabBar renderTab={this.renderTab} />}
                initialPage={0}
                locked={true}
                showsHorizontalScrollIndicator={false}
                collapsableBar={collapsableComponent} //이게 동작이 안된다.... // 해결 : ScrollableTabView이 가장 부모로 있으면 된다
            //pullToRefresh={this._onRefresh}
            //onChangeTab={this.handleChangeTab}
            >
                {
                    this.state.tabLabel.map((data, index) => {
                        const { labelName } = data;
                        return (
                            <List key={index} tabLabel={labelName} navigation={this.props.navigation} />
                        )
                    })
                }
            </ScrollableTabView>

        );
    }

    handleChangeTab = ({ i, ref, from }) => {
        console.log(i, ref, from);
        // this.children[i].onEnter()
        // this.children[from].onLeave()
    }

    renderTab = (name, page, isTabActive, onPressHandler, onLayoutHandler) => {
        // console.log(name, page, isTabActive, onPressHandler, onLayoutHandler);
        // 여기서 리스트를 갱신하자 
        // if(isTabActive === true) {
        //     console.log("activeTab: " + page);
        //     this._updateItemList(page);
        // }

        return (
            <TouchableHighlight
                key={`${name}_${page}`}
                onPress={() => onPressHandler(page)}
                onLayout={onLayoutHandler}
                style={{ flex: 1, width: 80, alignItems: 'center', justifyContent: 'center', backgroundColor: "#aaaaaa" }}
                underlayColor="#aaaaaa"  // 이색은 뭐냐??
            >
                <Text>{name}</Text>
            </TouchableHighlight>
        )
    }

}
export default ShopScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    picker: {
        height: 50, 
        width: "25%",
    },
    notice: {
        flexDirection: "row",
        justifyContent: "space-around",
        height: 80,
        //flex: 1,
        alignItems: 'center',
    },
    slide: {
        //flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        //width: "100%",
        //height: 200
    },
    txtInput: {
        width: '100%',
        height: 30,
        top: 10,
        backgroundColor: 'white',
        borderRadius: 4,
        paddingLeft: 34,
        paddingRight: 10
    },
    viewSearch: {
        width: '75%',
        justifyContent: 'center',
        backgroundColor: colors.paleGray,
        overflow: 'hidden',
    },
    imgSearch: {
        position: 'absolute',
        width: 16,
        height: 16,
        left: 30, top: 18,
    },
    selector: {
        flexDirection: 'row',

    }
});