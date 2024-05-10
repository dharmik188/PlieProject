import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar, Image, Dimensions, TouchableOpacity, TextInput, useColorScheme } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import AwesomeAlert from 'react-native-awesome-alerts';
import DocumentPicker from 'react-native-document-picker';
import { useNavigation } from '@react-navigation/native'

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const show = [
  { label: '10', value: '1' },
  { label: '25', value: '2' },
  { label: '50', value: '3' },
  { label: '100', value: '4' },
];

const Details = ({navigation = useNavigation()}) => {

  const tableData = [
    ['89354'],
    // ['89354'],
    // ['89354'],
    // ['89354'],
    // ['89354'],
    
  ];
  const tableData1 = [
    ['Data 1'],
    // ['Data 1'],
    // ['Data 1'],
    // ['Data 1'],
    // ['Data 1'],
    
  ];
  const tableData2 = [
    ['Calls','Answered','Busy'],
    ['1','1','0'],
    
  ];

  const [pickedDocument, setPickedDocument] = useState(null);

  const pickDocument = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.audio],
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

  const [showAlert, setShowAlert] = useState(false);
  const [showAlert1, setShowAlert1] = useState(false);

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

            {/* Details */}
            <View style={{height:deviceHeight*0.07,borderBottomWidth:0.3,borderBottomColor:'gray',flexDirection:'row',alignItems:'center',gap:13,}}>
              <View style={{}}>
                <Text style={[styles.audiofiletext, theme === 'dark' && styles.audiofiletextdark]}>All Campaign</Text>
              </View>
            </View>

            {/* Dropdown */}
            <View style={{height:deviceHeight*0.07,alignItems:'center',marginVertical:5,}}>

              {/* search */}
              <View style={{width:deviceWidth/1.13,height:deviceHeight*0.05,flexDirection:'row',alignItems:'center',gap:8,marginVertical:7}}>
                <Text style={{fontWeight:'400',color:'gray',fontSize:14}}>Search:</Text>
                <TextInput keyboardType={'web-search'} style={[styles.textinputbox, theme === 'dark' && styles.textinputboxdark]}/>
              </View>

            </View>

            {/* Compaign id */}
            <View style={{height:deviceHeight*0.13,}}>
              <View style={{width:deviceWidth/1.07,height:deviceHeight*0.05,justifyContent:'center',marginVertical:7,borderBottomWidth:0.5,borderBottomColor:'gray'}}>
                <Text style={[styles.audioidtext, theme === 'dark' && styles.audioidtextdark ]}>Campaign ID</Text>
              </View>
              
              {/* Audio Table */}
              <View style={styles.tableContainer}>
                <View style={[styles.audiotable, theme === 'dark' && styles.audiotabledark]}>
                  <View style={{}}>
                    {tableData.map((rowData, rowIndex) => (
                      <View key={rowIndex} style={styles.rowContainer}>
                        {rowData.map((cellData, cellIndex) => (
                          <View key={cellIndex} style={styles.cellContainer}>
                            <TouchableOpacity onPress={() => setShowAlert1(!showAlert1)} style={{backgroundColor:'skyblue',width:deviceWidth/4.2,height:deviceHeight*0.045,alignItems:'center',justifyContent:'center',borderRadius:8}}>
                              <Text style={[styles.cellText, theme === 'dark' && styles.cellTextdark]}>{cellData}</Text>
                            </TouchableOpacity>
                            <AwesomeAlert
                              show={showAlert1}

                              title="Campaign Details"
                              titleStyle={{ fontSize: 24, color:"black", borderBottomWidth:0.3,borderBottomColor:'gray',width:'117%', }}

                              // showCancelButton={true}
                              // cancelText="Close"
                              // cancelButtonStyle={{ backgroundColor:"black",  width: deviceWidth*0.23, height:deviceHeight*0.05, }}
                              // cancelButtonTextStyle={{ fontSize: 18,alignSelf:'center' }}
                              // onCancelPressed={() => {
                              //   console.log('Close pressed')
                              //   setShowAlert1(false)
                              // }}
                              showConfirmButton={true}
                              confirmText="Close"
                              confirmButtonStyle={{ backgroundColor:"#00BFFF", width: deviceWidth*0.23, height:deviceHeight*0.05  }}
                              confirmButtonTextStyle={{ fontSize: 18,alignSelf:'center' }}
                              onConfirmPressed={() => {
                                console.log("Close pressed")
                                setShowAlert1(false)
                              }}
                              closeOnTouchOutside={false} // default true
                              closeOnHardwareBackPress={false} // default true
                              onDismiss={() => console.log('Dismiss Called.')}

                              customView={
                                <View style={styles.tableContainer2}>
                                  {tableData2.map((rowData, rowIndex) => (
                                    <View key={rowIndex} style={styles.rowContainer2}>
                                      {rowData.map((cellData, cellIndex) => (
                                        <View key={cellIndex} style={styles.cellContainer2}>
                                          <Text style={styles.cellText2}>{cellData}</Text>
                                        </View>
                                      ))}
                                    </View>
                                  ))}
                                </View>
                              }
                            />
                          </View>
                        ))}
                      </View>
                    ))}
                  </View>
                  <View>
                    {tableData1.map((rowData, rowIndex) => (
                      <View key={rowIndex} style={styles.rowContainer1}>
                        {rowData.map((cellData, cellIndex) => (
                          <View key={cellIndex} style={styles.cellContainer1}>
                            <TouchableOpacity onPress={() => setShowAlert1(!showAlert1)} style={{height:deviceHeight*0.04,justifyContent:'center'}}>
                              <Text style={[styles.cellText1, theme === 'dark' && styles.cellText1dark]}>{cellData}</Text>
                            </TouchableOpacity>
                            <AwesomeAlert
                              show={showAlert1}

                              title="Campaign Details"
                              titleStyle={{ fontSize: 24, color:"black", borderBottomWidth:0.3,borderBottomColor:'gray',width:'117%', }}

                              // showCancelButton={true}
                              // cancelText="Close"
                              // cancelButtonStyle={{ backgroundColor:"black",  width: deviceWidth*0.23, height:deviceHeight*0.05, }}
                              // cancelButtonTextStyle={{ fontSize: 18,alignSelf:'center' }}
                              // onCancelPressed={() => {
                              //   console.log('Close pressed')
                              //   setShowAlert1(false)
                              // }}
                              showConfirmButton={true}
                              confirmText="Close"
                              confirmButtonStyle={{ backgroundColor:"#00BFFF", width: deviceWidth*0.23, height:deviceHeight*0.05  }}
                              confirmButtonTextStyle={{ fontSize: 18,alignSelf:'center' }}
                              onConfirmPressed={() => {
                                console.log("Close pressed")
                                setShowAlert1(false)
                              }}
                              closeOnTouchOutside={false} // default true
                              closeOnHardwareBackPress={false} // default true
                              onDismiss={() => console.log('Dismiss Called.')}

                              customView={
                                <View style={styles.tableContainer2}>
                                  {tableData2.map((rowData, rowIndex) => (
                                    <View key={rowIndex} style={styles.rowContainer2}>
                                      {rowData.map((cellData, cellIndex) => (
                                        <View key={cellIndex} style={styles.cellContainer2}>
                                          <Text style={styles.cellText2}>{cellData}</Text>
                                        </View>
                                      ))}
                                    </View>
                                  ))}
                                </View>
                              }
                            />
                          </View>
                        ))}
                      </View>
                    ))}
                  </View>
                </View>
              </View>

            </View>

          </View>
        </View>
      </View>
    </View>
  )
}

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
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
  middlecontainer:{
    flex:1,
    
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
  audiofiletext:{
    fontSize:17,
    fontWeight:'600',
    marginLeft:10,
    color:'black'
  },
  audiofiletextdark:{
    color:'white'
  },
  uploadfiletext:{
    fontSize:13,
    fontWeight:'500',
    color:'black'
  },
  uploadfiletextdark:{
    color:'white'
  },
  textinputbox:{ 
    borderWidth: 0.77,
    borderColor:'gray', 
    borderRadius: 7, 
    width: deviceWidth / 1.5,
    backgroundColor: '#F5F5F5' 
  },
  textinputboxdark:{
    backgroundColor:'#1E2746'
  },
  audioidtext:{
    fontWeight:600,
    color:'black',
    marginLeft:18
    
  },
  audioidtextdark:{
    color:'white'
  },
  tableContainer: {
    flexDirection: 'row',
    // borderWidth:1,
    // backgroundColor:'red',
    justifyContent:'center',
    height:deviceHeight*0.25,
    // alignItems:'center',
    // backgroundColor:'red',
    
  },
  audiotable:{
    backgroundColor: 'white',
    flexDirection: 'row',
    width: deviceWidth / 1.12,
    height: deviceHeight * 0.25, // Set a fixed height
    borderRadius: 10,
    overflow: 'scroll',
  },
  audiotabledark:{
    backgroundColor:'#181F39'
  },
  rowContainer: {
    flexDirection: 'row',
    width:deviceWidth/3,
    // backgroundColor:'gray'
  },
  cellContainer: {
    flex: 1,
    padding: 13,
    justifyContent: 'center',
    // backgroundColor:'gray',
    height:deviceHeight*0.085
  },
  cellText: {
    fontSize: 16,
    color:'black'
  },
  cellTextdark:{
    color:'white'
  },
  rowContainer1: {
    flexDirection: 'row',
    width:deviceWidth/1.68,
    // backgroundColor:'red',
    
  },
  cellContainer1: {
    flex: 1,
    padding: 13,
    justifyContent: 'center',
    height:deviceHeight*0.085
  },
  cellText1: {
    fontSize: 16,
    alignSelf:'center',
    color:'black'
  },
  cellText1dark:{
    color:'white',
  },
  tableContainer2: {
    flexDirection: 'column',
    width:deviceWidth/1.3,
    borderBottomWidth:0.3,
    borderBottomColor:'gray'
  },
  rowContainer2: {
    flexDirection: 'row',
  },
  cellContainer2: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cellText2: {
    fontSize: 15,
    color:'black'
  },
});
