import React, {Component} from 'react';
import {View, Button, TextInput} from 'react-native';

export default class Insert extends Component {
  render() {
    return (
      <View>
        <TextInput placeholder={'Name'} />
        <TextInput placeholder={'Tag'} />
        <TextInput placeholder={'Content'} />
        <Button title={'SAVE'} />
      </View>
    );
  }
}
