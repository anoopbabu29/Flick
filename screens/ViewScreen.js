import React from 'react';
import { ScrollView, StyleSheet, TextInput, View, Text } from 'react-native';
import { black } from 'ansi-colors';


export default class ViewScreen extends React.Component {
  static navigationOptions = {
    title: 'View',
  };

  render() {
    return (
        <View>
          <TextInput
          style={{height: 40,}}
          placeholder="Where would you like to find popular venues and events?"
          onChangeText={(text) => this.setState({text})}
        />
        </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  backgroundcontainer: {
    flex: 1,
    width: 1,
  }

});
