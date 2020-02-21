import React, {Component} from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';
// import { styles } from "./styles";

export default class LoginScreen extends Component {
  onLogin = () => {
    this.props.navigation.navigate('HomeScreen');
  };

  render() {
    return (
      <View style={styles.login}>
        <Text style={styles.textLogin}>Klik</Text>
        <Button title="Login" onPress={this.onLogin} style={styles.button} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  login: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#219',
  },
  button: {
    color: '#FFFFFF',
    backgroundColor: '#090909',
  },
  textLogin: {
    color: '#FFFFFF',
  },
});
