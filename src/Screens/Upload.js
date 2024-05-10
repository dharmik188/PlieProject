
// import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
// import React, {useState} from 'react';
// import AwesomeAlert from 'react-native-awesome-alerts';
// import DocumentPicker from 'react-native-document-picker';

import { Screen } from "react-native-screens"

// const deviceHeight = Dimensions.get( 'window' ).height;
// const deviceWidth = Dimensions.get( 'window' ).width;

// export default function Upload() {

//   const [pickedDocument, setPickedDocument] = useState(null);

//   const pickDocument = async () => {
//     try {
//       const res = await DocumentPicker.pick({
//         type: [DocumentPicker.types.audio],
//       });
//       setPickedDocument(res);
//     } catch (err) {
//       if (DocumentPicker.isCancel(err)) {
//         // User cancelled the picker
//         console.log('User cancelled the picker');
//       } else {
//         // Error occurred while picking the document
//         console.log('Error picking document:', err);
//       }
//     }
//   };

//   const [showAlert, setShowAlert] = useState(false);

//   return (
//     <View>
//       <TouchableOpacity
//         onPress={() => setShowAlert(!showAlert)}
//         style={{
//           backgroundColor: 'blue',
//           margin: 40,
//           borderRadius: 10,
//           width: 110,
//           elevation: 10,
//           padding: 10,
//         }}>
//         <Text style={{fontSize: 22, color: 'white'}}>Click Me</Text>
//       </TouchableOpacity>
//               <AwesomeAlert
//                 show={showAlert}

//                 title="Upload Audio"
//                 titleStyle={{ fontSize: 24, color:"black", borderBottomWidth:0.5,width:'117%', }}
                
//                 // message="Choose File"
//                 // messageStyle={{ color:"black", fontSize: 22,backgroundColor:'lightgray',width:'90%',marginVertical:10 }}
//                 // messageButtonTextStyle={{ fontSize: 19,alignSelf:'center' }}

//                 showCancelButton={true}
//                 cancelText="Close"
//                 cancelButtonStyle={{ backgroundColor:"black", width: 80 , marginLeft:90}}
//                 cancelButtonTextStyle={{ fontSize: 19,alignSelf:'center' }}
//                 onCancelPressed={() => {
//                   console.log('Close pressed')
//                   setShowAlert(false)
//                 }}

//                 showConfirmButton={true}
//                 confirmText="Upload"
//                 confirmButtonStyle={{ backgroundColor:"#00BFFF", width: 85,  }}
//                 confirmButtonTextStyle={{ fontSize: 19,alignSelf:'center' }}
//                 onConfirmPressed={() => {
//                   console.log("Upload pressed")
//                   setShowAlert(false)
//                 }}

//                 // showProgress={true}
//                 // progressColor="red"
//                 // progressSize={40}

//                 closeOnTouchOutside={false} // default true
//                 closeOnHardwareBackPress={false} // default true
//                 onDismiss={() => console.log('Dismiss Called.')}

//                 customView={
//                   <View style={{ padding: 10, marginVertical: 0, borderRadius: 3, borderBottomWidth:0.5,width:deviceWidth/1.24,height:deviceHeight*0.12,justifyContent:'center',alignItems:'center', }}>
//                     <TouchableOpacity onPress={pickDocument} style={{backgroundColor:'#DEB887',width:deviceWidth/1.4,height:deviceHeight*0.06,alignItems:'center',borderRadius:10,flexDirection:'row'}}>
//                       <View style={{backgroundColor:'#FFEBCD',height:deviceHeight*0.06,width:deviceWidth/3.9,alignItems:'center',justifyContent:'center',borderTopLeftRadius:10,borderBottomLeftRadius:10}}>
//                         <Text style={{color:'black',fontSize:15,fontWeight:'700',}}>Choose File</Text>
//                       </View>
//                       <Text style={{marginLeft:5}}> No file chosen</Text>
//                     </TouchableOpacity>
//                   </View>
//                 }
//               />
//     </View>
//   );
// }



// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet, useColorScheme } from 'react-native';

// const Upload = () => {
//   const colorScheme = useColorScheme();
//   const [theme, setTheme] = useState(colorScheme);

//   useEffect(() => {
//     // Update theme whenever color scheme changes
//     setTheme(colorScheme);
//   }, [colorScheme]);

//   return (
//     <View style={[styles.container, theme === 'dark' && styles.darkContainer]}>
//       <Text style={[styles.text, theme === 'dark' && styles.darkText]}>
//         Hello, world!
//       </Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'white', // Light mode background color
//   },
//   darkContainer: {
//     backgroundColor: 'black', // Dark mode background color
//   },
//   text: {
//     fontSize: 24,
//     color: 'black', // Light mode text color
//   },
//   darkText: {
//     color: 'white', // Dark mode text color
//   },
// });

// export default Upload;


// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet, useColorScheme, TouchableOpacity, StatusBar } from 'react-native';

// const App = () => {
//   const colorScheme = useColorScheme();
//   const [theme, setTheme] = useState(colorScheme);

//   useEffect(() => {
//     // Update theme whenever color scheme changes
//     setTheme(colorScheme);
//   }, [colorScheme]);

//   const toggleTheme = () => {
//     setTheme(theme === 'dark' ? 'light' : 'dark');
//   };

//   return (
//     <View style={[styles.container, theme === 'dark' && styles.darkContainer]}>
//       <StatusBar barStyle={theme === 'dark' ? 'light-content' : 'dark-content'} />
//       <TouchableOpacity onPress={toggleTheme} style={styles.button}>
//         <Text style={styles.buttonText}>Toggle Mode</Text>
//       </TouchableOpacity>
//       <Text style={[styles.text, theme === 'dark' && styles.darkText]}>
//         Hello, world!
//       </Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'white', // Light mode background color
//   },
//   darkContainer: {
//     backgroundColor: 'black', // Dark mode background color
//   },
//   status:{
//     backgroundColor:'black',
//   },
//   text: {
//     fontSize: 24,
//     color: 'black', // Light mode text color
//   },
//   darkText: {
//     color: 'white', // Dark mode text color
//   },
//   button: {
//     backgroundColor: 'blue',
//     padding: 10,
//     borderRadius: 5,
//     marginTop: 20,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//   },
// });

// export default App;


// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet, useColorScheme, TouchableOpacity, StatusBar } from 'react-native';

// const Upload = () => {
//   const colorScheme = useColorScheme();
//   const [theme, setTheme] = useState(colorScheme);

//   useEffect(() => {
//     // Update theme whenever color scheme changes
//     setTheme(colorScheme);
//   }, [colorScheme]);

//   const toggleTheme = () => {
//     setTheme(theme === 'dark' ? 'light' : 'dark');
//   };

//   return (
//     <View style={[styles.container, theme === 'dark' && styles.darkContainer]}>
//       <StatusBar barStyle={theme === 'light' ? 'light-content' : 'dark-content'} />
//       <TouchableOpacity onPress={toggleTheme} style={styles.button}>
//         <Text style={styles.buttonText}>Toggle Mode</Text>
//       </TouchableOpacity>
//       <Text style={[styles.text, theme === 'dark' && styles.darkText]}>
//         Hello, world!
//       </Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'white', // Light mode background color
//   },
//   darkContainer: {
//     backgroundColor: 'black', // Dark mode background color
//   },
//   text: {
//     fontSize: 24,
//     color: 'black', // Light mode text color
//   },
//   darkText: {
//     color: 'white', // Dark mode text color
//   },
//   button: {
//     backgroundColor: 'blue',
//     padding: 10,
//     borderRadius: 5,
//     marginTop: 20,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//   },
// });

// export default Upload;

//---------------------------------------------------------- THIS CODE IS DARK MODE AND LIGHT MODE CODE AND THIS CODE IS VERY USEFUL.-----------------------------------------------------

// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet, useColorScheme, TouchableOpacity, StatusBar } from 'react-native';

// const Upload = () => {
//   const colorScheme = useColorScheme();
//   const [theme, setTheme] = useState(colorScheme);

//   useEffect(() => {
//     // Update theme whenever color scheme changes
//     setTheme(colorScheme);
//   }, [colorScheme]);

//   const toggleTheme = () => {
//     setTheme(theme === 'dark' ? 'light' : 'dark');
//   };

//   return (
//     <View style={[styles.container, theme === 'dark' && styles.darkContainer]}>
//       <StatusBar backgroundColor={theme === 'light' ? 'white' : 'black'} barStyle={theme === 'light' ? 'dark-content' : 'light-content'} />
//       <TouchableOpacity onPress={toggleTheme} style={styles.button}>
//         <Text style={styles.buttonText}>Mode</Text>
//       </TouchableOpacity>
//       {/* <Text style={[styles.text, theme === 'dark' && styles.darkText]}>
//         Hello, world!
//       </Text> */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'white', // Light mode background color
//   },
//   darkContainer: {
//     backgroundColor: 'black', // Dark mode background color
//   },
//   text: {
//     fontSize: 24,
//     color: 'black', // Light mode text color
//   },
//   darkText: {
//     color: 'white', // Dark mode text color
//   },
//   button: {
//     backgroundColor: 'orange',
//     padding: 10,
//     borderRadius: 40,
//     marginTop: 20,

//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight:'800',
//   },
// });

// export default Upload;

//This code is Dashboard Screen code.---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// import { StyleSheet, Text, View, StatusBar, Image, Dimensions, TouchableOpacity, useColorScheme } from 'react-native';
// import React, { useState, useEffect } from 'react';
// import Icon from 'react-native-vector-icons/Entypo';
// import Icon2 from 'react-native-vector-icons/MaterialIcons';

// const deviceHeight = Dimensions.get('window').height;
// const deviceWidth = Dimensions.get('window').width;

// const Dashboard = () => {
//   const colorScheme = useColorScheme();
//   const [theme, setTheme] = useState(colorScheme);

//   useEffect(() => {
//     // Update theme whenever color scheme changes
//     setTheme(colorScheme);
//   }, [colorScheme]);

//   const toggleTheme = () => {
//     setTheme(theme === 'dark' ? 'light' : 'dark');
//   };

//   return (
//     <View style={[styles.container, theme === 'dark' ? styles.darkContainer : null]}>
//       <StatusBar backgroundColor={theme === 'light' ? 'white' : 'black'} barStyle={theme === 'light' ? 'dark-content' : 'light-content'} />

//       {/* Top Menu */}
//       <View style={styles.maincontainer}>
//         <View style={styles.imgcontainer}>
//           <Image source={require('../../images/welcomelogo1.png')} style={styles.img} />
//           <Text style={[styles.dailogtext, theme === 'dark' && styles.dailogdarkText]}>Dailogwave</Text>
//         </View>
//         <View style={{ marginLeft: 120, }}>
//           <TouchableOpacity onPress={toggleTheme} style={styles.button}>
//             {/* <Text style={styles.buttonText}>Mode</Text> */}
//             {
//               theme === 'dark' ? <Icon name="light-up" size={23} color='white' /> : <Icon2 name="dark-mode" size={23} color='black' />
//             }
//           </TouchableOpacity>
//         </View>
//         <TouchableOpacity>
//           <View style={styles.roundcontainar}>
//             <Text style={{ fontSize: 20, fontWeight: '500', color: 'white' }}>H</Text>
//           </View>
//         </TouchableOpacity>
//       </View>

//       {/* Middle Menu */}
//       <View style={[styles.middlecontainer, theme === 'dark' ? styles.darkMiddleContainer : null]}>
//         <View style={{ marginLeft: 15 }}>
//           <Text style={[styles.text, theme === 'dark' && styles.darkText]}>Dashboard</Text>
//         </View>
//         <TouchableOpacity>
//           <View style={styles.phonecontainer}>
//             <Text style={styles.phonetext}>Get Phone Number</Text>
//           </View>
//         </TouchableOpacity>
//       </View>

//       {/* Last Menu */}
//       <View style={styles.lastmaincontainer}>
//         <View style={[styles.lastmenucontainer, theme === 'dark' && styles.lastmenudarkcontainer]}>
//           <View style={styles.camcontainer}>
//             <Text style={styles.camtext1}>1</Text>
//             <Text style={styles.camtext2}>Total Campaigns</Text>
//           </View>
//           <View style={styles.callcontainer}>
//             <Text style={styles.camtext1}>1</Text>
//             <Text style={styles.camtext2}>Total Calls</Text>
//           </View>
//           <View style={styles.creditcontainer}>
//             <Text style={styles.camtext1}>84</Text>
//             <Text style={styles.camtext2}>Remaining Credits</Text>
//           </View>
//         </View>
//       </View>
//     </View>
//   )
// }

// export default Dashboard

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white'
//   },
//   darkContainer: {
//     backgroundColor: 'black'
//   },
//   maincontainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginVertical: 8,
//   },
//   imgcontainer: {
//     alignItems: 'center',
//     marginLeft: 14,
//   },
//   img: {
//     height: deviceHeight * 0.055,
//     width: deviceWidth / 5.92,
//     resizeMode: 'contain',
//     marginVertical: 1,
//   },
//   dailogtext:{
//     fontSize: 8,
//     color: 'black', 
//   },
//   dailogdarkText:{
//     color: 'white',
//   },
//   button: {
//     backgroundColor: 'orange',
//     padding: 7,
//     borderRadius: 50,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: '800',
//   },
//   roundcontainar: {
//     backgroundColor: 'green',
//     borderRadius: 50,
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: deviceWidth / 6.8,
//     height: deviceHeight * 0.069,
//     marginRight: 13
//   },
//   middlecontainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginVertical: 14,
//     alignItems: 'center'
//   },
//   darkMiddleContainer: {
//     backgroundColor: 'black', // Dark mode background color for the middle menu
//   },
//   text: {
//     fontSize: 24,
//     color: 'black', // Light mode text color
//   },
//   darkText: {
//     color: 'white', // Dark mode text color
//   },
//   dashboardtext: {
//     fontSize: 22,
//     fontWeight: '700',
//     color: 'black'
//   },
//   phonecontainer: {
//     backgroundColor: 'dodgerblue',
//     marginRight: 10,
//     justifyContent: 'center',
//     borderRadius: 8,
//     width: deviceWidth / 2.8,
//     height: deviceHeight * 0.050,
//     alignItems: 'center'
//   },
//   phonetext: {
//     fontSize: 12,
//     marginRight: 0,
//     fontWeight: '700',
//     color: 'white'
//   },
//   lastmaincontainer: {
//     height: deviceHeight * 0.55,
//     width: deviceWidth / 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   lastmenucontainer: {
//     backgroundColor: 'white',
//     height: deviceHeight / 2.1,
//     width: deviceWidth / 1.1,
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     borderRadius: 10
//   },
//   lastmenudarkcontainer:{
//     backgroundColor:'black',
//   },
//   camcontainer: {
//     backgroundColor: 'dodgerblue',
//     borderRadius: 10,
//     height: deviceHeight * 0.13,
//     width: deviceWidth / 1.18,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginVertical: 10
//   },
//   camtext1: {
//     fontSize: 23,
//     marginBottom: 6,
//     color: 'white',
//     fontWeight: '800'
//   },
//   camtext2: {
//     fontSize: 15,
//     color: 'white',
//     fontWeight: '500'
//   },
//   callcontainer: {
//     backgroundColor: 'green',
//     borderRadius: 10,
//     height: deviceHeight * 0.13,
//     width: deviceWidth / 1.18,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginVertical: 10
//   },
//   creditcontainer: {
//     backgroundColor: 'red',
//     borderRadius: 10,
//     height: deviceHeight * 0.13,
//     width: deviceWidth / 1.18,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginVertical: 10
//   },
// })


// This code is Details Screen code.------------------------------------------------------------------------------------------------------------------


// import React, { useState, useEffect } from 'react';
// import { StyleSheet, Text, View, StatusBar, Image, Dimensions, TouchableOpacity, TextInput, useColorScheme } from 'react-native';
// import { Dropdown } from 'react-native-element-dropdown';
// import Icon from 'react-native-vector-icons/Entypo';
// import Icon2 from 'react-native-vector-icons/MaterialIcons';

// const deviceHeight = Dimensions.get('window').height;
// const deviceWidth = Dimensions.get('window').width;

// const show = [
//   { label: '10', value: '1' },
//   { label: '25', value: '2' },
//   { label: '50', value: '3' },
//   { label: '100', value: '4' },
// ];

// const Dashboard = () => {
//   const colorScheme = useColorScheme();
//   const [theme, setTheme] = useState(colorScheme); // State variable for theme

//   useEffect(() => {
//     // Update theme whenever color scheme changes
//     setTheme(colorScheme);
//   }, [colorScheme]);

//   const toggleTheme = () => {
//     // Toggle between light and dark mode
//     setTheme(theme === 'dark' ? 'light' : 'dark');
//   };

//   const [value2, setValue2] = useState(null);

//   return (
//     <View style={[styles.container, theme === 'dark' ? styles.darkContainer : null]}>
//       <StatusBar backgroundColor={theme === 'light' ? 'white' : '#181F39'} barStyle={theme === 'light' ? 'dark-content' : 'light-content'} />

//       {/* Top Menu */}
//       <View style={styles.maincontainer}>
//         <View style={styles.imgcontainer}>
//           <Image source={require('../../images/welcomelogo1.png')} style={styles.img} />
//           <Text style={[styles.dailogtext, theme === 'dark' && styles.dailogdarkText]}>Dailogwave</Text>
//         </View>
//         <View style={{ marginLeft: 120 }}>
//           <TouchableOpacity onPress={toggleTheme} style={styles.button}>
//             {
//               theme === 'dark' ? <Icon name="light-up" size={23} color='white' /> : <Icon2 name="dark-mode" size={23} color='black' />
//             }
//           </TouchableOpacity>
//         </View>
//         <TouchableOpacity>
//           <View style={styles.roundcontainar}>
//             <Text style={{ fontSize: 20, fontWeight: '500', color: 'white' }}>H</Text>
//           </View>
//         </TouchableOpacity>
//       </View>

//       {/* Middle Menu */}
//       <View style={[styles.middlecontainer, theme === 'dark' && styles.middlecontainerdark]}>
//         <View style={{ height: deviceHeight * 0.5, marginVertical: 15, alignItems: 'center' }}>
//           <View style={[styles.middledetails, theme === 'dark' && styles.middledetailsdark]}>

//             {/* Details */}
//             <View style={{ height: deviceHeight * 0.06, borderBottomWidth: 0.3, borderBottomColor: 'gray' }}>
//               <Text style={[styles.detailstext, theme === 'dark' && styles.detailstextdark]}>Campaign Details</Text>
//             </View>

//             {/* Dropdown */}
//             <View style={{ height: deviceHeight * 0.14, alignItems: 'center', marginVertical: 5 }}>
//               {/* show */}
//               <View style={{ width: deviceWidth / 1.1, height: deviceHeight * 0.05, flexDirection: 'row', alignItems: 'center', gap: 8, marginVertical: 7 }}>
//                 <Text style={{ fontWeight: '400', fontSize: 14, color: 'gray' }}>Show</Text>
//                 <Dropdown
//                   style={[styles.dropdown2, theme === 'dark' && styles.dropdown2dark]}
//                   placeholderStyle={styles.placeholderStyle2}
//                   selectedTextStyle={styles.selectedTextStyle2}
//                   data={show}
//                   maxHeight={200}
//                   labelField="label"
//                   valueField="value"
//                   placeholder="select"
//                   value={value2}
//                   onChange={item => {
//                     setValue2(item.value);
//                   }}
//                 />
//                 <Text style={{ fontWeight: '400', fontSize: 14, color: 'gray' }}>entries</Text>
//               </View>

//               {/* search */}
//               <View style={{ width: deviceWidth / 1.1, height: deviceHeight * 0.05, flexDirection: 'row', alignItems: 'center', gap: 8, marginVertical: 7 }}>
//                 <Text style={{ fontWeight: '400', color: 'gray' }}>Search:</Text>
//                 <TextInput keyboardType={'web-search'} style={[styles.textinputbox, theme === 'dark' && styles.textinputboxdark]} />
//               </View>

//             </View>

//             {/* Campaign id */}
//             <View style={{ height: deviceHeight * 0.13, alignItems: 'center' }}>
//               <View style={{ width: deviceWidth / 1.1, height: deviceHeight * 0.05, justifyContent: 'center', marginVertical: 7, borderBottomWidth: 0.3, borderBottomColor: 'gray' }}>
//                 <Text style={[styles.campaignidtext, theme === 'dark' && styles.campaignidtextdark]}>Campaign ID</Text>
//               </View>
//               <View style={{ width: deviceWidth / 1.1, height: deviceHeight * 0.03 }}>
//                 <Text style={[styles.campaignidtext, theme === 'dark' && styles.campaignidtextdark]}>Campaign ID</Text>
//               </View>
//             </View>

//             {/* Showing entries */}
//             <View style={{ height: deviceHeight * 0.12, alignItems: 'center',width:deviceWidth*0.94,position:'absolute',bottom:5 }}>
//               <View style={{ width: deviceWidth / 1.1, height: deviceHeight * 0.035, alignItems: 'center', marginVertical: 2, justifyContent: 'center' }}>
//                 <Text style={{ color: 'gray', fontSize: 14, fontWeight: 400 }}>Showing 1 to 1 of 1 entries</Text>
//               </View>
//               <View style={[styles.lastentriesbox, theme === 'dark' && styles.lastentriesboxdark]}>
//                 <View style={[styles.leftrightarrow, theme === 'dark' && styles.leftrightarrowdark]}>
//                   {
//                     theme === 'dark' ? <Icon2 name="keyboard-double-arrow-left" size={23} color='white'  /> : <Icon2 name="keyboard-double-arrow-left" size={23} color='black'  />
//                   }
//                 </View>
//                 <View style={{ backgroundColor: '#00BFFF', width: deviceWidth / 9, height: deviceHeight * 0.046, borderRadius: 6, justifyContent: 'center' }}>
//                   <Text style={[styles.onetext, theme === 'dark' && styles.onetextdark]}>1</Text>
//                 </View>
//                 <View style={[styles.leftrightarrow, theme === 'dark' && styles.leftrightarrowdark]}>
//                   {
//                     theme === 'dark' ? <Icon2 name="keyboard-double-arrow-right" size={23} color='white'  /> : <Icon2 name="keyboard-double-arrow-right" size={23} color='black'  />
//                   }
//                 </View>
//               </View>
//             </View>

//           </View>
//         </View>
//       </View>
//     </View>
//   )
// }

// export default Dashboard;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white'
//   },
//   darkContainer: {
//     backgroundColor: '#181F39', // Dark mode background color
//   },
//   maincontainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginVertical: 8,
//   },
//   imgcontainer: {
//     alignItems: 'center',
//     marginLeft: 14,
//   },
//   img: {
//     height: deviceHeight * 0.055,
//     width: deviceWidth / 5.92,
//     resizeMode: 'contain',
//     marginVertical: 1,
//   },
//   button: {
//     backgroundColor: 'orange',
//     padding: 10,
//     borderRadius: 40,
//   },
//   dailogtext: {
//     fontSize: 8,
//     color: 'black',
//   },
//   dailogdarkText: {
//     color: 'white',
//   },
//   roundcontainar: {
//     backgroundColor: 'green',
//     borderRadius: 50,
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: deviceWidth / 6.8,
//     height: deviceHeight * 0.069,
//     marginRight: 13
//   },
//   middlecontainer:{
//     flex:1,
    
//   },
//   middledetails:{
//     backgroundColor: '#F5F5F5',
//     height: deviceHeight * 0.8,
//     width: deviceWidth / 1.07,
//     marginVertical: 10,
//     borderRadius: 10 , 
//   },
//   middledetailsdark:{
//     backgroundColor:'#1E2746',
//   },
//   detailstext:{ 
//     fontSize: 20, 
//     alignSelf: 'center',
//     top: 7, 
//     color: 'black' ,
//   },
//   detailstextdark:{
//     color:'white'
//   },
//   dropdown2: {
//     height: 37,
//     borderRadius: 7,
//     borderWidth: 0.77,
//     borderColor:'gray',
//     padding: 8,
//     width: deviceWidth / 4.4,
//     backgroundColor: '#F5F5F5'
//   },
//   dropdown2dark:{
//     backgroundColor:'#1E2746'
//   },
//   placeholderStyle2: {
//     fontSize: 14,
//     color: 'gray',
    
//   },
//   selectedTextStyle2: {
//     fontSize: 15,
//     color: 'black'
//   },
//   textinputbox:{ 
//     borderWidth: 0.77,
//     borderColor:'gray', 
//     borderRadius: 7, 
//     width: deviceWidth / 1.5,
//     backgroundColor: '#F5F5F5' 
//   },
//   textinputboxdark:{
//     backgroundColor:'#1E2746'
//   },
//   campaignidtext:{ 
//     fontWeight: 600, 
//     color: 'black', 
//     marginLeft: 12,
//   },
//   campaignidtextdark:{
//     color:'white'
//   },
//   lastentriesbox:{ 
//     backgroundColor: '#fff', 
//     width: deviceWidth / 1.1, 
//     height: deviceHeight * 0.06, 
//     alignItems: 'center', 
//     marginVertical: 0, 
//     justifyContent: 'center', 
//     borderRadius: 10, 
//     flexDirection: 'row', 
//     gap: 10 ,
//   },
//   lastentriesboxdark:{
//     backgroundColor:'#181F39'
//   },
//   leftrightarrow:{ 
//     backgroundColor: '#F5F5F5', 
//     width: deviceWidth / 9, 
//     height: deviceHeight * 0.046, 
//     borderRadius: 6, 
//     justifyContent: 'center',
//     alignItems:'center' 
//   },
//   leftrightarrowdark:{
//     backgroundColor:'#1E2746'
//   },
//   onetext:{ 
//     alignSelf: 'center', 
//     color: 'black', 
//     fontWeight: '600', 
//   },
//   onetextdark:{
//     color:'white'
//   },
// });



// This code is Call Screen code.------------------------------------------------------------------------------------------------------------------


// import { StyleSheet, Text, View, StatusBar, Image, Dimensions, TouchableOpacity, TextInput, Button, useColorScheme } from 'react-native'
// import React,{useState, useEffect} from 'react'
// import { Dropdown,MultiSelect } from 'react-native-element-dropdown';
// import DocumentPicker from 'react-native-document-picker';
// import Icon from 'react-native-vector-icons/Entypo';
// import Icon2 from 'react-native-vector-icons/MaterialIcons';

// const deviceHeight = Dimensions.get( 'window' ).height;
// const deviceWidth = Dimensions.get( 'window' ).width;

// const show = [
//   {label: 'select', value: '1' },
//   {label: 'value', value: '2' },
// ];

// const Dashboard = () => {

//   const colorScheme = useColorScheme();
//   const [theme, setTheme] = useState(colorScheme); // State variable for theme

//   useEffect(() => {
//     // Update theme whenever color scheme changes
//     setTheme(colorScheme);
//   }, [colorScheme]);

//   const toggleTheme = () => {
//     // Toggle between light and dark mode
//     setTheme(theme === 'dark' ? 'light' : 'dark');
//   };

//   const [pickedDocument, setPickedDocument] = useState(null);

//   const pickDocument = async () => {
//     try {
//       const res = await DocumentPicker.pick({
//         type: [DocumentPicker.types.allFiles],
//       });
//       setPickedDocument(res);
//     } catch (err) {
//       if (DocumentPicker.isCancel(err)) {
//         // User cancelled the picker
//         console.log('User cancelled the picker');
//       } else {
//         // Error occurred while picking the document
//         console.log('Error picking document:', err);
//       }
//     }
//   };


//   const [value2, setValue2] = useState(null);
//   return (
//     <View style={[styles.container, theme === 'dark' ? styles.darkContainer : null]}>
//       <StatusBar backgroundColor={theme === 'light' ? 'white' : '#181F39'} barStyle={theme === 'light' ? 'dark-content' : 'light-content'} />

//       {/* Top Menu */}
//       <View style={styles.maincontainer}>
//         <View style={styles.imgcontainer}>
//           <Image source={require('../../images/welcomelogo1.png')} style={styles.img} />
//           <Text style={[styles.dailogtext, theme === 'dark' && styles.dailogdarkText]}>Dailogwave</Text>
//         </View>
//         <View style={{ left:75 }}>
//           <TouchableOpacity onPress={toggleTheme} style={styles.button}>
//             {
//               theme === 'dark' ? <Icon name="light-up" size={23} color='white' /> : <Icon2 name="dark-mode" size={23} color='black' />
//             }
//           </TouchableOpacity>
//         </View>
//         <TouchableOpacity>
//           <View style={styles.roundcontainar}>
//             <Text style={{ fontSize: 20, fontWeight: '500', color: 'white' }}>H</Text>
//           </View>
//         </TouchableOpacity>
//       </View>

//       {/* Middle Menu */}
//       <View style={{flex:1}}>
//       <View style={{ height: deviceHeight * 0.5, marginVertical: 15, alignItems: 'center' }}>
//           <View style={[styles.middledetails, theme === 'dark' && styles.middledetailsdark]}>

//             {/* Calling System */}
//             <View style={{height:deviceHeight*0.05}}>
//               <Text style={[styles.callingtext, theme === 'dark' && styles.callingtextdark]}>Calling System</Text>
//             </View>

//             {/* Compaign */}
//             <View style={{height:deviceHeight*0.55,alignItems:'center',marginVertical:10}}>

//               {/* Name */}
//               <View style={{width:deviceWidth/1.13,height:deviceHeight*0.084,gap:8,marginVertical:4,}}>
//                 <Text style={[styles.campaigntext, theme === 'dark' && styles.campaigntextdark]}>Campaign Name</Text>
//                 <TextInput placeholder='campaign name' placeholderTextColor='gray' keyboardType={'web-search'} style={[styles.campaigninput, theme === 'dark' && styles.campaigninputdark]}/>
//               </View>

//               {/* Voice ID */}
//               <View style={{width:deviceWidth/1.13,height:deviceHeight*0.084,gap:8,marginVertical:7}}>
//                 <Text style={[styles.voiceidtext, theme === 'dark' && styles.voiceidtextdark]}>Voice ID</Text>
//                 <Dropdown
//                   style={[styles.dropdown2, theme === 'dark' && styles.dropdown2dark]}
//                   placeholderStyle={styles.placeholderStyle2}
//                   selectedTextStyle={styles.selectedTextStyle2}
//                   data={show}
//                   maxHeight={200}
//                   labelField="label"
//                   valueField="value"
//                   placeholder="select"
//                   value={value2}
//                   onChange={item => {
//                     setValue2(item.value);
//                   }}
//                 />
//               </View>

//               {/* Number File */}
//               <View style={{width:deviceWidth/1.13,height:deviceHeight*0.088,gap:8,marginVertical:4,}}>
//                 <View style={{flexDirection:'row',justifyContent:'space-between'}}>
//                   <Text style={[styles.numberfiletext, theme === 'dark' && styles.numberfiletextdark]}>Number File</Text>
//                   <Text style={{fontWeight:'600',color:'red'}}>Sample File</Text>
//                 </View>
//                 <TouchableOpacity onPress={pickDocument} style={styles.filebtn}>
//                     <View style={{backgroundColor:'#FFEBCD',height:deviceHeight*0.05,width:deviceWidth/3.9,alignItems:'center',justifyContent:'center',borderTopLeftRadius:10,borderBottomLeftRadius:10}}>
//                       <Text style={{color:'black',fontSize:15,fontWeight:'700',}}>Choose File</Text>
//                     </View>
//                     <Text style={{marginLeft:5}}> No file chosen</Text>
//                 </TouchableOpacity>
//                 {pickedDocument && (
//                   <Text style={{ color:'black'}}>
//                     Picked Document: {pickedDocument.name}
//                   </Text>
//                 )}
//               </View>

//               {/* Max Retry */}
//               <View style={{width:deviceWidth/1.13,height:deviceHeight*0.084,gap:8,marginTop:40}}>
//                 <Text style={[styles.maxtext, theme === 'dark' && styles.maxtextdark]}>Max Retry</Text>
//                 <TextInput placeholder='Maximum call retry to unanswered call' placeholderTextColor='gray' keyboardType={'web-search'} style={[styles.maxinput, theme === 'dark' && styles.maxinputdark]}/>
//               </View>

//               {/* Retry Time */}
//               <View style={{width:deviceWidth/1.13,height:deviceHeight*0.084,gap:8,marginVertical:10}}>
//                 <Text style={[styles.retrytext, theme === 'dark' && styles.retrytextdark]}>Retry Time</Text>
//                 <TextInput placeholder='Gap between 2 calls in seconds' placeholderTextColor='gray' keyboardType={'web-search'} style={{borderWidth:1,borderRadius:7,width:deviceWidth/1.13,height:deviceHeight*0.048,justifyContent:'center',fontWeight:'400',borderColor:'gray'}}/>
//               </View>


//             </View>

//             {/* Button Campaign */}
//             <View style={styles.runbtnContainer}>
//               <TouchableOpacity  style={styles.runbtn}>
//                   <Text style={[styles.runtext, theme === 'dark' && styles.runtextdark]}>Run Campaign</Text>
//               </TouchableOpacity>
//             </View>

//           </View>
//         </View>
//       </View>
//     </View>
//   )
// }

// export default Dashboard

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor:'white'
//     },
//     darkContainer: {
//       backgroundColor: '#181F39', // Dark mode background color
//     },
//     maincontainer: {
//       flexDirection: 'row',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       marginVertical: 8,
//     },
//     imgcontainer: {
//       alignItems: 'center',
//       marginLeft: 14,
//     },
//     img: {
//       height: deviceHeight * 0.055,
//       width: deviceWidth / 5.92,
//       resizeMode: 'contain',
//       marginVertical: 1,
//     },
//     button: {
//       backgroundColor: 'orange',
//       padding: 7,
//       borderRadius: 50,
//     },
//     dailogtext: {
//       fontSize: 10,
//       color: 'black',
//     },
//     dailogdarkText: {
//       color: 'white',
//     },
//     roundcontainar: {
//       backgroundColor: 'green',
//       borderRadius: 50,
//       justifyContent: 'center',
//       alignItems: 'center',
//       width: deviceWidth *0.13,
//       height: deviceHeight * 0.065,
//       marginRight: 13
//     },
//     middledetails:{
//       backgroundColor: '#F5F5F5',
//       height: deviceHeight * 0.77,
//       width: deviceWidth / 1.07,
//       marginVertical: 10,
//       borderRadius: 10 , 
//     },
//     middledetailsdark:{
//       backgroundColor:'#1E2746',
//     },
//     callingtext:{
//       fontSize:22,
//       fontWeight:'400',
//       marginLeft:10,
//       top:7,
//       color:'black',
//       alignSelf:'center'
//     },
//     callingtextdark:{
//       color:'white',
//     },
//     campaigntext:{
//       fontWeight:'500',
//       color:'black'
//     },
//     campaigntextdark:{
//       color:'white',
//     },
//     campaigninput:{
//       borderWidth:0.77,
//       borderColor:'gray',
//       borderRadius:7,
//       width:deviceWidth/1.13,
//       height:deviceHeight*0.048,
//       justifyContent:'center',
//       fontWeight:'400', 
//       backgroundColor: '#F5F5F5',
      
//     },
//     campaigninputdark:{
//       backgroundColor:'#1E2746',
      
//     },
//     voiceidtext:{
//       fontWeight:'500',
//       color:'black'
//     },
//     voiceidtextdark:{
//       color:'white'
//     },
//     camcontainer:{
//       borderRadius:10,
//       height:deviceHeight*0.05,
//       justifyContent:'center',
//       width:deviceWidth/1.18,
//       marginVertical:10,
//       backgroundColor:'red',
//       borderBottomWidth:1,
//       borderBottomColor:'black',
//     },
//     camtext1:{
//       fontSize:18,
//       marginBottom:6,
//       color:'black',
//       fontWeight:'500'
//     },
//     dropdown2: {
//       height: 37,
//       borderRadius: 7,
//       borderWidth: 0.77,
//       borderColor:'gray',
//       padding: 8,
//       width: deviceWidth / 1.13,
//       backgroundColor: '#F5F5F5',
//     },
//     dropdown2dark:{
//       backgroundColor:'#1E2746'
//     },
//     placeholderStyle2: {
//       fontSize: 15,
//       fontWeight:'400',
//       color: 'gray',
      
//     },
//     selectedTextStyle2: {
//       fontSize: 15,
//       color: 'gray'
//     },
//     numberfiletext:{
//       fontWeight:'500',
//       color:'black'
//     },
//     numberfiletextdark:{
//       color:'white'
//     },
//     maxtext:{
//       fontWeight:'500',
//       color:'black'
//     },
//     maxtextdark:{
//       color:'white'
//     },
//     maxinput:{
//       borderWidth:1,
//       borderRadius:7,
//       width:deviceWidth/1.13,
//       height:deviceHeight*0.048,
//       justifyContent:'center',
//       fontWeight:'400',
//       borderColor:'gray',
//     },
//     retrytext:{
//       fontWeight:'500',
//       color:'black'
//     },
//     retrytextdark:{
//       color:'white'
//     },
//     filebtn:{
//       backgroundColor:'#DEB887',
//       width:deviceWidth/1.13,
//       height:deviceHeight*0.05,
//       alignItems:'center',
//       borderRadius:10,
//       flexDirection:'row'
//     },
//     runbtnContainer:{
//       alignItems:'center',
//       borderRadius:15,
//       justifyContent:'center',
//       // marginVertical:10,
//       // backgroundColor:'red',
//       width:deviceWidth*0.93,
//       height:deviceHeight*0.08,
//       position:'absolute',
//       bottom:15,
      
//     },
//     runtext:{
//       color:'white',
//       fontSize:18,
//       fontWeight:'700'
//     },
//     runtextdark:{
//       color:'black'
//     },
//     runbtn:{
//       backgroundColor:'#00BFFF',
//       width:deviceWidth/1.18,
//       height:deviceHeight*0.055,
//       justifyContent:'center',
//       alignItems:'center',
//       borderRadius:8
//   },
// })


// This code is Audio screen code.---------------------------------------------------------------------------------------------------------------------------------------------------------

// import { StyleSheet, Text, View, StatusBar, Image, Dimensions, TouchableOpacity, TextInput, Alert, useColorScheme } from 'react-native'
// import React,{useState,useEffect} from 'react'
// import { Dropdown,MultiSelect } from 'react-native-element-dropdown';
// import AwesomeAlert from 'react-native-awesome-alerts';
// import DocumentPicker from 'react-native-document-picker';
// import { Table, Row, Rows } from 'react-native-table-component';
// import Icon from 'react-native-vector-icons/Entypo';
// import Icon2 from 'react-native-vector-icons/MaterialIcons';

// const deviceHeight = Dimensions.get( 'window' ).height;
// const deviceWidth = Dimensions.get( 'window' ).width;

// const show = [
//   {label: '10', value: '1' },
//   {label: '25', value: '2' },
//   {label: '50', value: '3' },
//   {label: '100', value: '4' },
// ];

// const Dashboard = () => {
//   const colorScheme = useColorScheme();
//   const [theme, setTheme] = useState(colorScheme); // State variable for theme

//   useEffect(() => {
//     // Update theme whenever color scheme changes
//     setTheme(colorScheme);
//   }, [colorScheme]);

//   const toggleTheme = () => {
//     // Toggle between light and dark mode
//     setTheme(theme === 'dark' ? 'light' : 'dark');
//   };

//   const tableData = [
//     ['89354'],
//     ['67238'],
//     ['90254'],
//   ];
//   const tableData1 = [
//     ['Header 1'],
//     ['Data 1'],
//     ['Data 2'],
//   ];
//   const tableData2 = [
//     ['Duration','Credits','Status'],
//     ['89354','2','active'],
//     ['67238','2','active'],
//     ['90254','2','active'],
//   ];

//   const [pickedDocument, setPickedDocument] = useState(null);

//   const pickDocument = async () => {
//     try {
//       const res = await DocumentPicker.pick({
//         type: [DocumentPicker.types.audio],
//       });
//       setPickedDocument(res);
//     } catch (err) {
//       if (DocumentPicker.isCancel(err)) {
//         // User cancelled the picker
//         console.log('User cancelled the picker');
//       } else {
//         // Error occurred while picking the document
//         console.log('Error picking document:', err);
//       }
//     }
//   };

//   const [showAlert, setShowAlert] = useState(false);
//   const [showAlert1, setShowAlert1] = useState(false);
//   const [value2, setValue2] = useState(null);
//   return (
//     <View style={[styles.container, theme === 'dark' ? styles.darkContainer : null]}>
//       <StatusBar backgroundColor={theme === 'light' ? 'white' : '#181F39'} barStyle={theme === 'light' ? 'dark-content' : 'light-content'} />

//       {/* Top Menu */}
//       <View style={styles.maincontainer}>
//         <View style={styles.imgcontainer}>
//           <Image source={require('../../images/welcomelogo1.png')} style={styles.img} />
//           <Text style={[styles.dailogtext, theme === 'dark' && styles.dailogdarkText]}>Dailogwave</Text>
//         </View>
//         <View style={{ left:75 }}>
//           <TouchableOpacity onPress={toggleTheme} style={[styles.button, theme === 'dark' && styles.buttondark]}>
//             {
//               theme === 'dark' ? <Icon name="light-up" size={23} color='black' /> : <Icon2 name="dark-mode" size={23} color='white' />
//             }
//           </TouchableOpacity>
//         </View>
//         <TouchableOpacity>
//           <View style={styles.roundcontainar}>
//             <Text style={{ fontSize: 20, fontWeight: '500', color: 'white' }}>H</Text>
//           </View>
//         </TouchableOpacity>
//       </View>

//       {/* Middle Menu */}
//       <View style={{flex:1}}>
//       <View style={{ height: deviceHeight * 0.5, marginVertical: 15, alignItems: 'center' }}>
//           <View style={[styles.middledetails, theme === 'dark' && styles.middledetailsdark]}>

//             {/* Details */}
//             <View style={{height:deviceHeight*0.07,borderBottomWidth:0.3,borderBottomColor:'gray',flexDirection:'row',alignItems:'center',gap:13,}}>
//               <View style={{}}>
//                 <Text style={[styles.audiofiletext, theme === 'dark' && styles.audiofiletextdark]}>Audio File</Text>
//               </View>
//               <TouchableOpacity onPress={() => setShowAlert(!showAlert)}>
//                 <View style={{backgroundColor:'#00BFFF',width:deviceWidth/3.8,height:deviceHeight*0.04,alignItems:'center',justifyContent:'center',borderRadius:5}}>
//                   <Text style={[styles.uploadfiletext, theme === 'dark' && styles.uploadfiletextdark]}>Upload File</Text>
//                 </View>
//               </TouchableOpacity>
//               <AwesomeAlert
//                 show={showAlert}

//                 title="Upload Audio"
//                 titleStyle={{ fontSize: 24, color:"black", borderBottomWidth:0.4,borderBottomColor:'gray',width:'117%', }}
//                 showCancelButton={true}
//                 cancelText="Close"
//                 cancelButtonStyle={{ backgroundColor:"black", width: 80 , marginLeft:90}}
//                 cancelButtonTextStyle={{ fontSize: 18,alignSelf:'center' }}
//                 onCancelPressed={() => {
//                   console.log('Close pressed')
//                   setShowAlert(false)
//                 }}
//                 showConfirmButton={true}
//                 confirmText="Upload"
//                 confirmButtonStyle={{ backgroundColor:"#00BFFF", width: 85,  }}
//                 confirmButtonTextStyle={{ fontSize: 18,alignSelf:'center' }}
//                 onConfirmPressed={() => {
//                   console.log("Upload pressed")
//                   setShowAlert(false)
//                 }}
//                 closeOnTouchOutside={false} // default true
//                 closeOnHardwareBackPress={false} // default true
//                 onDismiss={() => console.log('Dismiss Called.')}

//                 customView={
//                   <View style={{ padding: 10, marginVertical: 0, borderRadius: 3, borderBottomWidth:0.4,borderBottomColor:'gray',width:deviceWidth/1.24,height:deviceHeight*0.12,justifyContent:'center',alignItems:'center', }}>
//                     <TouchableOpacity onPress={pickDocument} style={{backgroundColor:'#DEB887',width:deviceWidth/1.4,height:deviceHeight*0.06,alignItems:'center',borderRadius:10,flexDirection:'row'}}>
//                       <View style={{backgroundColor:'#FFEBCD',height:deviceHeight*0.06,width:deviceWidth/3.9,alignItems:'center',justifyContent:'center',borderTopLeftRadius:10,borderBottomLeftRadius:10}}>
//                         <Text style={{color:'black',fontSize:15,fontWeight:'700',}}>Choose File</Text>
//                       </View>
//                       <Text style={{marginLeft:5}}> No file chosen</Text>
//                     </TouchableOpacity>
//                     {pickedDocument && (
//                     <Text style={{ color:'black'}}>
//                       Picked Document: {pickedDocument.name}
//                     </Text>
//                     )}
//                   </View>
//                 }
//               />
//             </View>

//             {/* Dropdown */}
//             <View style={{height:deviceHeight*0.07,alignItems:'center',marginVertical:5,}}>

//               {/* search */}
//               <View style={{width:deviceWidth/1.13,height:deviceHeight*0.05,flexDirection:'row',alignItems:'center',gap:8,marginVertical:7}}>
//                 <Text style={{fontWeight:'400',color:'gray',fontSize:14}}>Search:</Text>
//                 <TextInput keyboardType={'web-search'} style={[styles.textinputbox, theme === 'dark' && styles.textinputboxdark]}/>
//               </View>

//             </View>

//             {/* Compaign id */}
//             <View style={{height:deviceHeight*0.13,}}>
//               <View style={{width:deviceWidth/1.07,height:deviceHeight*0.05,justifyContent:'center',marginVertical:7,borderBottomWidth:0.5,borderBottomColor:'gray'}}>
//                 <Text style={[styles.audioidtext, theme === 'dark' && styles.audioidtextdark ]}>Audio ID</Text>
//               </View>
              
//               {/* Audio Table */}
//               <View style={styles.tableContainer}>
//                 <View style={[styles.audiotable, theme === 'dark' && styles.audiotabledark]}>
//                   <View style={{}}>
//                     {tableData.map((rowData, rowIndex) => (
//                       <View key={rowIndex} style={styles.rowContainer}>
//                         {rowData.map((cellData, cellIndex) => (
//                           <View key={cellIndex} style={styles.cellContainer}>
//                             <TouchableOpacity onPress={() => setShowAlert1(!showAlert1)} style={{backgroundColor:'skyblue',width:deviceWidth/4.2,height:deviceHeight*0.045,alignItems:'center',justifyContent:'center',borderRadius:8}}>
//                               <Text style={[styles.cellText, theme === 'dark' && styles.cellTextdark]}>{cellData}</Text>
//                             </TouchableOpacity>
//                             <AwesomeAlert
//                               show={showAlert1}

//                               title="Audio Details"
//                               titleStyle={{ fontSize: 24, color:"black", borderBottomWidth:0.3,borderBottomColor:'gray',width:'117%', }}

//                               showCancelButton={true}
//                               cancelText="Close"
//                               cancelButtonStyle={{ backgroundColor:"black",  width: deviceWidth*0.23, height:deviceHeight*0.05, }}
//                               cancelButtonTextStyle={{ fontSize: 18,alignSelf:'center' }}
//                               onCancelPressed={() => {
//                                 console.log('Close pressed')
//                                 setShowAlert1(false)
//                               }}
//                               showConfirmButton={true}
//                               confirmText="Ok"
//                               confirmButtonStyle={{ backgroundColor:"#00BFFF", width: deviceWidth*0.23, height:deviceHeight*0.05  }}
//                               confirmButtonTextStyle={{ fontSize: 18,alignSelf:'center' }}
//                               onConfirmPressed={() => {
//                                 console.log("Ok pressed")
//                                 setShowAlert1(false)
//                               }}
//                               closeOnTouchOutside={false} // default true
//                               closeOnHardwareBackPress={false} // default true
//                               onDismiss={() => console.log('Dismiss Called.')}

//                               customView={
//                                 <View style={styles.tableContainer2}>
//                                   {tableData2.map((rowData, rowIndex) => (
//                                     <View key={rowIndex} style={styles.rowContainer2}>
//                                       {rowData.map((cellData, cellIndex) => (
//                                         <View key={cellIndex} style={styles.cellContainer2}>
//                                           <Text style={styles.cellText2}>{cellData}</Text>
//                                         </View>
//                                       ))}
//                                     </View>
//                                   ))}
//                                 </View>
//                               }
//                             />
//                           </View>
//                         ))}
//                       </View>
//                     ))}
//                   </View>
//                   <View>
//                     {tableData1.map((rowData, rowIndex) => (
//                       <View key={rowIndex} style={styles.rowContainer1}>
//                         {rowData.map((cellData, cellIndex) => (
//                           <View key={cellIndex} style={styles.cellContainer1}>
//                             <Text style={[styles.cellText1, theme === 'dark' && styles.cellText1dark]}>{cellData}</Text>
//                           </View>
//                         ))}
//                       </View>
//                     ))}
//                   </View>
//                 </View>
//               </View>

//             </View>

//           </View>
//         </View>
//       </View>
//     </View>
//   )
// }

// export default Dashboard

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white'
//   },
//   darkContainer: {
//     backgroundColor: '#181F39', // Dark mode background color
//   },
//   maincontainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginVertical: 8,
//   },
//   imgcontainer: {
//     alignItems: 'center',
//     marginLeft: 14,
//   },
//   img: {
//     height: deviceHeight * 0.055,
//     width: deviceWidth / 5.92,
//     resizeMode: 'contain',
//     marginVertical: 1,
//   },
//   button: {
//     backgroundColor: 'black',
//     padding: 7,
//     borderRadius: 50,
//   },
//   buttondark:{
//     backgroundColor:'white'
//   },
//   dailogtext: {
//     fontSize: 10,
//     color: 'black',
//   },
//   dailogdarkText: {
//     color: 'white',
//   },
//   roundcontainar: {
//     backgroundColor: 'green',
//     borderRadius: 50,
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: deviceWidth *0.13,
//     height: deviceHeight * 0.065,
//     marginRight: 13
//   },
//   middledetails:{
//     backgroundColor: '#F5F5F5',
//     height: deviceHeight * 0.77,
//     width: deviceWidth / 1.07,
//     marginVertical: 10,
//     borderRadius: 10 , 
//   },
//   middledetailsdark:{
//     backgroundColor:'#1E2746',
//   },
//   audiofiletext:{
//     fontSize:17,
//     fontWeight:'600',
//     marginLeft:10,
//     color:'black'
//   },
//   audiofiletextdark:{
//     color:'white'
//   },
//   uploadfiletext:{
//     fontSize:13,
//     fontWeight:'500',
//     color:'black'
//   },
//   uploadfiletextdark:{
//     color:'white'
//   },
//   textinputbox:{ 
//     borderWidth: 0.77,
//     borderColor:'gray', 
//     borderRadius: 7, 
//     width: deviceWidth / 1.5,
//     backgroundColor: '#F5F5F5' 
//   },
//   textinputboxdark:{
//     backgroundColor:'#1E2746'
//   },
//   audioidtext:{
//     fontWeight:600,
//     color:'black',
//     marginLeft:18
    
//   },
//   audioidtextdark:{
//     color:'white'
//   },
//   tableContainer: {
//     flexDirection: 'row',
//     // borderWidth:1,
//     // backgroundColor:'red',
//     justifyContent:'center',
//     height:deviceHeight*0.26,
//     alignItems:'center'
//   },
//   audiotable:{
//     backgroundColor:'white',
//     flexDirection:'row',
//     width:deviceWidth/1.09,
//     height:deviceHeight*0.25,
//     borderRadius:10
//   },
//   audiotabledark:{
//     backgroundColor:'#181F39'
//   },
//   rowContainer: {
//     flexDirection: 'row',
//     width:deviceWidth/3,
//     // backgroundColor:'gray'
//   },
//   cellContainer: {
//     flex: 1,
//     padding: 13,
//     justifyContent: 'center',
//     // backgroundColor:'gray',
//     height:deviceHeight*0.085
//   },
//   cellText: {
//     fontSize: 16,
//     color:'black'
//   },
//   cellTextdark:{
//     color:'white'
//   },
//   rowContainer1: {
//     flexDirection: 'row',
//     width:deviceWidth/1.68,
//     // backgroundColor:'red',
    
//   },
//   cellContainer1: {
//     flex: 1,
//     padding: 13,
//     justifyContent: 'center',
//     height:deviceHeight*0.085
//   },
//   cellText1: {
//     fontSize: 16,
//     alignSelf:'center',
//     color:'black'
//   },
//   cellText1dark:{
//     color:'white',
//   },
//   tableContainer2: {
//     flexDirection: 'column',
//     width:deviceWidth/1.3,
//     borderBottomWidth:0.3,
//     borderBottomColor:'gray'
//   },
//   rowContainer2: {
//     flexDirection: 'row',
//   },
//   cellContainer2: {
//     flex: 1,
//     padding: 10,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   cellText2: {
//     fontSize: 16,
//   },
// })








import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar, Image, Dimensions, TouchableOpacity, TextInput, useColorScheme } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
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

const Upload = ({navigation = useNavigation()}) => {

  const tableData = [
    ['89354'],
    
  ];
  const tableData1 = [
    ['Data 1'],
    
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
        <TouchableOpacity onPress={()=> navigation.navigate("LoginScreen")} style={{left:77}}>
          <View style={{backgroundColor:'black',width:deviceWidth*0.09,height:deviceHeight*0.04,borderRadius:10,justifyContent:'center',alignItems:'center'}}>
            <Icon2 name="logout" size={20} color='white' />
          </View>
        </TouchableOpacity>
        <View style={{ left:40 }}>
          <TouchableOpacity onPress={toggleTheme} style={[styles.button, theme === 'dark' && styles.buttondark]}>
            {
              theme === 'dark' ? <Icon name="light-up" size={23} color='black' /> : <Icon2 name="dark-mode" size={23} color='white' />
            }
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <View style={styles.roundcontainar}>
            <Text style={{ fontSize: 20, fontWeight: '500', color: 'white' }}>H</Text>
          </View>
        </TouchableOpacity>
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

export default Upload;

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
    height:deviceHeight*0.10,
    alignItems:'center'
  },
  audiotable:{
    backgroundColor:'white',
    flexDirection:'row',
    width:deviceWidth/1.09,
    height:deviceHeight*0.09,
    borderRadius:10
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
    fontSize: 16,
    color:'black'
  },
});
