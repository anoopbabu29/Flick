import React from 'react';
import {
 Text,
 TextInput,
 View,
 StyleSheet,
 Button,
 KeyboardAvoidingView,
 Image,
 ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';



export default class App extends React.Component {


render() {

  return (
    <View>
      <Text style={styles.header}> SIGNUP </Text>

      <TextInput style={styles.login} placeholder="UserName"
       // leftIcon={
       //   <Icon
       //     name='user'
       //     size={24}
       //     color='black'
       //   />
       // }
       />
      <TextInput placeholder="Password" />

      <Button
         // icon={
         //   // <Icon
         //   //   name='arrow-right'
         //   //   size={15}
         //   //   color='white'
         //   // />
         // }
         onPress={() => {
           Alert.alert('You tapped the button!');
         }}
         title='BUTTON WITH ICON COMPONENT'
       />


    </View>
  );
}
}
const styles = StyleSheet.create({
   wrapper: {
   flex: 1,
   alignItems: 'center' ,
   justifyContent: 'center',
   marginTop: 100,
   width: 200,
   backgroundColor: 'rgba(0,0,0,0.4)',
   height: 80,
   alignItems: 'center',
 },

 login:{
   marginTop: 150,
   width: 130,
   backgroundColor: 'rgba(0,0,0,0.2)',
   height:80,
   alignItems:'center'
 },

backgroundcontainer: {
  alignItems: 'center',
  flex: 1,
  justifyContent: 'center',
},

header: {
  fontSize: 38,
  color: '#dc143c' ,
  fontWeight: 'bold',
  width: '100%',
  textAlign: 'center' ,
  marginTop: 100,
},

textBoxes: {
 height: 40,
 borderRadius: 45,


},


});