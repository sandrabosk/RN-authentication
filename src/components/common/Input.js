import React from 'react';
import { TextInput, View, Text } from 'react-native';

// here we are receiving value and onChangeText props from LoginForm component
// and we are passing it down to <TextInput>
const Input = ({ label, value, onChangeText}) => {
  return(
    <View>
      <Text>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={{height: 20, width: 100}}
      />
    </View>
  );

};

export { Input };
