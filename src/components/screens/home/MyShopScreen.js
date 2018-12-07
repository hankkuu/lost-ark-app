import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";

class MyShopScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            toDoValue: props.text
        }
    }
    render() {
        const { isEditing, toDoValue } = this.state;
        const { text, id, deleteToDo, isCompleted } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.column}>
                    <TouchableOpacity onPress={this._toggleComplete}>
                        <View style={[
                            styles.circle, isCompleted ? styles.compledCircle : styles.uncompledCircle
                        ]}>
                        </View>
                    </TouchableOpacity>
                    {isEditing ?
                        (<TextInput
                            style={[
                                styles.text,
                                styles.input,
                                isCompleted ? styles.compledText : styles.uncompledText
                            ]}
                            value={toDoValue}
                            multiline={true}
                            onChangeText={this._controllInput}
                            returnKeyType={"done"}
                            onBlur={this._finishEditing}
                            underlineColorAndroid={"transparent"}
                        />) :
                        (<Text
                            style={[
                                styles.text,
                                isCompleted ? styles.compledText : styles.uncompledText]} >
                            {text}
                        </Text>
                        )}
                </View>

                {isEditing ? (
                    <View style={styles.actions} >
                        <TouchableOpacity onPressOut={this._finishEditing}>
                            <View style={styles.actionContainer}>
                                <Text style={styles.actionText}>check </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                ) : (
                        <View style={styles.actions} >
                            <TouchableOpacity onPressOut={this._startEdition}>
                                <View style={styles.actionContainer}>
                                    <Text style={styles.actionText}>edit </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPressOut={(event) => {
                                event.stopPropagation;
                                deleteToDo(id);
                            }} >
                                <View style={styles.actionContainer}>
                                    <Text style={styles.actionText}>delete </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )}

            </View >
        );
    }
}
export default MyShopScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});