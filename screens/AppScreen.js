import React, { Component } from 'react';
import { Alert, Button, TextInput, View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';

export default class AppScreen extends Component {
constructor(props) {
  super(props);

  this.state = {
    username: '',
    password: '',
  };
}

onLogin() {
  const { username, password } = this.state;

  Alert.alert('Credentials', `${username} + ${password}`);
}

render() {
  const resizeMode = 'center';
  return (

    <View style={styles.container}>
    <Image style={{zIndex:-1,height: 300, width:300, marginTop: 150, marginBottom: 0,}} source={require('../assets/images/A.png')} />

      <TextInput
        value={this.state.username}
        onChangeText={(username) => this.setState({ username })}
        placeholder={'Email'}
        style={styles.textBox}
      />
      <TextInput
        value={this.state.password}
        onChangeText={(password) => this.setState({ password })}
        placeholder={'Password'}
        secureTextEntry={true}
        style={styles.textBox}
      />



     <View style={styles.ingroup}>
       <TouchableOpacity>
         <View style={styles.button}>
           <Text style={styles.buttonText}>Login</Text>
         </View>
       </TouchableOpacity>
       <TouchableOpacity>
         <View style={styles.button}>
           <Text style={styles.buttonText}>Signup</Text>
         </View>
       </TouchableOpacity>
     </View>
   </View>
  );
}
}

const styles = StyleSheet.create({

//  header: {
//    fontSize: 40,
//    marginTop: 80,
//    marginBottom:80,
//    fontWeight: 'bold',
//  },
container: {
  flex: 1,
  alignItems: 'center',

  backgroundColor: '#97D0EC',
},
textBox: {
  width: 200,
  height: 50,
  padding: 10,
  borderWidth: 1,
  borderColor: 'black',
  backgroundColor: 'white',
  borderRadius: 20,
  marginBottom: 20,
  fontSize: 20,
  zIndex: 0
},
button: {
  padding: 12,
  borderWidth: 1,
  backgroundColor: 'black',
  marginBottom: 10,
  marginLeft: 10,
  marginRight: 10,
  borderRadius: 10,
  height: 50,
  width: 100,
  alignItems: 'center',
  zIndex: 0
},
buttonText: {
  color: 'white',
  fontWeight: 'bold',
  fontSize: 20,
  zIndex: 0
},
ingroup: {
   flex: 1,
   padding: 0,
   margin:0,
   flexDirection: 'row',
   justifyContent: 'space-between',
   height: 30,
   zIndex: 0
},
});