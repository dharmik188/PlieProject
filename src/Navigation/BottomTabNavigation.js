import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { Ionicons } from '@expo/vector-icons';
import Dashboard from '../Screens/Dashboard';
import Details from '../Screens/Details';
import Call from '../Screens/Call';
import Audio from '../Screens/Audio';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Upload from '../Screens/Upload';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown:false,tabBarActiveTintColor: 'black',tabBarInactiveTintColor: 'gray',tabBarShowLabel:false,}} initialRouteName='Dashboard' >

        <Tab.Screen name="Dashboard" component={Dashboard} options={{tabBarIcon: ({focused, color, size}) => (
            <Icon name="space-dashboard" size={30} color={color} />
        )}} />
        <Tab.Screen name="Details" component={Details} options={{tabBarIcon: ({focused, color, size}) => (
            <Icon name="folder" size={30} color={color} />
        )}} />
        <Tab.Screen name="Call" component={Call} options={{tabBarIcon: ({focused, color, size}) => (
            <Icon name="call" size={30} color={color} />
        )}} />
        <Tab.Screen name="Audio" component={Audio} options={{tabBarIcon: ({focused, color, size}) => (
            <Icon name="audio-file" size={30} color={color} />
        )}} />
         {/* <Tab.Screen name="Upload" component={Upload} options={{tabBarIcon: ({focused, color, size}) => (
            <Icon name="audio-file" size={30} color={color} />
        )}} /> */}
      
      {/* Add more screens as needed */}
    </Tab.Navigator>
    
  );
};

export default BottomTabNavigation;
