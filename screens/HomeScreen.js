import React, { Component } from 'react';
import { Alert, Button, TextInput, View, StyleSheet, TouchableOpacity, Text, Image, Animated } from 'react-native';
import {LATITUDE, LONGITUDE, AnimatedRegion} from "react-native-maps";

export default class App extends Component {
  static navigationOptions = {
    title: 'Upload',
  };

  
  constructor(props) {
    super(props);
    
    this.state = {
      y: new Animated.Value(0),
      post: '',
      tags: [''],
      latitude: LATITUDE,
      longitude: LONGITUDE,
      routeCoordinates: [],
      distanceTravelled: 0,
      prevLatLng: {},
      coordinate: new AnimatedRegion({
        latitude: LATITUDE,
        longitude: LONGITUDE
      })
    }
  }

  slide = () => {
    Animated.spring(this.state.y, {
      toValue: 0,
    }).start();
    this.setState({
      visible: true,
    });
  };

  
  onLogin() {
    const { post } = this.state;
  }

  render() {
    return (
    
      <View style={styles.container}>
        <Animated.View style={[styles.slideView, {
            transform: [
              {
                translateY: this.state.y
              }
            ]
          }]}>
          <TextInput
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
          style={styles.textBox}
          placeholder="Post a status"
        />
        </Animated.View>
        

        {/* {
          // <div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from 
          // <a>href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed 
          // by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 
          // 3.0" target="_blank">CC 3.0 BY</a></div>
          }
          <Image source={require('../assets/images/demoPic.jpg')} style={styles.image}/>
          {
          // <div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a 
          // href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by 
          // <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" 
          // target="_blank">CC 3.0 BY</a></div>
          }
          <Image source={require('../assets/images/camera.png')} style={styles.image}/> */}

        
       <TouchableOpacity>
         <View style={styles.button}>
           <Text style= {styles.buttonText} onPress={()=>{}}>Post a Flick</Text>
         </View>
       </TouchableOpacity>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',

    backgroundColor: '#97D0EC',
  },
  textBox: {
    marginTop: 200,
    width: 300,
    height: 100,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white',
    borderRadius: 20,
    marginBottom: 20,
    fontSize: 20,
  },
  textBox2: {
    marginTop: 0,
    width: 200,
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white',
    borderRadius: 20,
    marginBottom: 20,
    fontSize: 20,
  },
  button: {
    padding: 12,
    borderWidth: 1,
    backgroundColor: 'black',
    marginBottom: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  slideView:{

  }
});
