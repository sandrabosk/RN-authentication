import React from 'react';
import { TextInput, View, Text } from 'react-native';

// here we are receiving value and onChangeText props from LoginForm component
// and we are passing it down to <TextInput>
const Input = ({ label, value, onChangeText, placeholder}) => {
  const{ inputStyle, labelStyle, containerStyle } = styles;


  return(
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        placeholder = {placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
        // style={{height: 20, width: 100}}
      />
    </View>
  );
};

// adding styles:
const styles = {
  inputStyle:{
    color:'#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  labelStyle:{
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

// explanation for the FLEX:
// both, the input and the text, are the children of the View tag, or better to say- they are SIBILINGS
// whenever we have sibilings and if we define flex property, that is the way how we alocate or proportion available space for them
// the rule is: for each sibiling we add up the value of the flex (in this case 2+1=3), and that means that 2/3 of the available space
// will belong to the input and 1/3 will be dedicated to the label
export { Input };
