import React, { Component } from 'react';
// import firebase needs to go before other imports
import firebase from 'firebase';
import { View } from 'react-native';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  // we are introducing new state here that will just track the changes of the state of the user
  state = { loggedIn: false };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBl5n6NbQT8hFxqnpEX0Gefcoc_al8T-Os',
      authDomain: 'rn-auth-8c459.firebaseapp.com',
      databaseURL: 'https://rn-auth-8c459.firebaseio.com',
      projectId: 'rn-auth-8c459',
      storageBucket: 'rn-auth-8c459.appspot.com',
      messagingSenderId: '573448177503'
    });
    // onAuthStateChanged is an event handler that accepts the function and shows us when the state of user has onAuthStateChanged
    // if the user is logged in or logged out
    firebase.auth().onAuthStateChanged((user) => {
      // when user signs in this argument user will represent whole user object
      // but if they sign out, then this user will be undefined or null
      if (user) {
        this.setState({ loggedIn: true });
      } else {
          this.setState({ loggedIn: false });
      }
    });
  }
  renderContent () {
      switch (this.state.loggedIn) {
        case true:
          return (
            <Button onPress={() => firebase.auth().signOut()}>
              Log out
            </Button>
          );
        case false:
          return <LoginForm />

        default:
          return <Spinner size="large" />
      }
  }
//ovo je neki komentar
  render() {
    return (
      <View>
        <Header headerText="Authentication"/>
        {/* <LoginForm /> */}
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
