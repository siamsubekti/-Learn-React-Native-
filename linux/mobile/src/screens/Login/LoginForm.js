import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Alert } from 'react-native';
import { Item, Input, Form, Label, Button, Thumbnail, Text } from 'native-base';

import BgImage from '../../images/wallpaper.png';
import Logo from '../../images/logo.jpg';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null
    }
  }

  static navigationOptions = {
    header: null
  }

  onLogin = () => {
    this.props.navigation.navigate('OperatorPos');
  }
  onLoginStorage = () => {
    this.props.navigation.navigate('OperatorStorage');
  }

  handleClick() {
    const { email, password } = this.state;
    if (email === null) {
      Alert.alert(
        'Notification',
        'Username Required !',
      );
      return;
    }
    if (password === null) {
      Alert.alert(
        'Notification',
        'Password Required !',
      );
      return;
    }

    if (email === "operatorpos" && password === "operator") {
      this.onLogin();
      return;
    }
    
    else if (email === "operatorstorage" && password === "operator") {
      this.onLoginStorage();
      return;
    }
    else {
      Alert.alert(
        'Notification',
        'Login Failed !',
      );
      return;
    }
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <Image style={styles.bgImageStyle} source={BgImage} />
        <View style={styles.logoStyle}>
          <Thumbnail large source={Logo} />
          <Text style={styles.textLogoStyle}>G.E.D</Text>
        </View>
        <Form style={styles.formLoginStyle}>
          <Item>
            {/* <Label>
              <Text style={styles.inputStyle} au>Username</Text>
            </Label> */}
            <Input style={styles.inputStyle}
              value={this.state.email} onChangeText={email => this.setState({ email })} placeholder="username"/>
          </Item>
          <Item>
            {/* <Label>
              <Text style={styles.inputStyle}>Password</Text>
            </Label> */}
            <Input style={styles.inputStyle} secureTextEntry={true}
              style={styles.inputStyle}
              value={this.state.password} onChangeText={password => this.setState({ password })} placeholder="password"/>
          </Item>
        </Form>
        <Button onPress={this.handleClick.bind(this)} block info style={styles.footerBottomStyle}>
         <Text style={{fontSize:20}}>Sign In</Text>
        </Button>
        <View style={styles.footersignUpStyle}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('RegisterForm')}>
            <Text style={styles.signUpStyle}>
              Don't have an account yet? Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
  bgImageStyle: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  logoStyle: {
    marginTop: 70,
    marginBottom: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textLogoStyle: {
    fontSize: 30,
    color: 'black',
    fontStyle:'normal',
    
  },
  formLoginStyle: {
    marginTop: -30,
    paddingLeft: 10,
    paddingRight: 30,
    backgroundColor:'#FFF8DC',
    marginLeft:30,
    marginRight:30,
    borderRadius:10
  },
  inputStyle: {
    color: 'black',
    marginBottom: 6,
    fontSize: 18,
  },
  footerBottomStyle: {
    marginTop: 50,
    paddingTop: 10,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor:'#D2691E',
  },
  footersignUpStyle: {
    marginTop: 25,
    alignItems: 'center',
    
  },
  signUpStyle: {
    color: 'black',
    fontSize: 14
  }
})

export default LoginForm;