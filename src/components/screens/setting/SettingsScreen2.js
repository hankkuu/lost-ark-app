import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity
} from "react-native";
import {
    RkText,
    RkStyleSheet,
    RkTheme,
    RkSwitch
} from 'react-native-ui-kitten';
import { FindFriends } from '@shared/FindFriends';
import { FontAwesome } from '@kittenDesign/icons';

class SettingsScreen2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sendPush: true,
            shouldRefresh: false,
            twitterEnabled: true,
            googleEnabled: false,
            facebookEnabled: true,
        }
    }

    onPushNotificationsSettingChanged = (value) => {
        this.setState({ sendPush: value });
    };

    onRefreshAutomaticallySettingChanged = (value) => {
        this.setState({ shouldRefresh: value });
    };

    onFindFriendsTwitterButtonPressed = () => {
        this.setState({ twitterEnabled: !this.state.twitterEnabled });
    };

    onFindFriendsGoogleButtonPressed = () => {
        this.setState({ googleEnabled: !this.state.googleEnabled });
    };

    onFindFriendsFacebookButtonPressed = () => {
        this.setState({ facebookEnabled: !this.state.facebookEnabled });
    };

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.section}>
                    <View style={[styles.row, styles.heading]}>
                        <RkText rkType='primary header6'>프로필</RkText>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.rowButton}>
                            <RkText rkType='header6'>프로필 수정</RkText>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.rowButton}>
                            <RkText rkType='header6'>패스워드 수정</RkText>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        <RkText rkType='header6'>Push Notification</RkText>
                        <RkSwitch
                            style={styles.switch}
                            value={this.state.sendPush}
                            name='Push'
                            onValueChange={this.onPushNotificationsSettingChanged}
                        ></RkSwitch>
                    </View>
                    <View style={styles.row}>
                        <RkText rkType='header6'>Push Notification2</RkText>
                        <RkSwitch
                            style={styles.switch}
                            value={this.state.shouldRefresh}
                            name="Refresh"
                            onValueChange={this.onRefreshAutomaticallySettingChanged}
                        />
                    </View>
                </View>
                <View style={styles.section}>
                    <View style={[styles.row, styles.heading]}>
                        <RkText rkType='primary header6'>SNS 접속 계정</RkText>
                    </View>
                    <View style={styles.row}>
                        <FindFriends
                            color={RkTheme.current.colors.twitter}
                            text='Twitter'
                            icon={FontAwesome.twitter}
                            selected={this.state.twitterEnabled}
                            onPress={this.onFindFriendsTwitterButtonPressed}
                        />
                    </View>
                    <View style={styles.row}>
                        <FindFriends
                            color={RkTheme.current.colors.google}
                            text='Google'
                            icon={FontAwesome.google}
                            selected={this.state.googleEnabled}
                            onPress={this.onFindFriendsGoogleButtonPressed}
                        />
                    </View>
                    <View style={styles.row}>
                        <FindFriends
                            color={RkTheme.current.colors.facebook}
                            text='Facebook'
                            icon={FontAwesome.facebook}
                            selected={this.state.facebookEnabled}
                            onPress={this.onFindFriendsFacebookButtonPressed}
                        />
                    </View>
                </View>
                <View style={styles.section}>
                    <View style={[styles.row, styles.heading]}>
                        <RkText rkType='primary header6'>SUPPORT</RkText>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.rowButton}>
                            <RkText rkType='header6'>Help</RkText>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.rowButton}>
                            <RkText rkType='header6'>PC방 찾기</RkText>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.rowButton}>
                            <RkText rkType='header6'>알림</RkText>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.rowButton}>
                            <RkText rkType='header6'>Logout</RkText>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        );
    }
}
export default SettingsScreen2;

const styles = RkStyleSheet.create(theme => ({
    container: {
        backgroundColor: theme.colors.screen.base,
    },
    header: {
        paddingVertical: 25,
    },
    section: {
        marginVertical: 35,
    },
    heading: {
        paddingBottom: 12.5,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 17.5,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: theme.colors.border.base,
        alignItems: 'center',
    },
    rowButton: {
        // flex를 잡아줘야 면적으로 선택이 가능하다
        flex: 1,
        paddingVertical: 18,
    },
    switch: {
        marginVertical: 14,
    },
}));