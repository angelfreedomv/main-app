import React, { Component } from 'react'
import { StyleSheet, Text, Image, View } from 'react-native';


export default class Mine extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    return (
        <View style={styles.container}>
          <Text> 我的</Text>
        
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1abc9c'
  },

});
