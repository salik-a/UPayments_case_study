import React from 'react';
import {
  View,
} from 'react-native';
import Navigation from './src/navigation/navigation';
import FlashMessage from "react-native-flash-message";
import { Provider } from 'react-redux'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import store from './src/redux/store'

const App = () => {

  return (
    <Provider store={store}>
      <SafeAreaProvider >
        <Navigation />
        <FlashMessage position="top" />
      </SafeAreaProvider>
    </Provider>
  );
};


export default App;
