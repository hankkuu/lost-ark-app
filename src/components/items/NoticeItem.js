import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from "react-native";
import { RkStyleSheet, RkText } from 'react-native-ui-kitten';

import { Avatar } from '@kittenDesign/avatar/index';

const moment = require('moment');

class NoticeItem extends Component {
    constructor(props) {
        super(props);
        //console.log(this.props.item);
    }
    render() {
        const { user, type, description, time, attach } = this.props.item;
        //console.log(user);
        //console.log(type);
        return (
            <View style={styles.container}>
                <Avatar
                    img={user.photo}
                    rkType='circle'
                    style={styles.avatar}
                    badge={type}
                />                
                <View style={styles.content}>
                    <TouchableOpacity
                        onPress={this.props.onPress}
                    >
                        <View style={styles.mainContent}>
                            <View style={styles.text}>
                                <RkText>
                                    <RkText rkType='header6'>{`${user.firstName} ${user.lastName}`}</RkText>
                                    <RkText rkType='primary2'> {description}</RkText>
                                </RkText>
                            </View>
                            <RkText
                                rkType='secondary5 hintColor'>{moment().add(time, 'seconds').fromNow()}
                            </RkText>
                        </View>
                        {this.renderAttachment(this.props.item)}
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    renderAttachment = (item) => {
        const { attach } = item;
        //console.log(attach)
        const hasAttachment = attach === undefined;
        return hasAttachment ? <View /> : <Image style={styles.attachment} source={attach} resizeMethod='resize'/>;
    };
}
export default NoticeItem;

const styles = RkStyleSheet.create(theme => ({
    container: {
        padding: 16,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: theme.colors.border.base,
        alignItems: 'flex-start',
    },
    avatar: {

    },
    text: {
        marginBottom: 5,
    },
    content: {
        flex: 1,
        marginLeft: 16,
        marginRight: 0,
    },
    mainContent: {
        marginRight: 60,
    },
    img: {
        height: 50,
        width: 50,
        margin: 0,
    },
    attachment: {
        position: 'absolute',
        right: 0,
        height: 50,
        width: 50,
    },
}));