import React, {Component} from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from "react-native";
import QRcode from "react-native-qrcode-svg";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue : '',
      valueForQRCode: '',
    };
  }
  getTextInputValue = ()=> {
    this.SetState({
      valueForQRCode: this.state.inputValue
    });
  };
  
  render() {
    return (
      <View style={style.MainContainer}>
        <QRcode
        value={this.state.valueForQRCode ? this.state.valueForQRCode : 'NA'}
        size={250}
        color="black"
        backgroundColor="white"
        logo{{
          url:'https://raw.githubusercontent.com/AboutReact/sampleresource/master/logosmalltransparen.png',
        }}
        logoSize={30}
        logoMargin={2}
        logoBorderRadius={15}
        logoBackgroundColor="yellow"/>
        <TextInput
        style={styles.TextInputStyle}
        onChangeText={text => this.setState({
          inputValue: text
        })}
        underlineColorAndroid="transparent"
        placeholder="Enter text to generate QRcode"/>
        <TouchableOpacity
        onPress={this.getTextInputValue}
        activeOpacity={0.7}
        style={styles.button}>
        <Text style={style.TextStyle}> Generate QRcode</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
    paddingTop: 40,
  },
  TextInputStyle: {
    width: '100%',
    height: 40,
    marginTop: 20,
    borderWidth: 1,
    textAlign: 'center',
  },
  button: {
    width: '100%',
    paddingTop: 8,
    marginTop: 10,
    paddingBottom: 8,
    backgroundColor: '#F44336',
    marginBottom: 20,
  },
  TextStyle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
});

