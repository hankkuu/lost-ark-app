import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    FlatList
} from "react-native";

import TransactionItem from '@item/TransactionItem';

class ProgressScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lists: [],
            refreshing: false,
            text: '',
        }
    }

    componentDidMount() {
        const data = [
            { id: 1, type: 100, gold: 500, crystal: 200, cost: 400, remainTime: '00:04:32' },
            { id: 2, type: 100, gold: 500, crystal: 200, cost: 400, remainTime: '00:04:32' },
            { id: 3, type: 100, gold: 500, crystal: 200, cost: 400, remainTime: '00:04:32' },
            { id: 4, type: 100, gold: 500, crystal: 200, cost: 400, remainTime: '00:04:32' },
        ]
        this.setState({
            lists: data
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{flexDirection: "row", justifyContent: "space-around", marginTop: 10}}>
                    <Text>로얄크리스탈</Text>
                    <Text>0</Text>
                    <Text>크리스탈</Text>
                    <Text>0</Text>
                    <Text>골드</Text>
                    <Text>0</Text>
                </View>
                <View style={{ margin: 10, flexDirection: 'row', justifyContent: "flex-end"  }} >
                    <Text>최대 등록 수량</Text>
                    <Text>0/10</Text>
                </View>      
                <View style={{ flexDirection: "row", alignItems: "flex-start", justifyContent: "space-around", marginTop: 10 }}>
                    <Text stlye={{}}>유형</Text>
                    <Text style={{}}>등록한 골드 입찰 금액</Text>
                    <Text>크리스탈 수량</Text>
                    <Text>비용</Text>
                    <Text>남은 거래 시간</Text>
                </View>          
                <View style={{marginTop: 15}}>
                    <FlatList
                        style={{alignSelf: 'stretch', backgroundColor: 'white',}}
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
        <TransactionItem
            item={item}
            onPress={() => this.onItemClick(item)}
        />
        return listItem;
    }

    onRefresh = () => {
    }
}
export default ProgressScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //alignItems: 'center',
        //justifyContent: 'center'
    }
});