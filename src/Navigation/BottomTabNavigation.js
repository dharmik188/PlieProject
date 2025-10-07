import * as React from 'react';
import { Image, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Search from '../Screens/Search';
import EventListing from '../Screens/EventListing';
import Favourites from '../Screens/Favourites';
import Profile from '../Screens/Profile';
import searchicon from '../assets/Images/search.png';
import hearticon from '../assets/Images/heart.png';
import usericon from '../assets/Images/user.png';
import Calendaricon from '../assets/Images/Calendar.png';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const SearchIcon = () => (
    <View>
        <Image
            source={searchicon}
            style={{ width: 24, height: 24, resizeMode: 'contain' }}
        />
    </View>
);
const HeartIcon = () => (
    <View>
        <Image
            source={hearticon}
            style={{ width: 24, height: 24, resizeMode: 'contain' }}
        />
    </View>
);
const UserIcon = () => (
    <View>
        <Image
            source={usericon}
            style={{ width: 24, height: 24, resizeMode: 'contain' }}
        />
    </View>
);
const CalendarIcon = () => (
    <View>
        <Image
            source={Calendaricon}
            style={{ width: 24, height: 24, resizeMode: 'contain' }}
        />
    </View>
);
const BottomTabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown:false,tabBarActiveTintColor: 'black',tabBarInactiveTintColor: 'gray',tabBarShowLabel:true}} initialRouteName='Events'>

      <Tab.Screen name="Search" component={Search} options={{tabBarIcon: ({focused, color, size}) => (
          <SearchIcon />
      )}} />
        <Tab.Screen name="Events" component={EventListing} options={{tabBarIcon: ({focused, color, size}) => (
            <CalendarIcon />
        )}} />
        <Tab.Screen name="Favourites" component={Favourites} options={{tabBarIcon: ({focused, color, size}) => (
            <HeartIcon />
        )}} />
        <Tab.Screen name="Profile" component={Profile} options={{tabBarIcon: ({focused, color, size}) => (
            <UserIcon />
        )}} />
    </Tab.Navigator>
    
  );
};

export default BottomTabNavigation;
