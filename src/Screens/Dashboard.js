
// New Code -----------------------------------------------------------------------------------------------------------------------------------------------


import { StyleSheet, Text, View, StatusBar, Image, Dimensions, TouchableOpacity, useColorScheme } from 'react-native';
import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native'

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const Dashboard = ({navigation = useNavigation()}) => {
  const colorScheme = useColorScheme();
  const [theme, setTheme] = useState(colorScheme);

  useEffect(() => {
    // Update theme whenever color scheme changes
    setTheme(colorScheme);
  }, [colorScheme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <View style={[styles.container, theme === 'dark' ? styles.darkContainer : null]}>
      <StatusBar backgroundColor={theme === 'light' ? 'white' : '#181F39'} barStyle={theme === 'light' ? 'dark-content' : 'light-content'} />

      {/* Top Menu */}
      <View style={styles.maincontainer}>
        <View style={styles.imgcontainer}>
          <Image source={require('../../images/welcomelogo1.png')} style={styles.img} />
          <Text style={[styles.dailogtext, theme === 'dark' && styles.dailogdarkText]}>Dailogwave</Text>
        </View>
        <View style={{ left:80 }}>
          <TouchableOpacity onPress={toggleTheme} style={[styles.button, theme === 'dark' && styles.buttondark]}>
            {
              theme === 'dark' ? <Icon name="light-up" size={20} color='black' /> : <Icon2 name="dark-mode" size={20} color='white' />
            }
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={()=> navigation.navigate("LoginScreen")} style={[styles.logout, theme === 'dark' && styles.logoutdark]}>
          <View style={{borderRadius:30,justifyContent:'center',alignItems:'center',padding:7}}>
            {
              theme === 'dark' ? <Icon2 name="logout" size={20} color='black' /> : <Icon2 name="logout" size={20} color='white' />
            }
          </View>
        </TouchableOpacity>
          {/* <View style={styles.roundcontainar}>
            <Text style={{ fontSize: 20, fontWeight: '500', color: 'white' }}>H</Text>
          </View> */}
      </View>

      {/* Middle Menu */}
      <View style={[styles.middlecontainer, theme === 'dark' ? styles.darkMiddleContainer : null]}>
        <View style={{ marginLeft: 15 }}>
          <Text style={[styles.text, theme === 'dark' && styles.darkText]}>Dashboard</Text>
        </View>
        <TouchableOpacity>
          <View style={styles.phonecontainer}>
            <Text style={styles.phonetext}>Get Phone Number</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Last Menu */}
      <View style={styles.lastmaincontainer}>
        <View style={[styles.lastmenucontainer, theme === 'dark' && styles.lastmenudarkcontainer]}>
          <View style={styles.camcontainer}>
            <Text style={styles.camtext1}>1</Text>
            <Text style={styles.camtext2}>Total Campaigns</Text>
          </View>
          <View style={styles.callcontainer}>
            <Text style={styles.camtext1}>1</Text>
            <Text style={styles.camtext2}>Total Calls</Text>
          </View>
          <View style={styles.creditcontainer}>
            <Text style={styles.camtext1}>84</Text>
            <Text style={styles.camtext2}>Remaining Credits</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Dashboard

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  darkContainer: {
    backgroundColor: '#181F39'
  },
  maincontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
  },
  imgcontainer: {
    alignItems: 'center',
    marginLeft: 14,
  },
  img: {
    height: deviceHeight * 0.055,
    width: deviceWidth / 5.92,
    resizeMode: 'contain',
    marginVertical: 1,
  },
  dailogtext:{
    fontSize: 10,
    color: 'black', 
  },
  dailogdarkText:{
    color: 'white',
  },
  logout:{
    marginRight:20,
    backgroundColor:'black',
    borderRadius:20,
    padding:1
  },
  logoutdark:{
    backgroundColor:'white'
  },
  button: {
    backgroundColor: 'black',
    padding: 7,
    borderRadius: 50,
  },
  buttondark:{
    backgroundColor:'white'
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '800',
  },
  roundcontainar: {
    backgroundColor: 'green',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: deviceWidth *0.13,
    height: deviceHeight * 0.065,
    marginRight: 13
  },
  middlecontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 14,
    alignItems: 'center'
  },
  darkMiddleContainer: {
    backgroundColor: '#181F39', // Dark mode background color for the middle menu
  },
  text: {
    fontSize: 24,
    color: 'black', // Light mode text color
  },
  darkText: {
    color: 'white', // Dark mode text color
  },
  dashboardtext: {
    fontSize: 22,
    fontWeight: '700',
    color: 'black'
  },
  phonecontainer: {
    backgroundColor: 'dodgerblue',
    marginRight: 10,
    justifyContent: 'center',
    borderRadius: 8,
    width: deviceWidth / 2.8,
    height: deviceHeight * 0.050,
    alignItems: 'center'
  },
  phonetext: {
    fontSize: 12,
    marginRight: 0,
    fontWeight: '700',
    color: 'white'
  },
  lastmaincontainer: {
    height: deviceHeight * 0.55,
    width: deviceWidth / 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  lastmenucontainer: {
    backgroundColor: '#F5F5F5',
    height: deviceHeight / 2.1,
    width: deviceWidth / 1.1,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10
  },
  lastmenudarkcontainer:{
    backgroundColor:'#1E2746',
  },
  camcontainer: {
    backgroundColor: 'dodgerblue',
    borderRadius: 10,
    height: deviceHeight * 0.13,
    width: deviceWidth / 1.18,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10
  },
  camtext1: {
    fontSize: 23,
    marginBottom: 6,
    color: 'white',
    fontWeight: '800'
  },
  camtext2: {
    fontSize: 15,
    color: 'white',
    fontWeight: '500'
  },
  callcontainer: {
    backgroundColor: 'green',
    borderRadius: 10,
    height: deviceHeight * 0.13,
    width: deviceWidth / 1.18,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10
  },
  creditcontainer: {
    backgroundColor: 'red',
    borderRadius: 10,
    height: deviceHeight * 0.13,
    width: deviceWidth / 1.18,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10
  },
})
