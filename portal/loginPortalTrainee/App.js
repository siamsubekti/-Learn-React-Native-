import React, {Component, Fragment} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import LoginScreen from './src/screens/login/index';
import HomeScreen from './src/screens/home/index';


const DrawerNavigation = createDrawerNavigator(
  {
    HomeScreen: {screen: HomeScreen},
  },
  {
    initialRouteName: 'HomeScreen',
  },
);

const Navigator = createStackNavigator(
  {
    LoginScreen: LoginScreen,
    DrawerNavigation,
  },
  {
    initialRouteName: 'LoginScreen',
    headerMode: 'none',
  },
);
const AppContainer = createAppContainer(Navigator);

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <AppContainer />
      </Fragment>
    );
  }
}
