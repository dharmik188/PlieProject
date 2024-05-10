import { StyleSheet, Text, View, StatusBar, Image, Dimensions, TouchableOpacity, TextInput, Button, useColorScheme } from 'react-native'
import React,{useState, useEffect} from 'react'
import { Dropdown,MultiSelect } from 'react-native-element-dropdown';
import DocumentPicker from 'react-native-document-picker';
import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native'

const deviceHeight = Dimensions.get( 'window' ).height;
const deviceWidth = Dimensions.get( 'window' ).width;

const show = [
  {label: 'select', value: '1' },
  {label: 'value', value: '2' },
];

const Call = ({navigation = useNavigation()}) => {

  const colorScheme = useColorScheme();
  const [theme, setTheme] = useState(colorScheme); // State variable for theme

  useEffect(() => {
    // Update theme whenever color scheme changes
    setTheme(colorScheme);
  }, [colorScheme]);

  const toggleTheme = () => {
    // Toggle between light and dark mode
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const [pickedDocument, setPickedDocument] = useState(null);

  const pickDocument = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      setPickedDocument(res);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker
        console.log('User cancelled the picker');
      } else {
        // Error occurred while picking the document
        console.log('Error picking document:', err);
      }
    }
  };


  const [value2, setValue2] = useState(null);
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
          <View style={{borderRadius:10,justifyContent:'center',alignItems:'center',padding:7}}>
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
      <View style={{flex:1}}>
      <View style={{ height: deviceHeight * 0.5, marginVertical: 15, alignItems: 'center' }}>
          <View style={[styles.middledetails, theme === 'dark' && styles.middledetailsdark]}>

            {/* Calling System */}
            <View style={{height:deviceHeight*0.05}}>
              <Text style={[styles.callingtext, theme === 'dark' && styles.callingtextdark]}>Calling System</Text>
            </View>

            {/* Compaign */}
            <View style={{height:deviceHeight*0.55,alignItems:'center',marginVertical:10}}>

              {/* Name */}
              <View style={{width:deviceWidth/1.13,height:deviceHeight*0.084,gap:8,marginVertical:4,}}>
                <Text style={[styles.campaigntext, theme === 'dark' && styles.campaigntextdark]}>Campaign Name</Text>
                <TextInput placeholder='campaign name' placeholderTextColor='gray' keyboardType={'web-search'} style={[styles.campaigninput, theme === 'dark' && styles.campaigninputdark]}/>
              </View>

              {/* Voice ID */}
              <View style={{width:deviceWidth/1.13,height:deviceHeight*0.084,gap:8,marginVertical:7}}>
                <Text style={[styles.voiceidtext, theme === 'dark' && styles.voiceidtextdark]}>Voice ID</Text>
                <Dropdown
                  style={[styles.dropdown2, theme === 'dark' && styles.dropdown2dark]}
                  placeholderStyle={styles.placeholderStyle2}
                  selectedTextStyle={styles.selectedTextStyle2}
                  data={show}
                  maxHeight={200}
                  labelField="label"
                  valueField="value"
                  placeholder="select"
                  value={value2}
                  onChange={item => {
                    setValue2(item.value);
                  }}
                />
              </View>

              {/* Number File */}
              <View style={{width:deviceWidth/1.13,height:deviceHeight*0.088,gap:8,marginVertical:4,}}>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                  <Text style={[styles.numberfiletext, theme === 'dark' && styles.numberfiletextdark]}>Number File</Text>
                  <TouchableOpacity >
                    <Text style={{fontWeight:'600',color:'red'}}>Sample File</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={pickDocument} style={styles.filebtn}>
                    <View style={{backgroundColor:'#FFEBCD',height:deviceHeight*0.05,width:deviceWidth/3.9,alignItems:'center',justifyContent:'center',borderTopLeftRadius:10,borderBottomLeftRadius:10}}>
                      <Text style={{color:'black',fontSize:15,fontWeight:'700',}}>Choose File</Text>
                    </View>
                    <Text style={{marginLeft:5}}> No file chosen</Text>
                </TouchableOpacity>
                {pickedDocument && (
                  <Text style={{ color:'black'}}>
                    Picked Document: {pickedDocument.name}
                  </Text>
                )}
              </View>

              {/* Max Retry */}
              <View style={{width:deviceWidth/1.13,height:deviceHeight*0.084,gap:8,marginTop:40}}>
                <Text style={[styles.maxtext, theme === 'dark' && styles.maxtextdark]}>Max Retry</Text>
                <TextInput placeholder='Maximum call retry to unanswered call' placeholderTextColor='gray' keyboardType={'web-search'} style={[styles.maxinput, theme === 'dark' && styles.maxinputdark]}/>
              </View>

              {/* Retry Time */}
              <View style={{width:deviceWidth/1.13,height:deviceHeight*0.084,gap:8,marginVertical:10}}>
                <Text style={[styles.retrytext, theme === 'dark' && styles.retrytextdark]}>Retry Time</Text>
                <TextInput placeholder='Gap between 2 calls in seconds' placeholderTextColor='gray' keyboardType={'web-search'} style={{borderWidth:1,borderRadius:7,width:deviceWidth/1.13,height:deviceHeight*0.048,justifyContent:'center',fontWeight:'400',borderColor:'gray'}}/>
              </View>


            </View>

            {/* Button Campaign */}
            <View style={styles.runbtnContainer}>
              <TouchableOpacity  style={styles.runbtn}>
                  <Text style={[styles.runtext, theme === 'dark' && styles.runtextdark]}>Run Campaign</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </View>
    </View>
  )
}

export default Call

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white'
    },
    darkContainer: {
      backgroundColor: '#181F39', // Dark mode background color
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
    button: {
      backgroundColor: 'black',
      padding: 7,
      borderRadius: 50,
    },
    buttondark:{
      backgroundColor:'white'
    },
    dailogtext: {
      fontSize: 10,
      color: 'black',
    },
    dailogdarkText: {
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
    roundcontainar: {
      backgroundColor: 'green',
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
      width: deviceWidth *0.13,
      height: deviceHeight * 0.065,
      marginRight: 13
    },
    middledetails:{
      backgroundColor: '#F5F5F5',
      height: deviceHeight * 0.77,
      width: deviceWidth / 1.07,
      marginVertical: 10,
      borderRadius: 10 , 
    },
    middledetailsdark:{
      backgroundColor:'#1E2746',
    },
    callingtext:{
      fontSize:22,
      fontWeight:'400',
      marginLeft:10,
      top:7,
      color:'black',
      alignSelf:'center'
    },
    callingtextdark:{
      color:'white',
    },
    campaigntext:{
      fontWeight:'500',
      color:'black'
    },
    campaigntextdark:{
      color:'white',
    },
    campaigninput:{
      borderWidth:0.77,
      borderColor:'gray',
      borderRadius:7,
      width:deviceWidth/1.13,
      height:deviceHeight*0.048,
      justifyContent:'center',
      fontWeight:'400', 
      backgroundColor: '#F5F5F5',
      
    },
    campaigninputdark:{
      backgroundColor:'#1E2746',
      
    },
    voiceidtext:{
      fontWeight:'500',
      color:'black'
    },
    voiceidtextdark:{
      color:'white'
    },
    camcontainer:{
      borderRadius:10,
      height:deviceHeight*0.05,
      justifyContent:'center',
      width:deviceWidth/1.18,
      marginVertical:10,
      backgroundColor:'red',
      borderBottomWidth:1,
      borderBottomColor:'black',
    },
    camtext1:{
      fontSize:18,
      marginBottom:6,
      color:'black',
      fontWeight:'500'
    },
    dropdown2: {
      height: 37,
      borderRadius: 7,
      borderWidth: 0.77,
      borderColor:'gray',
      padding: 8,
      width: deviceWidth / 1.13,
      backgroundColor: '#F5F5F5',
    },
    dropdown2dark:{
      backgroundColor:'#1E2746'
    },
    placeholderStyle2: {
      fontSize: 15,
      fontWeight:'400',
      color: 'gray',
      
    },
    selectedTextStyle2: {
      fontSize: 15,
      color: 'gray'
    },
    numberfiletext:{
      fontWeight:'500',
      color:'black'
    },
    numberfiletextdark:{
      color:'white'
    },
    maxtext:{
      fontWeight:'500',
      color:'black'
    },
    maxtextdark:{
      color:'white'
    },
    maxinput:{
      borderWidth:1,
      borderRadius:7,
      width:deviceWidth/1.13,
      height:deviceHeight*0.048,
      justifyContent:'center',
      fontWeight:'400',
      borderColor:'gray',
    },
    retrytext:{
      fontWeight:'500',
      color:'black'
    },
    retrytextdark:{
      color:'white'
    },
    filebtn:{
      backgroundColor:'#DEB887',
      width:deviceWidth/1.13,
      height:deviceHeight*0.05,
      alignItems:'center',
      borderRadius:10,
      flexDirection:'row'
    },
    runbtnContainer:{
      alignItems:'center',
      borderRadius:15,
      justifyContent:'center',
      // marginVertical:10,
      // backgroundColor:'red',
      width:deviceWidth*0.93,
      height:deviceHeight*0.08,
      position:'absolute',
      bottom:15,
      
    },
    runtext:{
      color:'white',
      fontSize:18,
      fontWeight:'700'
    },
    runtextdark:{
      color:'black'
    },
    runbtn:{
      backgroundColor:'#00BFFF',
      width:deviceWidth/1.18,
      height:deviceHeight*0.055,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:8
  },
})