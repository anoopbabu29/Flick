import React from 'react';
import { View, 
         Text, 
         StyleSheet
        } from 'react-native';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };

  render() {
    return (
      <View>
        <Text style={styles.option}>
          First name: Elijah
        </Text>
        <Text style={styles.option}>
          Last name: Elrod
        </Text>
        <Text style={styles.option}>
          Location: Tampa, FL
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#EDEDED',
  },
  }
);