import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Modal,
    TouchableOpacity,
    FlatList
} from "react-native";
import { statusBarHeight } from '@util/Styles'
import SettingItem from '@item/SettingItem'

class NoticeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: true,
            notice: [],
            refreshing: false
        }
    }

    componentDidMount() {
        const dummy = [
            { uid: '0', img: '1', content: '새단장 중인 8.0 업데이트', },
            { uid: '1', img: '2', content: '어벤저스급 업데이트', },
            { uid: '2', img: '3', content: '추석연휴 이벤트', },
            { uid: '3', img: '4', content: '안드로이드 4.0 지원중단 안내', },
        ]
        this.setState({ notice: dummy })
    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible })
        this.props.navigation.goBack();
    }
    render() {
        return (
            <View style={styles.container}>
                <Modal
                    animationType='none'
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={this.setModalVisible.bind(this, false)}
                >
                    <View style={styles.modalView}>
                        <View style={{ flexDirection: 'row', marginHorizontal: 10, justifyContent: 'space-between' }}>
                            <View style={{ marginLeft: 20 }}>
                                <Text style={{ fontSize: 20,  }}>HeadLine</Text>
                            </View>
                            <View style={{  }}>
                                <TouchableOpacity
                                    onPress={this.setModalVisible.bind(this, false)}
                                >
                                    <Text style={{ fontSize: 20, }}>X</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <FlatList
                            style={{ alignSelf: 'stretch' }}
                            contentContainerStyle={this.state.notice.length === 0 ? styles.noContents : null}
                            keyExtractor={(item, index) => item.uid.toString()}
                            data={this.state.notice}
                            renderItem={this.renderItem}
                            refreshing={this.state.refreshing}
                            onRefresh={this.onRefesh}
                            extraData={this.state}
                            ListEmptyComponent={<Text>{('NO_CONTENT')}</Text>}
                        ></FlatList>
                    </View>
                </Modal>
            </View>
        );
    }
    onRefesh = () => {
        console.log('refreshing')
    }
    // 자바스크립트의 비구조화 할당 == https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
    // ({item, index}) = Object  이렇게 하면 전체 객체에서 item과 index 부분만 가져올 수 있다 
    // (item, index) => { }  이렇게 사용할 경우는 item.item 에 접근해서 직접 꺼내와야 한다 
    renderItem = ({ item, index }) => {
        //console.log(item);
        const listItem =
            <SettingItem
                item={item}
                onPress={() => this.onItemClick(item)}
            />
        return listItem;
    }
    onItemClick = (item) => {
        console.log(item);
        //<DetailListScreen />
        this.props.navigation.navigate('SystemAlarm', {});
    }
}
export default NoticeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //alignItems: 'center',
        //justifyContent: 'center',
        //marginTop: statusBarHeight + 45,
    },
    modalView: {
        marginTop: statusBarHeight,

    }
});