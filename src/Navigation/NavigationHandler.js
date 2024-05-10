import  React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../Screens/LoginScreen';
import Welcome from '../Screens/Welcome';
import BottomTabNavigation from './BottomTabNavigation';
import Details from '../Screens/Details';
import Dashboard from '../Screens/Dashboard';
import Call from '../Screens/Call';
import Audio from '../Screens/Audio';
import Upload from '../Screens/Upload';

const Stack = createNativeStackNavigator();

const NavigationHandler = () => {
  return (
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="BottomTabNavigation" component={BottomTabNavigation} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Call" component={Call} />
        <Stack.Screen name="Audio" component={Audio} />
        <Stack.Screen name="Upload" component={Upload} />
      </Stack.Navigator>
  );
}

export default NavigationHandler;