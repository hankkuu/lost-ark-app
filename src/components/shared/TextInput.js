import React, { Component } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Image,
  Text,
  TextInput,
  View,
  ViewStyle,
  TextStyle,
  TextInputProperties,
} from 'react-native';

import { ratio } from '@util/Styles';
import { colors } from '@util/Colors'

const styles = StyleSheet.create({
  wrapper: {
    alignSelf: 'stretch',

    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  label: {
    color: colors.blueyGray,
    marginBottom: 8 * ratio,
    fontSize: 12 * ratio,
  },
  labelFocus: {
    color: colors.dodgerBlue,
    marginBottom: 8 * ratio,
    fontSize: 12 * ratio,
  },
  input: {
    alignSelf: 'stretch',
    color: colors.dusk,
    fontSize: 16 * ratio,
    paddingVertical: 22 * ratio,
    paddingHorizontal: 20 * ratio,
    borderWidth: 1,
    borderColor: 'rgb(233,237,244)',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  inputFocus: {
    alignSelf: 'stretch',
    color: colors.dusk,
    fontSize: 16 * ratio,
    paddingVertical: 22 * ratio,
    paddingHorizontal: 20 * ratio,
    borderWidth: 1,
    borderColor: colors.dodgerBlue,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

class CustomTextInput extends Component {
  static defaultProps = {
    labelStyle: styles.label,
    labelStyleFocus: styles.labelFocus,
    placeholderTextColor: 'rgb(134,154,183)',
    isPassword: false,
    multiline: false,
    txtLabel: '',
    txtHint: '',
    txt: '',
    editable: true,
  };

  constructor(props) {
    super(props);
    this.state = {
      focused: false,
    };
  }

  render() {
    return (
      <View style={[
        styles.wrapper,
        this.props.style,
      ]}>
        { this.renderTxtLabel() }
        <TextInput
          style={[
            this.state.focused ? styles.inputFocus : styles.input,
            this.props.inputStyle,
          ]}
          underlineColorAndroid='transparent' // android fix
          autoCapitalize='none'
          autoCorrect={false}
          multiline={this.props.multiline}
          onChangeText={this.props.onTextChanged}
          value={this.props.txt}
          onFocus={ () => this.setState({ focused: true }) }
          onBlur={ () => this.setState({ focused: false }) }
          placeholder={this.props.txtHint}
          placeholderTextColor={this.props.placeholderTextColor}
          onSubmitEditing={this.props.onSubmitEditing}
          returnKeyType={this.props.returnKeyType}
          secureTextEntry={this.props.isPassword}
          editable={this.props.editable}
        />
      </View>
    );
  }

  renderTxtLabel = () => {
    if (this.props.txtLabel) {
      return (
        <Text style={this.state.focused ? this.props.labelStyleFocus : this.props.labelStyle}>
          {this.props.txtLabel}
        </Text>
      );
    }
    return null;
  }
}

export default CustomTextInput;
