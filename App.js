import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import XScreen from './screens/XScreen'
import XXScreen from './screens/XXScreen'
import XXXScreen from './screens/XXXScreen'
import XXXXScreen from './screens/XXXXScreen'
class App extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <XXXXScreen/>
      </View>
    );
  }  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App

