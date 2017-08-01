import React, { Component } from 'react';
import {StyleSheet, TextInput, View, Text, TouchableOpacity} from 'react-native';
import {StackNavigator} from 'react-navigation'

export default class LoginForm extends React.Component {

  _onRegister = () => {
    this.props.navigation.navigate('Register')
  }
  _onLostPassword = () => {
    this.props.navigation.navigate('LostPassword')
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput placeholder="用户名" keyboardType="email-address" autoCapitalize="none" autoCorrect={false} returnKeyType="next" style={styles.input} onSubmitEditing={() => this.passwordInput.focus()}/>
        <TextInput placeholder="密码" returnKeyType="go" style={styles.input} ref={(input) => this.passwordInput = input} secureTextEntry/>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this._onRegister} style={styles.button}>
            <Text style={styles.buttonText}>新用户注册</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._onLostPassword} style={styles.button}>
            <Text style={styles.buttonText}>找回密码</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.wcButton}>
            <Text style={styles.buttonText}>微信登陆</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.qqButton}>
            <Text style={styles.buttonText}>QQ登陆</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.apButton}>
            <Text style={styles.buttonText}>支付宝登陆</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  input: {
    width: 270,
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 20,
    color: '#FFF',
    paddingHorizontal: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  button:{
    backgroundColor: '#16a085',
    width: 120,
    paddingVertical: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700',
  },
  wcButton: {
    backgroundColor: '#7bb32e',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 64,
  },
  apButton: {
    backgroundColor: '#0e9dec',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 64,
  },
  qqButton: {
    backgroundColor: '#0e9dec',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 64,
  }
});
