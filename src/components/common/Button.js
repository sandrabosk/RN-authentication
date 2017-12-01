import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

// TouchableOpacity we use to get the effect of clicking on the Button
// with TouchableOpacity the button fades in and out
// this onPress thet is passed as props is the same onPress
// function that we defined in our <Button />

// this onPress that we are passing in the props is the one from AlbumDetail inside <Button />
const Button = ({ onPress, children }) => {
const { buttonStyle, textStyle } = styles;

  return (
    // to get some reaction from user we place onPress handler in the TouchableOpacity tag
    // this onPress in the {} is the one we passed in the props
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
        {/* Click me!!! */}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1, // I want this button content to expand as much as it can
    alignSelf: 'stretch', // stretch to fill the limits of the container
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  }
};

export { Button };
