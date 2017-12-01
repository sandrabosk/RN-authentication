import React, { Component } from 'react';
// import firebase needs to go before other imports
import firebase from 'firebase';
import { View } from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBl5n6NbQT8hFxqnpEX0Gefcoc_al8T-Os',
      authDomain: 'rn-auth-8c459.firebaseapp.com',
      databaseURL: 'https://rn-auth-8c459.firebaseio.com',
      projectId: 'rn-auth-8c459',
      storageBucket: 'rn-auth-8c459.appspot.com',
      messagingSenderId: '573448177503'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication"/>
        <LoginForm />
      </View>
    );
  }
}

export default App;
