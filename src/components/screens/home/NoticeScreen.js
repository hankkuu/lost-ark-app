import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TextInput,
    ScrollView,
    Platform,
    TouchableOpacity,
    FlatList
} from "react-native";
// 헤더 옵션이 들어간 네이게이터를 만들 수도 있다 (dismiss button을 만든다)
//import { createStackNavigator } from 'react-navigation';
import { RkStyleSheet } from 'react-native-ui-kitten';

import NoticeItem from '@item/NoticeItem';
import { data } from '../../../test';

class NoticeScreen extends Component {
    static navigationOptions = {
        // 정렬을 두가지식으로 할수있다 일단 컴포넌트로 스타일 주는 것을 우선순위하나 Option만 따로 할경우 string으로 설정하자
        //headerTitle: <Text style={{flex:1, textAlign: 'center', alignSelf: 'center',}}>공지사항</Text>,
        title: '공지사항(임시)',
        headerTitleStyle: { flex:1, textAlign: 'center', alignSelf: 'center', }
    }

    constructor(props) {
        super(props);
        //// 아래의 경우 전역 변수로 사용 가능 (global)
        global.token = '';

        this.state = {
            refreshing: false,
            isLoaded: false,
            notices: [],
            token: global.token,
        }  
    }

    getNotification = () => {
        // 토큰을 get 방식으로 보낼 때 인코드 함수로 감싸서 보낸다
        const url = GLOBAL.HOST + 'mobile/list?lat=' + data.lat + '&lng' + data.lng + '&token' + encodeURIComponent(this.state.token);
        // 아래와 같은 방식으로도 만들 수 있음
        //const url2 = `https://api.coinmarketcap.com/v1/ticker/?limit=${limit}`;

        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState(state => ({
                    notices: [...responseJson],
                    isLoaded: true,
                }));
            })
            .catch((error) => {
                // 일단 임시로 여기다가
                const fakeData = data.getNotifications();
                this.setState(state => ({
                    notices: [...fakeData],
                    isLoaded: true,
                }));
                // 네트워크 에러 처리는 나중에 처리
                // throw error 
            })
            .done();
    }

    componentDidMount() {
        //const notices = data.getNotifications();
        //this.setState({ notices: notices })        
        // API 호출은 여기서 하자 
        // 임시로 만드는 API 호출 
        this.getNotification();
        //console.log(notices);

        // const dummy = [
        //     { uid: '0', img: '1', content: '새단장 중인 8.0 업데이트', },
        //     { uid: '1', img: '2', content: '어벤저스급 업데이트', },
        //     { uid: '2', img: '3', content: '추석연휴 이벤트',  },
        //     { uid: '3', img: '4', content: '안드로이드 4.0 지원중단 안내', },
        // ]
        // this.setState({
        //     notices: dummy
        // })
        // 이렇게 하지 말자 this.state.notices = dummy;
    }

    render() {
    
        return (
            <View 
                style={styles.container}
                //contentContainerStyle={styles.scrollViewContainer}    
            >
                <FlatList
                    style={styles.list}
                    contentContainerStyle={
                        this.state.notices.length === 0
                        ? { flex: 1, alignItems: 'center', justifyContent: 'center' }
                        : null}    // 이방식으로 해야 한 가운데 No Content를 볼 수 있다 
                    keyExtractor={(item, index) => item.id.toString()}
                    data={this.state.notices}
                    renderItem={this.renderItem}
                    refreshing={this.state.refreshing}
                    onRefresh={this.onRefresh}
                    extraData={this.state}
                    ListEmptyComponent={<Text>NO CONTENT</Text>}
                >
                </FlatList>                
            </View>
        );
    }

    renderItem = ({item, index}) => {
        //console.log(item);

        const listItem = 
            <NoticeItem
                item={item}
                onPress={() => this.onItemClick(item)}
            />
            return listItem;
    }

    onItemClick = (item) => {
        this.props.navigation.navigate('DetailNotice', { });
    }

    onRefresh = () => {

    }
}
export default NoticeScreen;

// const DismissButton = ({ navigation, style }) => (
//     <TouchableOpacity style={[{ width: 24, height: 24, left: 14, marginRight: 20 }, style]} onPress={() => navigation.dismiss()}>
//         <Text>Modal</Text>
//     </TouchableOpacity>);

// const commonNavigationOptionsForModal = (props) => ({
//     headerLeft: <DismissButton navigation={props.navigation} />,
// });

// const navigatorConfig = {
//     navigationOptions: commonNavigationOptionsForModal,
// }

// export default TestNavigator = createStackNavigator({
//     TestNavigator: { screen: NoticeScreen }
// }, navigatorConfig);

const styles = RkStyleSheet.create(theme => ({
    container: {
        flex: 1,
    },
    scrollViewContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    list: {
        alignSelf: 'stretch',
        backgroundColor: theme.colors.screen.base
    },
}));