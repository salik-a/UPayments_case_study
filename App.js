import React from 'react';
import {
  View,
} from 'react-native';
import Navigation from './src/navigation/navigation';
import FlashMessage from "react-native-flash-message";



const App = () => {

  return (
    <>
      <Navigation />
      <FlashMessage position="top" />
    </>
  );
};


export default App;
