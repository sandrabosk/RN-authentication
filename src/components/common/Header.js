// import libraries
import React from 'react';
import { Text, View } from 'react-native';


// make component
const Header = (props) => {
              // |
              // we are passing an argument props and to make the text dynamic we
            // are giving it down a property named headerText (or any other name)
            // this is the textStyle that we named inside this styles
            // object down and this is how we use it
            // ^
            // |-------------------------------------------
  const { textStyle, viewStyle } = styles;              // |
      // inside <Text> tag is where we apply the styles    |
      // and this is the syntax                         // |
      // this headerText can be any word                // |
  return (                                              // ^
    <View style={viewStyle}>
      <Text style={textStyle}> {props.headerText} </Text>
    </View>                                             // ^
  );                                                    // |
};                                                      // |
// we create object called styles inside our component     |
const styles = {                                        // |
  viewStyle: {                                          // |
    backgroundColor: '#F8F8F8',                         // |
    // justifyContent moves objects HORIZONTALLY        // |
    // alignItems moves objects VERTICALLY              // |

    // justifyContent: 'flex-end'                       // |
    justifyContent: 'center',  //to position HORIZONTALLY  |
    // justifyContent: 'flex-start'                     // |
    // alignItems: 'flex-start'                         // |
    alignItems: 'center', //to position VERTICALLY         |
    // alignItems: 'flex-end'                           // |
    height: 60,                                         // |
    paddingTop: 15,                                     // |
    shadowColor: '#000',                                // |
    shadowOffset: { width: 0, height: 2 },              // |
    shadowOpacity: 0.2,                                 // |
    elevation: 2,                                       // |
    position: 'relative'                                // |
  },                                                    // |
  textStyle: { // => ---------------------------------------
    fontSize: 20
  }
};

// make the component available to the other parts of the app
export { Header };
