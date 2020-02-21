import React, {useState} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import Name from './Name';
import Template from './Template';

export default function App() {

  const [outputText, setOutPutText] = useState('Hello');

  return (
    <View style={styles.container}>
      <Name />
      <Text>{outputText}</Text>
      <Button title="Click" onPress={() => setOutPutText('You Click me')}/>
      <Template />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
