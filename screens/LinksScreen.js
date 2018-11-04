import React from 'react';
import { ScrollView, StyleSheet, Text, Image, Dimensions, TextInput, Card, View, Button, TouchableOpacity } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
//import { ExpoLinksView } from '@expo/samples';
import Icon from 'react-native-vector-icons/FontAwesome';



export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'View',
  };



  render() {
    return (
      
      <ScrollView style={styles.container}>
        <TextInput style={{alignSelf: 'center',width:'95%', fontSize:25, marginTop: 5, marginBottom: 5, paddingTop: 5, paddingBottom:5, backgroundColor: "white" }} placeholder="Search Tags"/>
            <View style={styles.card}>
              <Text style={styles.name}>Anon</Text>
              <Text style={styles.descr}>This is the best pic. I had to capture it</Text>
              <Image
                source={
                  __DEV__
                    ? require('../assets/images/demoPic.jpg')
                    : require('../assets/images/demoPic.jpg')
                }
                style={styles.image}
              />
              
              <TouchableOpacity>
              <Text 
              style={styles.like}
              >Like <Icon name="thumbs-up" color="gray" size={20}></Icon></Text>
              </TouchableOpacity>
              
            </View>
            <View style={styles.card}>
              <Text style={styles.name}>Anon</Text>
              <Text style={styles.descr}>This is the best pic. I had to capture it</Text>
              <Image
                source={
                  __DEV__
                    ? require('../assets/images/demoPic.jpg')
                    : require('../assets/images/demoPic.jpg')
                }
                style={styles.image}
              />
              
              <TouchableOpacity>
              <Text 
              style={styles.like}
              >Like <Icon name="thumbs-up" color="gray" size={20}></Icon></Text>
              </TouchableOpacity>
              
            </View>
            <View style={styles.card}>
              <Text style={styles.name}>Anon</Text>
              <Text style={styles.descr}>This is the best pic. I had to capture it</Text>
              <Image
                source={
                  __DEV__
                    ? require('../assets/images/demoPic.jpg')
                    : require('../assets/images/demoPic.jpg')
                }
                style={styles.image}
              />
              
              <TouchableOpacity>
              <Text 
              style={styles.like}
              >Like <Icon name="thumbs-up" color="gray" size={20}></Icon></Text>
              </TouchableOpacity>
              
            </View>
            
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  name: {
    fontSize: 20, 
    paddingLeft: 40, 
    fontWeight: 'bold', 
    marginBottom: 10
  },
  card: {
    backgroundColor:'white', 
    width: '100%', 
    marginTop: 10, 
    marginBottom: 30, 
    paddingTop: 10
  },
  descr: {
    fontSize: 18, 
    alignContent:'center', 
    marginLeft:30, 
    marginRight: 25, 
    marginTop: 0, 
    marginBottom: 5
  },
  like: {
    width:'100%', 
    paddingBottom: 10, 
    marginBottom: 5, 
    paddingTop: 10, 
    fontWeight: 'bold', 
    color: 'gray', 
    alignContent: 'center', 
    justifyContent: 'center', 
    alignSelf: 'center', 
    textAlign: 'center', 
    fontSize: 20
  },

  container: {
      flex: 1,
      backgroundColor: '#97D0EC',
    },
    header: {
        flex: 1,
        backgroundColor: '#97D0EC',
    },
    image: {
      alignSelf: 'center',
      width: wp('100%'),
      height: hp('50%'),

      borderColor: 'black',
      flexDirection: 'column',
      justifyContent: 'center',
      alignContent: 'center',
    },
  },
);
