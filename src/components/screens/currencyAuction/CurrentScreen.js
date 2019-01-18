import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList
} from "react-native";

import CurrencyHistoryItem from '@item/CurrencyHistoryItem';

class CurrentScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lists: [],
            refreshing: false,
        }
    }

    componentDidMount() {
        const data = [
            { id: 1, bidGold: 300, crystal: 100, gold: 500 },
            { id: 2, bidGold: 400, crystal: 100, gold: 500 },
            { id: 3, bidGold: 500, crystal: 100, gold: 500 },
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
                <View style={{ flexDirection: "row", alignItems: "flex-start", justifyContent: "space-around", marginTop: 10 }}>
                    <Text>골드 입찰 금액</Text>
                    <Text>거래된 골드량</Text>
                    <Text>거래된 크리스탈</Text>                    
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
        <CurrencyHistoryItem
            item={item}
            onPress={() => this.onItemClick(item)}
        />
        return listItem;
    }

    onRefresh = () => {

    }
}
export default CurrentScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //alignItems: 'center',
        //justifyContent: 'center'
    }
});