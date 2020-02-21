import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
// import 'react-native-gesture-handler';

const App = createStackNavigator(
  {
    FirstPage: {screen: FirstPage},
    SecondPage: {screen: SecondPage},
  },
  {
    initialRouteName: 'FirstPage',
  },
);

export default createAppContainer(App);
