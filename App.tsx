import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MainContainer from './src/components/MainContainer';


interface Props {}
export default class App extends Component<Props> {
  render() {
    return (
      <View>
        <MainContainer />
      </View>
    );
  }
}
