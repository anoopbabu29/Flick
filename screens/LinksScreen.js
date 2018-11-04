import React from 'react';
import { ScrollView, StyleSheet, Text, Image, Dimensions } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
//import { ExpoLinksView } from '@expo/samples';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text> Image Results</Text>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/demoPic.jpg')
                  : require('../assets/images/demoPic.jpg')
              }
              style={styles.image}
            />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#97D0EC',
    },
    header: {
        flex: 1,
        backgroundColor: '#97D0EC',
    },
    image: {
      width: wp('100%'),
      height: hp('84.5%'),
      borderWidth: 2,
      borderColor: 'black',
      flexDirection: 'column',
      justifyContent: 'center',
      alignContent: 'center',
    },
  },
);
