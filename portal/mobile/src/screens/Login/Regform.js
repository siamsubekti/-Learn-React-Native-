import React, { Component } from 'react';

import { StyleSheet, View, TouchableOpacity, Image, Platform } from 'react-native';
import {Item, Input, Form, Button, Thumbnail, Text} from 'native-base';

import Bgimage from '../../images/wallpaper.png';
import Logo from '../../images/logo.jpg';
import Icon from 'react-native-vector-icons/Ionicons';


class RegisterForm extends Component{
    constructor(props){
        super(props);
    }
    static navigationOptions={
        header: null
      }
    render(){
        return(
            <View style={styles.containerStyle}>
        <Image style={styles.bgImageStyle} source={Bgimage}/>
      <View style={styles.logoStyle}>
        <Thumbnail large source={Logo}/>
        <Text style={styles.textLogoStyle}>G.E.D</Text>
      </View>
                <Form style={styles.formRegister}>
                    <Item style={styles.itemStyle}>
                        <Icon name='md-person' size={26} color={'black'}/>
                        <Input style={styles.inputStyle}  placeholder="  Enter you're username"/>
                    </Item>
                    <Item style={styles.itemStyle}>
                        <Icon name= "md-lock" size={26} color={'black'} />
                        <Input style={styles.inputStyle} secureTextEntry={true} placeholder="  Enter you're password"/>
                    </Item>
                    <Item style={styles.itemStyle}>
                        <Icon name="md-mail" size={26} color={'black'} />
                        <Input style={styles.inputStyle}  placeholder="  Enter you're email"/>
                    </Item>
                </Form>
                <Button block info style={styles.footerBottomStyle}>
                    <Text>Register</Text>
                </Button>
                <View style={styles.footerSignUpStyle}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('LoginForm')}>
                        <Text style={styles.signUpStyle}>
                            Already have an account? BACK
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle:{
      flex:1,
    },
    bgImageStyle:{
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      width: '100%',
      height: '100%',
    },
    logoStyle:{
      marginTop: 70,
      marginBottom: 80,
      alignItems: 'center',
      justifyContent: 'center',
    },
    textLogoStyle:{
      fontSize: 30,
    color: 'black',
    fontStyle:'normal',
    },
    formLoginStyle:{
      marginTop:-30,
      paddingLeft:10,
      paddingRight:30,
    },
    inputStyle:{
      color:'white',
      marginBottom: 6,
      fontSize: 14,
    },
    footerBottomStyle:{
      marginTop:26,
      paddingTop: 10,
      marginLeft:16,
      marginRight:16,
      backgroundColor:'#D2691E'
    },
    footersignUpStyle:{
      marginTop: 25,
      alignItems: 'center',
    },
    signUpStyle:{
      color:'black',
      fontSize: 16,
      marginLeft:20

    },
    formRegister:{
      marginTop: -30,
      paddingLeft: 10,
      paddingRight: 30,
      backgroundColor:'#FFF8DC',
      marginLeft:30,
      marginRight:30,
      borderRadius:10
    }
  })
  

export default RegisterForm;