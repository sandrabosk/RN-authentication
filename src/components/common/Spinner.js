import React from 'react';
import { View, ActivityIndicator } from 'react-native';
// ActivityIndicator is built in react
const Spinner = ({ size }) => {
  // this size is the passed property and can be any placeholder
  return (
    <View style={styles.spinnerStyle}>
      {/* this size has to be that exact word since it is built in */}
      {/* {size || 'large'} => this means: if I dont give you size, use 'large'*/}
      <ActivityIndicator size={size || 'large'} />
    </View>
  );
};

const styles={
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export { Spinner };
