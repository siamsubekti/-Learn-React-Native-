import React, {useState} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

export default function App () {
    
    return (
        <View style={styles.container}>
        <Text style={styles.headerStyle}>Hello World</Text>
        <View style={styles.elementContainer}>
          <View style={{width : 50, height : 50, backgroundColor: 'green'}}></View>
          <View style={{width : 50, height : 50, backgroundColor: 'blue'}}></View>
          <View style={{width : 50, height : 50, backgroundColor: 'red'}}></View>
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerStyle : {
      fontSize : 24,
      textAlign : 'center',
      fontWeight : '100',
      marginBottom : 24,
      marginTop : 50
  },
  elementContainer : {
    flex : 1,
    flexDirection : 'column',
    justifyContent : 'space-around',
    marginLeft : 24,
    marginRight : 24,
    marginBottom : 24
  }

});