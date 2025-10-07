import  React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../Screens/LoginScreen';
import BottomTabNavigation from './BottomTabNavigation';
import EventListing from '../Screens/EventListing';
import Favourites from '../Screens/Favourites';
import Profile from '../Screens/Profile';
import Search from '../Screens/Search';

const Stack = createNativeStackNavigator();

const NavigationHandler = () => {
  return (
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="LoginScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="EventListing" component={BottomTabNavigation} />
        {/* <Stack.Screen name="EventListing" component={EventListing} /> */}
        <Stack.Screen name="Favourites" component={Favourites} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Search" component={Search} />
      </Stack.Navigator>
  );
}

export default NavigationHandler;