/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

export default class App extends Component{
  render(){
    return(
      <div>
        <h1 style={styles.container}>hello world</h1>
      </div>
    );
  
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent : "center"
  }
});


