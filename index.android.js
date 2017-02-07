/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class AwesomeProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>
            Azis Abdul Bachar
        </Text>
        <Image
            style={{width: 300, height: 300}}
            source={{uri: 'https://scontent.fcgk1-1.fna.fbcdn.net/v/t1.0-9/15073389_909791705817589_3818015644248990576_n.jpg?oh=717b74bf2d4299471fdb7a03cd835e27&oe=5900DEE2'}}
        />
        <Text style={styles.instructions}>
            Batch #2 - Basilischi
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  instructions: {
    fontSize: 25,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
