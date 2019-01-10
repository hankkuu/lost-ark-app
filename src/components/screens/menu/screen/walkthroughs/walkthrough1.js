import React from 'react';
import {
  View,
  Image,
  Dimensions
} from 'react-native';
import {
  RkText,
  RkStyleSheet,
  RkTheme,
} from 'react-native-ui-kitten';

export class Walkthrough1 extends React.Component {
  getThemeImageSource = (theme) => (
    theme.name === 'light' ?
      require('../../../../../../assets/images/intro1.jpg') : require('../../../../../../assets/images/config/kittenImageDark.png')
  );

  renderImage = () => (
    <Image style={{ width: Dimensions.get('window').width }} 
           source={this.getThemeImageSource(RkTheme.current)} />
  );

  render = () => (
    <View style={styles.screen}>
      {this.renderImage()}
      <RkText rkType='header2' style={styles.text}>다시 MMORPG!!!</RkText>
    </View>
  )
}

const styles = RkStyleSheet.create(theme => ({
  screen: {
    backgroundColor: theme.colors.screen.base,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: '100%'
  },
  text: {
    marginTop: 20,
  },
}));
