import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigationHandler from './src/Navigation/NavigationHandler';
import { Provider } from 'react-redux';
import store from './src/Redux/store';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <NavigationHandler />
      </NavigationContainer>
    </Provider>
  );
}

export default App;