import React, { Component } from 'react';
// import { TextInput } from 'react-native';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  state = { text: '' };
  // we are not letting text exist inside the text input
  // setting the state like this we always know what is the value of text
  // by typing just this.setState.text
  render() {
    return(
      <Card>
        <CardSection>
          <Input
            value={this.state.text}
            onChangeText = { text => this.setState({ text: text }) }
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
