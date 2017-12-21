import React, { Component } from 'react';
// import { TextInput } from 'react-native';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  state = { email: '' };
  // we are changing this to email so it's pretty clear
  // that we are talking about email since we will have more than one text inputs

  // state = { text: '' };
  // we are not letting text exist inside the text input
  // setting the state like this we always know what is the value of text
  // by typing just this.setState.text
  render() {
    return(
      <Card>
        <CardSection>
          <Input
            placeholder="user@gmail.com"
            label = "Email"
            // value={this.state.text}
            value={this.state.email}

            // onChangeText = { text => this.setState({ text: text }) }
            onChangeText = { email => this.setState({ email }) }

            // style={{ height: 20, width: 100 }} => since we defined style in the Input component already, we don't need it here
          />
        </CardSection>

        <CardSection />

        <CardSection>
          <Button>
            Log In
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
