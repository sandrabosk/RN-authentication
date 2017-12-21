import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false };
  // we are changing this to email so it's pretty clear
  // that we are talking about email since we will have more than one text inputs

  // by default we set property loading to false since we will trigger it only when we attempt to log in

  // state = { text: '' };
  // we are not letting text exist inside the text input
  // setting the state like this we always know what is the value of text
  // by typing just this.setState.text

  onButtonPress() {
    const { email, password } = this.state;
    // this line of code clears the error in case we got "Authentication faild"
    // and now we are trying to sign in with real username and password
    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
    // when we execute this upper line of code, it returns the promise
    // with the promise in JS we handle asynchronous code
    // if the login fails, we will try to make an account for user:
    .catch(() => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      // if this fails (since it is still asynchronous function), we will chain
        .catch(() => {
          this.setState({ error: 'Authentication faild.' });
        });
    });
  }

  renderButton() {
    if(this.state.loading) {
      return <Spinner size="small" />
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Log In
      </Button>
    );
  }

  render() {
    return(
      <Card>
        <CardSection>
          <Input
            // we don't put any value for secureTextEntry prop which means it is undefined
            // and as such it's considered as false
            placeholder="user@gmail.com"
            label = "Email"
            // value={this.state.text}
            value={this.state.email}

            // onChangeText = { text => this.setState({ text: text }) }
            onChangeText = { email => this.setState({ email }) }

            // style={{ height: 20, width: 100 }} => since we defined style in the Input component already, we don't need it here
          />
        </CardSection>
      {/* CardSection for the password input */}
        <CardSection>
          <Input
            // just by listing secureTextEntry it means it's true
            secureTextEntry
            placeholder="password"
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          {/* Here we trigger the helper method thet we defined with a condition: */}
          {/* if we load don't show the button, show the spinner and vice versa */}
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

styles={
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

export default LoginForm;
