import React, { Component } from 'react';
import { TouchableWithoutFeedback, Keyboard, Alert, Button, TextInput, View, StyleSheet, TouchableOpacity, Text, Image, Animated, LayoutAnimation, NativeModules } from 'react-native';
import Draggable from 'react-native-draggable';
import {LATITUDE, LONGITUDE, AnimatedRegion} from "react-native-maps";

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

export default class App extends Component {
  static navigationOptions = {
    title: 'Upload',
  };
  
  constructor(props) {
    super(props);
    
    this.state = {
      wOpt: 200,
      hOpt: 100,
      imDOpt: 50,
      isOpt: true,
      postW: 0,
      postH: 0,
      isPost: false,
      Drag: 0,
    }
  }


  _pOpt = () => {
    if(this.state.isOpt) {
      LayoutAnimation.spring();
      this.setState({postW: 0, postH: 0, isOpt: false, imDOpt: 0})
    }
    else {
      LayoutAnimation.spring();
      this.setState({postW: 100, postH: 200, isOpt: false, imDOpt: 0})
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

  onPost = () => {
    if(this.state.isOpt) {
      LayoutAnimation.spring();
      this.setState({wOpt: 0, hOpt: 0, isOpt: false, imDOpt: 0, postW: 300, postH: 300, isPost:true})
    }
    else {
      LayoutAnimation.spring();
      this.setState({imDOpt: 50, wOpt: 200, hOpt: 100, isOpt: true, postW: 0, postH: 0, isPost:false})
    }  
  }

  onPostText = () => {
    LayoutAnimation.spring();
    this.setState({Drag:30,imDOpt:0,wOpt: 0, hOpt: 0, isOpt:false, postW: 0, postH: 0, isPost: false});
  }

  onCam = () => {

  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container} >
        <View style={[styles.box, {width: this.state.wOpt, height: this.state.hOpt}]}>
          <TouchableOpacity onPress={this.onPost}>
            {
            // <div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from 
            // <a>href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed 
            // by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 
            // 3.0" target="_blank">CC 3.0 BY</a></div>
            }
            <Image source={require('./post.png')} style={[styles.image, {height: this.state.imDOpt, width: this.state.imDOpt}]}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onCam}>
            {
            // <div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a 
            // href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by 
            // <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" 
            // target="_blank">CC 3.0 BY</a></div>
            }
            <Image source={require('./photograph.png')} style={[styles.image, {height: this.state.imDOpt, width: this.state.imDOpt}]}/>
          </TouchableOpacity>
        </View>
        <View style={(this.state.isPost) ? [styles.box, {width: 300, height: 400, alignItems:'center',
    justifyContent: 'center'}] : {}}>
          <View style={{height: this.state.postH, width: this.state.postW}}>
            <TextInput
              value={this.state.username}
              onChangeText={(username) => this.setState({ username })}
              style= {(this.state.isPost) ? styles.textBox : {}}
              placeholder="Post a status"
              multiline={true}
            />
            
            <TouchableOpacity onPress={this.onPostText}>
              <View style={(this.state.isPost) ? styles.button : {}}>
                <Text style= {(this.state.isPost) ? styles.buttonText : {}}>Post a Flick</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={this.onPost}>
              <View style={(this.state.isPost) ? styles.button : {}}>
                <Text style= {(this.state.isPost) ? styles.buttonText : {}}>Cancel</Text>
              </View>
            </TouchableOpacity>
          </View>

          <Draggable renderSize={this.state.Drag} renderColor={'black'} reverse={true} renderShape={'circle'} renderText={'F'} style={{color:'blue', fontSize:20, height: 100, width: 100}} offsetX={0} offsetY={0} z={-1} x={0} y={0}>

          </Draggable>

        </View>
        
      </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#97D0EC'
  },
  box: {
    height: 200,
    width: 200,
    borderRadius: 110,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    alignItems:'center',
    justifyContent: 'center',
    marginLeft: 20,
  },
  textBox: {
    marginTop: 25,
    width: 200,
    height: 125,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white',
    borderRadius: 20,
    marginBottom: 20,
    fontSize: 20,
    alignSelf: 'center',
  },
  button: {
    padding: 12,
    borderWidth: 1,
    backgroundColor: 'black',
    marginBottom: 10,
    borderRadius: 10,
    width: 200,
    alignSelf: 'center'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  slideView:{

  }
});
