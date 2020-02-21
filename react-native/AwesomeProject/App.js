import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import LoginScreen from './src/screens/login';
import HomeScreen from './src/screens/home';
import UsersScreen from './src/screens/users';
import {Provider} from 'react-redux';
import 'react-native-gesture-handler';
import {store} from './src/config/store';
import CustomHeader from './src/CustomHeader/Drawer';

const DrawerNavigation = createDrawerNavigator(
  {
    HomeScreen: {screen: HomeScreen},
    UsersScreen: {screen: UsersScreen},
  },
  {
    initialRouteName: 'HomeScreen',
    contentComponent: props => <CustomHeader {...props} />,
  },
);

const Navigator = createStackNavigator(
  {
    Login: LoginScreen,
    DrawerNavigation,
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
  },
);

const AppContainer = createAppContainer(Navigator);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
