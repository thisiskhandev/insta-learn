import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Container} from '../components/common/Container';
import Logo from '../components/common/Logo';
import Flare from '../components/common/Flare';

const Login = () => {
  return (
    <Container>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          // backgroundColor: 'red',
        }}>
        <Logo />
        <Flare />
        <Text style={styles.heading}>Let's get started</Text>
        <Text style={styles.txt}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </Text>
        <TouchableOpacity>
          <Text>Create Account</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default Login;

var styles = StyleSheet.create({
  heading: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  txt: {
    opacity: 0.3,
    fontSize: 17,
    textAlign: 'center',
    color: '#fff',
    marginTop: 10,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
