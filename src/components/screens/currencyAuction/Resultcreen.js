import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList
} from "react-native";

import ResultItem from '@item/ResultItem';
import { Button } from 'antd-mobile-rn';

class Resultcreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lists: [],
            refreshing: false,
        }
    }

    componentDidMount() {
        const data = [
            { id: 1, type: '골드', description: '지금은 테스트 중' },
            { id: 2, type: '크리스탈', description: '지금은 테스트 중' },
            { id: 3, type: '골드', description: '지금은 테스트 중' },
            { id: 4, type: '크리스탈', description: '지금은 테스트 중' },
        ]
        this.setState({
            lists: data
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 10 }}>
                    <Text>로얄크리스탈</Text>
                    <Text>0</Text>
                    <Text>크리스탈</Text>
                    <Text>0</Text>
                    <Text>골드</Text>
                    <Text>0</Text>
                </View>
                <View style={{ margin: 10, flexDirection: 'row', justifyContent: "flex-end" }} >
                    <Text>30일 후 자동 삭제</Text>
                    <Text style={{marginLeft: 5 }}>0/100</Text>
                </View>
                <View>
                    <View style={{flexDirection: 'column'}}>
                        <Text style={{ margin: 5 }}>거래 결과함</Text>
                        <View>
                            <Text>판매 또는 구매로 등록한 매물이 거래 성사, 취소 만료, 회수를 통해 획득한 골드와 크리스탈만 수령할 수 있습니다.</Text>    
                        </View>              
                        <View style={{ marginTop: 10 }}>
                            <Text style={{ marginLeft: 30}}>크리스탈</Text>
                            <View style={{ flexDirection: "row", justifyContent: 'space-around',}}>
                                <Text>수령 가능한 금액</Text>
                                <View style={{ marginLeft: 40, flexDirection: "row", }}>
                                    <Text>0</Text>
                                    <Text style={{ marginLeft: 5}}>C</Text>
                                </View>
                                <Button style={{ backgroundColor: '#061', height: 25}}>
                                    <Text style={{color: 'white'}}>수령</Text>
                                </Button>
                            </View>                            
                        </View>          
                        <View>
                            <Text style={{ marginLeft: 30}}>골드</Text>
                            <View style={{ flexDirection: "row", justifyContent: 'space-around'}}>
                                <Text>수령 가능한 금액</Text>
                                <View style={{ marginLeft: 40, flexDirection: "row", }}>
                                    <Text>0</Text>
                                    <Text style={{ marginLeft: 5}}>G</Text>
                                </View>
                                <Button style={{ backgroundColor: '#061', height: 25}}>
                                    <Text style={{color: 'white'}}>수령</Text>
                                </Button>
                                
                            </View>                            
                        </View>          
                    </View>                    
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-around", marginTop: 10 }}>
                    <View style={{ width: '30%', alignItems: "center" }}>
                        <Text stlye={{}}>유형</Text>
                    </View>
                    <View style={{ width: '70%', alignItems: "center" }}>
                        <Text style={{}}>내용</Text>
                    </View>         
                </View>
                <View style={{ marginTop: 15 }}>
                    <FlatList
                        style={{ alignSelf: 'stretch', backgroundColor: 'white', }}
                        contentContainerStyle={
                            this.state.lists.length === 0
                                ? { flex: 1, alignItems: 'center', justifyContent: 'center' }
                                : null}    // 이방식으로 해야 한 가운데 No Content를 볼 수 있다 
                        keyExtractor={(item, index) => item.id.toString()}
                        data={this.state.lists}
                        renderItem={this.renderItem}
                        refreshing={this.state.refreshing}
                        onRefresh={this.onRefresh}
                        extraData={this.state}
                        ListEmptyComponent={<Text>NO CONTENT</Text>}
                    >
                    </FlatList>
                </View>
            </View>
        );
    }

    renderItem = ({item, index}) => {
        const listItem = 
        <ResultItem
            item={item}
            onPress={() => this.onItemClick(item)}
        />
        return listItem;
    }

    onRefresh = () => {
    }
}
export default Resultcreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //alignItems: 'center',
        //justifyContent: 'center'
    }
});