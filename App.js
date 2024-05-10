import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigationHandler from './src/Navigation/NavigationHandler';
import Upload from './src/Screens/Upload';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <NavigationHandler/>
    </NavigationContainer>
  );
}

export default App;