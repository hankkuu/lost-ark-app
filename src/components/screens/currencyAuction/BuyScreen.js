import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TextInput
} from "react-native";
import { Modal, Button, InputItem, List, } from 'antd-mobile-rn'

import CurrencyItem from '@item/CurrencyItem';

class BuyScreen extends Component {
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
            { id: 1, crystal: 100, gold: 500 },
            { id: 2, crystal: 100, gold: 500 },
            { id: 3, crystal: 100, gold: 500 },
        ]
        this.setState({
            lists: data
        })
    }

    showModal = () => this.setState({ visible: true })
    onClose = () => this.setState({ visible: false })

    render() {
        const footerButtons = [
            { text: '취소', onPress: () => console.log('cancel') },
            { text: '등록', onPress: () => console.log('ok') }
        ]

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
                <View style={{ margin: 10, }} >
                    <Button style={{ backgroundColor: '#061', }} onClick={this.showModal} >
                        <Text style={{ color: 'white'}}>크리스탈 구매</Text>
                    </Button>
                </View>
                <View style={{ flexDirection: "row", alignItems: "flex-start", justifyContent: "space-around", marginTop: 10 }}>
                    <View style={{ paddingTop: 15, }}>
                        <Text stlye={{ }}>구매 크리스탈 매물</Text>
                    </View>
                    <View style={{ flexDirection: "column", justifyContent: "center" }}>
                        <Text style={{ paddingLeft: 30 }}>골드 입찰 금액</Text>
                        <Text>(크리스탈 100개당 골드량)</Text>
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
                <Modal title='구매' transparent onClose={this.onClose} maskClosable visible={this.state.visible} closable footer={footerButtons}>
                    <View style={{ paddingVertical: 20 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text>입찰 금액</Text>
                            <Text>100 크리스털 당</Text>
                            <TextInput
                                style={{
                                    backgroundColor: 'white',
                                    height: 20,
                                    borderColor: 'gray',
                                    borderWidth: 1,
                                    minWidth: 60,
                                    paddingHorizontal: 5,
                                }}
                                value={this.state.text}
                                onChangeText={(value) => this.setState({ text: value })}
                            >
                            </TextInput>
                            <Text style={{}}>Gold</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                                <Text>구매 수량</Text>
                                <Text style={{ marginHorizontal: 5 }}>?</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                                <TextInput
                                    style={{
                                        backgroundColor: 'white',
                                        height: 20,
                                        borderColor: 'gray',
                                        borderWidth: 1,
                                        minWidth: 60,
                                        paddingHorizontal: 5,
                                    }}
                                    value={this.state.text}
                                    onChangeText={(value) => this.setState({ text: value })}
                                >
                                </TextInput>
                                <Text style={{}}>crystal</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                                <Text style={{}}>구매 비용</Text>
                                <Text style={{ marginHorizontal: 5 }}>?</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                                <Text style={{ marginHorizontal: 5 }}>900</Text>
                                <Text style={{}}>gold</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                                <Text style={{}}>획득 수량</Text>
                                <Text style={{ marginHorizontal: 5 }}>?</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                                <Text style={{ marginHorizontal: 5 }}>95</Text>
                                <Text style={{}}>crystal</Text>
                            </View>
                        </View>
                    </View>
                </Modal>

            </View>
        );
    }

    renderItem = ({ item, index }) => {
        const listItem =
            <CurrencyItem
                item={item}
                onPress={() => this.onItemClick(item)}
            />
        return listItem;
    }

    onRefresh = () => {

    }
}
export default BuyScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //alignItems: 'center',
        //justifyContent: 'center'
    }
});