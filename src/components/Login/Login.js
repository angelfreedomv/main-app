import React from 'react';
import { StyleSheet, Text, Image, View, KeyboardAvoidingView } from 'react-native';

import LoginForm from './LoginForm'
export default class Login extends React.Component {

  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.formContainer}>
          <LoginForm />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1abc9c'
  },
  title: {
    color: '#FFF',
    fontSize: 30,
    opacity: 0.9
  },
  formContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
