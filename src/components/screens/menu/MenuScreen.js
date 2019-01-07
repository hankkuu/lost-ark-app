import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from "react-native";
import {
    RkText,
    RkButton,
    RkStyleSheet,
} from 'react-native-ui-kitten';

import { MainRoutes } from './navigation/Routes';
import NavigationType from './navigation/PropTypes';

class GridMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dimensions: undefined,
        }
    }

    onContainerLayout = (event) => {
        if (this.state.height) {
            return;
        }
        const dimensions = event.nativeEvent.layout;
        this.setState({ dimensions });
    };

    renderItems = () => MainRoutes.map(this.renderItem);

    renderItem = (item) => (
        <RkButton
            rkType='tile'
            style={{ height: this.state.dimensions.width / 3, width: this.state.dimensions.width / 3 }}
            key={item.id}
            onPress={() => this.onItemPressed(item)}>
            <RkText style={styles.icon} rkType='primary moon xxlarge'>
                {item.icon}
            </RkText>
            <RkText rkType='small'>{item.title}</RkText>
        </RkButton>
    );

    onItemPressed = (item) => {
        console.log(item.id);
        this.props.navigation.navigate(item.id);
    };    

    render() {
        const items = this.state.dimensions === undefined ? <View /> : this.renderItems();
        return (
            <ScrollView style={styles.container}
                onLayout={this.onContainerLayout}
                contentContainerStyle={styles.rootContainer}
            >
                {items}
            </ScrollView>
        );
    }
}
export default GridMenu;

const styles = RkStyleSheet.create(theme => ({
    container: {
        //flex: 1,
        //alignItems: 'center',
        //justifyContent: 'center',
        backgroundColor: theme.colors.screen.base,
    },
    rootContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    icon: {
        marginBottom: 16,
    },
}));