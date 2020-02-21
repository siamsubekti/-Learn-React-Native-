import React from 'react';
import { StyleSheet, Text, View, Button, Image, Alert} from 'react-native';

export default function App () {
    return (
        <View style={styles.container}>
        <View >
          <Image
          style={{width:420, height:300, marginTop: 24}} source={{uri:'https://static.tiket.photos/image/upload/v1562230005/eventConvertedImages/2019/07/04/452db52c-eba2-41ff-b94e-d66665537120dad1e02e1a95f009714988595e08d3a4.jpg'}}/>
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.text}>Bromo</Text>
            <Button 
              title="Like me"
              onPress={() => Alert.alert('Thanks for like')}/>
        </View>
        <View style={styles.elementContainer}>
          <View style={{width : 50, height : 50, backgroundColor: 'green', padding : 50}}></View>
          <View style={{width : 50, height : 50, backgroundColor: 'blue', padding : 50}}></View>
        </View>
        <View style={styles.elementContainer2}>
          <View style={{width : 50, height : 50, backgroundColor: 'red', padding : 50}}></View>
          <View style={{width : 50, height : 50, backgroundColor: 'grey', padding : 50}}></View>
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button : {
    padding : 10,
    marginRight   : 10,
    marginBottom: 50
  },
  elementContainer : {
    flex : 1,
    flexDirection : 'row',
    justifyContent : 'space-around',
    marginLeft : 24,
    marginRight : 24
  },
  elementContainer2 : {
    flex : 1,
    flexDirection : 'row',
    justifyContent: 'space-around',
    marginLeft : 24,
    marginRight : 24,
    margin : 20
  },
  text : {
    fontSize : 40,
    fontWeight : 'bold',
    fontFamily: 'sans-serif',
    marginLeft : 10
  },
  textContainer : {
    // flex : 1,
    flexDirection : 'row',
    justifyContent: 'space-between',
    margin : 20
  }

});