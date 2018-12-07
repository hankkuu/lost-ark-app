import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    FlatList,
    Alert
} from "react-native";

import AlarmItem from '@item/AlarmItem'


class AlarmScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alarmList: [
                { uid: 0, type:2, subject: '[선물]', content: '선물 아이템 수령' },
                { uid: 1, type:3, subject: '[쿠폰]', content: '선물받은 쿠폰 확인' },
                { uid: 2, type:1, subject: '[전체공지]', content: '공지사항 확인' } 
            ],
            isUpdate: false
        }

    }
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.alarmList}
                    keyExtractor={item => item.uid.toString()}
                    renderItem={this.renderItem}
                >
                </FlatList>
            </View>
        );
    }
    renderItem = ({item, index}) => {
        const listItem = 
            <AlarmItem
                item={item}
                onPress={() => this.onItemClick(item)}
            />
        return listItem;
    }
    onItemClick = (item) => {   
        let comment = '';
        console.log(item);
        switch(item.type) {
            case 1:
                comment = '공지사항을 확인하겠습니까?';
                break;
            case 2: 
                comment = '선물함으로 이동하시겠습니까?'
                break;
            case 3:
                comment = "쿠폰을 확인하시겠습니까?"
                break;                
        }    
        Alert.alert(
            '알람 확인',
            comment,
            [                
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                { text: 'OK', onPress: () => this.receiveItem(item) },
            ],
            { cancelable: false }
        )
    }
    receiveItem = (item) => {
        // //console.log(item);
        // const { alarmList } = this.state;
      
        // this.setState({ isUpdate: true }, () => {
        //     let n = alarmList.indexOf(item);
        //     //console.log(n);
        //     alarmList.splice(n, 1);
        //     if(alarmList.length === 0) {
        //         this.setState({
        //             alarmList: []
        //         })
        //         return;
        //     }
        //     //console.log(alarmList);
        //     this.setState({
        //         alarmList: alarmList
        //     })
        // })
        // //this.props.navigation.goBack();
        
        switch(item.type){
            case 1:
                this.props.navigation.navigate("Notice");
                break;
            case 2:
                this.props.navigation.navigate("Present");
                break;
            case 3:
                this.props.navigation.navigate("Coupon");
                break;
        }

    }
}
export default AlarmScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //alignItems: 'center',
        //justifyContent: 'center'
    }
});