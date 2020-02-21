import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

export default class SecondPage extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('Title', 'left Rigt Custom'),
      headerStyle: {
        backgroundColor: navigation.getParam('BackgroundColor', 'red'),
      },
      headerTintColor: navigation.getParam('HeaderTintColor', '#fff'),
      headerRight: (
        <TouchableOpacity onPress={() => alert('Right')}>
          <Text
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              color: 'white',
            }}>
            Right Menu
          </Text>
        </TouchableOpacity>
      ),
      headerLeft: (
        <TouchableOpacity onPress={() => alert('Right')}>
          <Text
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              color: 'white',
            }}>
            Left Menu
          </Text>
        </TouchableOpacity>
      ),
    };
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text> Left and Right Options</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
