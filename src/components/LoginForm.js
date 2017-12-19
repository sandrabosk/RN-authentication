import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { Button, Card, CardSection } from './common';

class LoginForm extends Component {
  state = { text: '' };
  // we are not letting text exist inside the text input
  // setting the state like this we always know what is the value of text
  // by typing just this.setState.text
  render() {
    return(
      <Card>
        <CardSection>
          <TextInput
            value={this.state.text}
            onChangeText = { text => this.setState({ text: text }) }
            style={{ height: 20, width: 100 }}
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
