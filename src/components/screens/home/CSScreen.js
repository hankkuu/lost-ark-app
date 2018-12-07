import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TextInput,
    Image
} from "react-native";

import { getAssetByFilename } from '@util/Images';

class CSScreen extends Component {
    constructor(props) {
        super(props)
        this.state= {
            searchTxt: '',
        }
    }
    render() {
        return (
            <View style={styles.container}>
                     <TextInput
                            onChangeText={(text => this.onTxtChanged(text))}
                            underlineColorAndroid='transparent'
                            autoCapitalize='none'
                            autoCorrect={false}
                            multiline={false}
                            style={styles.txtInput}
                            onSubmitEditing={this.onSearch}
                            defaultValue={this.state.searchTxt}
                        />
                        <Image source={getAssetByFilename('search')}
                            style={styles.imgSearch}
                        />
            </View>
        );
    }
}
export default CSScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        //justifyContent: 'center'
    },
    txtInput: {
        width: '100%', 
        height: 30, 
        top: 10, 
        backgroundColor: 'white',
        borderRadius: 4, 
        paddingLeft: 34, 
        paddingRight: 10
    },
    imgSearch: {
        position: 'absolute',
        width: 16,
        height: 16,
        left: 30, top: 18,
    },
});