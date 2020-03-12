/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Button, Text, View, StyleSheet, TextInput, Image} from 'react-native';
import {Card} from 'react-native-elements';
// import LinearGradient from 'react-native-linear-gradient';

export default class LoginScreen extends Component {
  onLogin = () => {
    this.props.navigation.navigate('HomeScreen');
  };

  render() {
    return (
      <View style={styles.login}>
        <View>
          <Card style={{width: 200, height: 300}}>
            {/* <Card.Media
              image={<Image source={require('../../assets/enigmacamp.jpeg')} />}
              overlay
            /> */}
            <TextInput style={styles.textInput} placeholder="username" />
            <TextInput style={styles.textInput} placeholder="password" />
            <Button title="Login">Login</Button>
          </Card>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  login: {
    flex: 1,
    backgroundColor: 'red',
  },
  container: {
    flex: 1,
  },
});
