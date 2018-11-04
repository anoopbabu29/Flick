import { Image,
         Text,
         StyleSheet,
        } from 'react-native';
import React from 'react';


export default class ViewScreen extends React.Component {

    render() {
    
      return (
          <View style={styles.Container}>
          <Text> Image Results</Text>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/demoPic.jpg')
                  : require('../assets/images/demoPic.jpg')
              }
              style={styles.image}
            />
          </View>
       
      );
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#97D0EC',
      },
      header: {
          flex: 1,
          backgroundColor: '#97D0EC',
      },
      image: {
          width: 400,
          height: 400,
      },
    },
);
