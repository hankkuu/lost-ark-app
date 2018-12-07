import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList,
    TouchableHighlight,
    ScrollView
} from "react-native";
import Swiper from "react-native-swiper";
import { ScrollableTabBar, ScrollableTabView, DefaultTabBar } from "@valdio/react-native-scrollable-tabview";
import { screenWidth } from '@util/Styles';
import { getAssetByFilename } from '@util/Images'; 
import SlideItem from "@item/SlideItem";

class ItemAuctionScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            test: [
                { categoryId: 1, categoryName: '패키지' },
                { categoryId: 2, categoryName: '부가서비스' },
                { categoryId: 3, categoryName: '프레스티지' }
            ],
            swipe: [
                { imageName: 'banner1' },
                { imageName: 'banner2' },
                { imageName: 'banner3' },
            ]
        }
    }

    render() {
        const collapsableComponent = (
            <View style={styles.notice}>
                <Swiper style={styles.wrapper} showsButtons={true} autoplay={true}
                    buttonWrapperStyle={{}} paginationStyle={{ bottom: 5 }}
                    nextButton={<Text>&gt;</Text>} prevButton={<Text>&lt;</Text>}
                >
                {this.state.swipe.map( (data, index) => {
                    const { imageName } = data;
                        return (
                            <View key={index} style={styles.slide}>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('Test1')}>
                                    <Image style={{ height: "100%", width: "100%", }} source={getAssetByFilename(imageName)} />
                                </TouchableOpacity>
                            </View>
                    )
                })}
                </Swiper>
            </View>
        )

        return (
            <View style={styles.container}>               
                    <ScrollableTabView
                        style={{ marginTop: 0, }}
                        renderTabBar={() => <DefaultTabBar renderTab={this.renderTab} />}
                        initialPage={0}
                        locked={true}
                        showsHorizontalScrollIndicator={false}
                        collapsableBar={collapsableComponent}
                    >
                        {this.state.test.map((data,index)=> {                            
                            const { categoryName } = data;
                            return (
                                <ScrollList key={index} tabLabel={categoryName} navigation={this.props.navigation}></ScrollList>
                            )
                        })}

                    </ScrollableTabView>   
            </View>
        );        
    }

    renderTab = (name, page, isTabActive, onPressHandler) => {
        return (
            <TouchableHighlight
                key={`${name}_${page}`}
                onPress={() => onPressHandler(page)}
                style={{ flex: 1, width: 80, alignItems: 'center', justifyContent: 'center', backgroundColor:"#aaaaaa"  }}
                underlayColor="#aaaaaa"  // 이색은 뭐냐??
            >
                <Text>{name}</Text>
            </TouchableHighlight>
        )
    }
}
export default ItemAuctionScreen;

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
        this.setState({items: dummy, items2: dummy2, items3: dummy3, items4: dummy4, items5: dummy5})
    }
    render() {
        return (
        <ScrollView Style={{ flex: 1 }}>
            <View style={{flexDirection: 'column'}}>
                <View style={{flexDirection: 'row', alignItems: 'stretch', justifyContent: "space-between", borderStyle: 'solid', borderBottomColor: 'red'}}>  
                    <Text style={{color: 'red'}}>패키지</Text>
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
            <View style={{flexDirection: 'column', marginTop: 20}}>
                <View style={{flexDirection: 'row', alignItems: 'stretch', justifyContent: "space-between", borderStyle: 'solid', borderBottomColor: 'red'}}>  
                    <Text style={{color: 'red'}}>부가서비스</Text>
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
            <View style={{flexDirection: 'column', marginTop: 20}}>
                <View style={{flexDirection: 'row', alignItems: 'stretch', justifyContent: "space-between", borderStyle: 'solid', borderBottomColor: 'red'}}>  
                    <Text style={{color: 'red'}}>프레스티지</Text>
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
            <View style={{flexDirection: 'column', marginTop: 20}}>
                <View style={{flexDirection: 'row', alignItems: 'stretch', justifyContent: "space-between", borderStyle: 'solid', borderBottomColor: 'red'}}>  
                    <Text style={{color: 'red'}}>임시다</Text>
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
                        {this.state.items4.map((data, index) => {
                            const { img, displayName } = data;
                            if (index < 5) {
                                return (
                                    <SlideItem key={index} img={img} name={displayName}></SlideItem>
                                )
                            }
                        })}

                </ScrollView>
            </View>
            <View style={{flexDirection: 'column', marginTop: 20}}>
                <View style={{flexDirection: 'row', alignItems: 'stretch', justifyContent: "space-between", borderStyle: 'solid', borderBottomColor: 'red'}}>  
                    <Text style={{color: 'red'}}>너도 임시</Text>
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
                        {this.state.items5.map((data, index) => {
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //alignItems: 'center',
        //justifyContent: 'center'
    },
    notice: {
        flexDirection: "row",
        //justifyContent: "space-around",
        height: 80,
        //alignItems: 'center',
    },
    slide: {
        //flex: 1,
        //justifyContent: 'center',
        //alignItems: 'center',
        width: "100%",
        height: "100%"
    },
});