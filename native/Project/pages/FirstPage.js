import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

class FirstPage extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      header: (
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            height: 45,
            marginTop: 20,
            backgroundColor: 'red',
            justifyContent: 'center',
          }}>
          <Text
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              color: 'white',
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 18,
            }}>
            This is Custom Header
          </Text>
        </View>
      ),
    };
  };
  render() {
    // eslint-disable-next-line no-unused-vars
    const {navigate} = this.props.navigation;
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <View style={{flex: 1, backgroundColor: '#ffdffd'}}>
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            This is example Custom header
          </Text>
          <Button
            title="Click left and right header"
            onPress={() => {
              this.props.navigation.navigate('SecondPage');
            }}
          />
        </View>
      </View>
    );
  }
}

export default FirstPage;

