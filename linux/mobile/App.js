import React, {Component} from 'react';
<<<<<<< HEAD
import {StyleSheet, Platform, Text, View} from 'react-native';
import LoginForm from './src/components/LoginForm';
import RegisterForm from './src/components/Regform';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import HomeScreen from './src/screens/home';
import CustomHeader from './src/components/CustomHeader/Drawer';
import Fetch from './src/components/SenderForm';
import UsersScreen from './src/screens/users';
import MyComponent from './src/components/TrakingTable';
import {store} from './src/config/store';
import {Provider} from 'react-redux';

const DrawNavigator = createDrawerNavigator(
  {
    HomeScreen: {screen: HomeScreen},
  },
  {
    initialRouteName: 'HomeScreen',
=======
import { createDrawerNavigator } from 'react-navigation-drawer';
import HomeScreen from './src/screens/OperatorPos/Home/HomeScreen';
import LoginForm from './src/screens/Login/LoginForm';
import RegisterForm from './src/screens/Login/Regform';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import CustomHeader from './src/customeDrawer/Drawer';
import OperatorStorageScreen from './src/screens/OperatorStorage';
import DataListScreen from './src/screens/data/datalist';
import DataScreen from './src/screens/data/data';
import { Root } from 'native-base';
import { store } from './src/config/store';
import { Provider } from 'react-redux';


const DrawNavigator = createDrawerNavigator(
  {
    OperatorPos: {screen: HomeScreen},
    OperatorStorage: {screen: OperatorStorageScreen},
    ListData:{screen: DataListScreen},
    Logout:{screen: LoginForm}
  },
  {
    // initialRouteName: 'OperatorPos',
    // initialRouteName: 'OperatorStorage',
>>>>>>> 2847803e70afcd8f4a9f99500af49eec2b82b0ed
    contentComponent: props => <CustomHeader {...props} />,
  },
);

<<<<<<< HEAD
const AppStackNavigator = createStackNavigator(
  {
    LoginForm: LoginForm,
    RegisterForm: RegisterForm,
    DrawNavigator,
    Fetch,
    MyComponent,
    UsersScreen,
  },
  {
    initialRouteName: 'LoginForm',
    headerMode: 'none',
  },
);

const AppContainer = createAppContainer(AppStackNavigator);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
=======
const AppStackNavigator = createStackNavigator({
  LoginForm: LoginForm,
  RegisterForm: RegisterForm,
  DataScreen,
  DrawNavigator
},{
  initialRouteName:'LoginForm',
  headerMode:'none',
});

const AppContainer = createAppContainer(AppStackNavigator);

export default class App extends Component{
  render(){
    return(
      <Root>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </Root>
    )
  }
}
>>>>>>> 2847803e70afcd8f4a9f99500af49eec2b82b0ed
