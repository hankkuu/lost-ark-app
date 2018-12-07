import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Platform
} from "react-native";

import { Ionicons } from '@expo/vector-icons';
import ActionButton from 'react-native-action-button';
//import ActionSheet from '@expo/react-native-action-sheet';

import UserListItem from '@item/UserListItem';

class BestListScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: [],
            refreshing: false
        }      

    }

    componentDidMount() {
        const dummy = [
            { uid: 0, img: 'KangHG', displayName: '강한규', statusMsg: 'hello' },
            { uid: 1, img: 'IMHG', displayName: '임형관', statusMsg: 'hello' },
            { uid: 2, img: 'JungDM', displayName: '정동민', statusMsg: 'hello' },
            { uid: 3, img: 'KimSK', displayName: '김성기', statusMsg: 'hello' },
        ]
        this.setState({ friends: dummy });      
    }
    
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    style={{ alignSelf: 'stretch' }}
                    contentContainerStyle={this.state.friends.length === 0 ? styles.noContents : null}
                    keyExtractor={(item, index) => item.uid.toString()}
                    data={this.state.friends}
                    renderItem={this.renderItem}
                    refreshing={this.state.refreshing}
                    onRefresh={this.onRefesh}
                    extraData={this.state}
                    ListEmptyComponent={<Text>{('NO_CONTENT')}</Text>}
                ></FlatList>
                <ActionButton buttonColor='rgba(231,76,60,1)'>
                    <ActionButton.Item buttonColor='#3498db' title='New' onPress={this.onAdd}>
                        <Ionicons name='md-create' style={styles.actionButton} />
                    </ActionButton.Item>
                </ActionButton>
                {/* <ActionSheet
                    ref={(comp) => this.actionSheet = comp}
                    options={['Delete', 'Cancle']}
                    cancelButtonIndex={1}
                    destruciveButtonIndex={0}
                    onPress={this.onPressActionSheet}
                >
                </ActionSheet> */}
            </View>
        );
    }
    onRefesh = () => {
     console.log('refreshing')   
    }
    // 자바스크립트의 비구조화 할당 == https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
    // ({item, index}) = Object  이렇게 하면 전체 객체에서 item과 index 부분만 가져올 수 있다 
    // (item, index) => { }  이렇게 사용할 경우는 item.item 에 접근해서 직접 꺼내와야 한다 
    renderItem = ({item, index}) => {
        //console.log(index);
        const listItem = 
            <UserListItem 
                item={item}
                onPress={() => this.onItemClick(item)}
                onLongPress={Platform.select({ ios: null, android: () => this.showActionSheet(item) })}
            />
        return listItem;
    }
    onItemClick = (item) => {
        const { friends } = this.state;
        //<DetailListScreen />
        this.props.navigation.navigate('Detail', { user: item, list: friends });
    }
    onAdd = () => {
        const { friends } = this.state;
        this.props.navigation.navigate('Detail', { list: friends });
    }
}
export default BestListScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    noContents: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    actionButton: {
        fontSize: 20,
        height: 22,
        color: 'white'
    }
});