import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Image, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import * as Firebase from 'firebase';

var outline = 'black';
var test1 = false;
var test2 = false;


if (!Firebase.apps.length) {
Firebase.initializeApp({
  apiKey: "AIzaSyCQ5SvDtODIcow2dDLC9rajI3S0g37Gq5s",
  authDomain: "flickauth.firebaseapp.com",
  databaseURL: "https://flickauth.firebaseio.com",
  storageBucket: "flickauth.appspot.com"
})};

export default class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      isLoadingComplete: false,
      loggedIn: false,
      username: '',
      password: '',
    };
  }
  
  state = {
    isLoadingComplete: false,
    loggedIn: false,
    username: '',
    password: '',
  };


  handleLoggedIn = () => {
    if(test1)
      this.setState({loggedIn: true, isLoadingComplete: true});
  };

  handleSignedUp = () => {
    if(test2)
      this.setState({loggedIn: true, isLoadingComplete: true});
  };

  onLogin() {
    const { username, password } = this.state;
  
    Alert.alert('Credentials', `${username} + ${password}`);
  }
  
  logIn(){
    var succLogin = true;
    let email = this.state.username;
    let password = this.state.password;
    let auth = Firebase.auth();
    auth.signInWithEmailAndPassword(email, password).then(function(){
      if(succLogin) {
        //Redirect to Home Page
        outline = 'black';
        succLogin = true;
        test1 = true;
        Alert.alert('You are ready to be Logged in!');
      }
    }).catch(() => this.logInErr);
    
    return test1;
  }
  
  logInErr(){
    outline = 'red';
    Alert.alert('Error in Logging in. Please Try Again.');
  }
  
  signIn(){
    var succSignIn = true;
    let email = this.state.username;
    let password = this.state.password;
    let auth = Firebase.auth();
    auth.createUserWithEmailAndPassword(email, password).then(function(){
      if(succSignIn) {
        //Redirect to Home Page
        test2 = true;
        Alert.alert('You are ready to be Signed Up!');
      }
    }).catch(() => this.signUpErr());

    return test2;
  }
  
  signUpErr(){
    outline = "red";
    test2 = false
    Alert.alert('Error in Signing Up. Please Try Again.');
  }
  
  handleChangeUN = username => {
    this.setState({username});
    //this.logIn();
    
  }

  handleChangePass = password => {
    this.setState({password});
    //this.signIn();
    
  }

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen && !this.state.loggedIn) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } 
    else {
      if (!this.state.loggedIn) {
        return (
  
          <View style={styles.container1}>
          <Image style={{zIndex:-1,height: 300, width:300, marginTop: 100, marginBottom: 0,}} source={require('./assets/images/A.png')} />
      
            <TextInput
              value={this.state.username}
              onChangeText={this.handleChangeUN}
              placeholder={'Email'}
              style={styles.textBox}
            />
            <TextInput
              value={this.state.password}
              onChangeText={this.handleChangePass}

              placeholder={'Password'}
              secureTextEntry={true}
              style={styles.textBox}
            />
      
           <View style={styles.ingroup}>
             <TouchableOpacity>
               <View style={styles.button}>
                 <Text style={styles.buttonText} onPress={this.logIn.bind(this)}>Login</Text>
               </View>
             </TouchableOpacity>
             <TouchableOpacity>
               <View style={styles.button}>
                 <Text style={styles.buttonText} onPress={this.signIn.bind(this)}>Signup</Text>
               </View>
             </TouchableOpacity>
           </View>

           <View style={styles.sub}>
              <Text style={styles.buttonText} onPress={this.handleLoggedIn}>Submit</Text>
            </View>
         </View>
        );
      }
      else{
        return (
          <View style={styles.container}>
            {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
            <AppNavigator />
          </View>
        );
      }
      
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true, loggedIn: true});
  };

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container1: {
    flex: 1,
    alignItems: 'center',
  
    backgroundColor: '#97D0EC',
  },
  textBox: {
    width: 200,
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: outline,
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
    marginBottom: 0,
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
  sub: {
    position: 'absolute',
    padding: 12,
    borderWidth: 1,
    backgroundColor: 'black',
    bottom: 100,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
    height: 50,
    width: 100,
    alignItems: 'center',
    zIndex: 0
  }
});
