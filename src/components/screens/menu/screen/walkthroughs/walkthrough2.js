import React from 'react';
import {
  View,
  Image,
  Dimensions,
} from 'react-native';
import {
  RkText,
  RkStyleSheet,
  RkTheme,
} from 'react-native-ui-kitten';

export class Walkthrough2 extends React.Component {
  getThemeImageSource = (theme) => (
    theme.name === 'light' ?
      require('../../../../../../assets/images/lostArk1.png') : require('../../../../../../assets/images/config/screensImageDark.png')
  );

  renderImage = () => (
    <Image
      style={{ width: Dimensions.get('window').width }}
      source={this.getThemeImageSource(RkTheme.current)}
    />
  );

  render = () => (
    <View style={styles.screen}>
      {this.renderImage()}
      <RkText rkType='header2' style={styles.text}>아크를 찾아서</RkText>
    </View>
  )
}

const styles = RkStyleSheet.create(theme => ({
  screen: {
    backgroundColor: theme.colors.screen.base,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    textAlign: 'center',
    marginTop: 20,
    marginHorizontal: 30,
  },
}));
