import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";

import TextInput from '@shared/TextInput';
import Button from '@shared/Button';
import { colors } from '@util/Colors'

class DetailListScreen extends Component {
    constructor(props) {
        super(props);

        // { user } 와 user 의 차이를 아는 것이 중요하다 { user } 로 가져오게 되면 object 전체가 아니라 내부 user 객체를 가져온다
        const { user, list } = props.navigation.state.params;
        //console.log(user);

        this.state = {
            isUpdating: false,
            displayName: user === undefined ? null : user.displayName,
            statusMsg: user === undefined ? null : user.statusMsg,
            img: user === undefined ? null : user.img,
            list: list,
            uu: user === undefined ? null : user,
            isAdding: user === undefined ? true : false
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={this.onPressImg}
                    >
                        <Text style={styles.img}>{this.state.img}</Text>
                    </TouchableOpacity>
                    <TextInput
                        style={styles.txtInput}
                        txtLabel={('Name')}
                        txtHint={('Name')}
                        txt={this.state.displayName}
                        onTextChanged={(text) => this.onTextChanged('Display_Name', text)}
                    />
                    <TextInput
                        style={styles.txtInput}
                        txtLabel={('Status msg')}
                        txtHint={('Status msg')}
                        txt={this.state.statusMsg}
                        onTextChanged={(text) => this.onTextChanged('Status_Msg', text)}
                    />
                    <View style={styles.btnWrapper}>
                    {this.state.isAdding &&
                        <Button
                            style={styles.btn}
                            textStyle={styles.txtStyle}
                            isLoading={this.state.isUpdating}
                            onPress={this.onAdd}
                        >{('ADD')}</Button>}
                    {!this.state.isAdding && 
                        <View style={{ flexDirection: 'row'}}>
                            <Button
                                style={styles.btn}
                                textStyle={styles.txtStyle}
                                isLoading={this.state.isUpdating}
                                onPress={this.onUpdate}
                            >{('UPDATE')}</Button>
                            <Button
                                style={styles.btn}
                                textStyle={styles.txtStyle}
                                isLoading={this.state.isUpdating}
                                onPress={this.onRemove}
                            >{('DELETE')}</Button>
                        </View>}
                    </View>
                </View>
            </View>
        );
    }
    onTextChanged = (type, text) => {
        switch (type) {
            case 'Display_Name': 
                this.setState({ displayName: text });
                return;
            case 'Status_Msg':
                this.setState({ statusMsg: text });
                return;
        }
    }
    onUpdate = () => {
        const { displayName, statusMsg, list, uu } = this.state;
        this.setState({ isUpdating: true }, () => {
            uu.displayName = displayName;
            uu.statusMsg = statusMsg;
            //this.props.navigation.goBack();
            this.props.navigation.navigate('List', {} );   //
        })
    }
    onRemove = () => {
        const { list, uu } = this.state;
        this.setState({ isUpdating: true }, () => {
            let n = list.indexOf(uu);
            list.splice(n, 1);
            //this.props.navigation.goBack();
            this.props.navigation.navigate('List', {} );   //
        })
    }
    onAdd = () => {
        const { list, displayName, statusMsg } = this.state;
        const newUser = {uid:11, img:'new', displayName: displayName, statusMsg: statusMsg}
        this.setState({ isUpdating: true }, () => {
            list.push(newUser);
            this.props.navigation.navigate('List', {} );
        })
    }
}
export default DetailListScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column',
        alignItems: 'center',
        //justifyContent: 'center'
    },
    wrapper: {
        marginTop: 40,
        width: '78%',
        alignItems: 'center',
    },
    btnWrapper: {
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 24,
        marginBottom: 48,
    },
    btn: {
        backgroundColor: colors.dusk,
        borderColor: colors.dusk,
        borderRadius: 4,
        borderWidth: 1,
        width: 76,
        height: 60,
        shadowColor: colors.dusk,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowRadius: 4,
        shadowOpacity: 0.3,
        marginRight: 50,

        alignItems: 'center',
        justifyContent: 'center',
    },
    txtInput: {
        marginTop: 24
    },
    txtStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
    img: {
        width: 100,
        height: 100,
    },
});