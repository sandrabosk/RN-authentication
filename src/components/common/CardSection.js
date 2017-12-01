import React from 'react';
import { View } from 'react-native';
// here we have to decide if this is going to be
// class based of functional component
// since we will be using it just to display some data, it is just presentational component
// it will not have any lifecycle events nor datafetching
// this all tells us we are talking about functional component

const CardSection = (props) => {
  return (
    <View style={styles.containerStyle}>
      { props.children }
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};
export { CardSection };
