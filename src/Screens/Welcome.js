import { StyleSheet, Text, View, StatusBar, Image, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const deviceHeight = Dimensions.get( 'window' ).height;
const deviceWidth = Dimensions.get( 'window' ).width;

const Welcome = ({navigation = useNavigation()}) => {
    useEffect(() =>{
        setTimeout(() => {
            navigation.navigate('LoginScreen')
        }, 2000);
    },[]);

   return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#fff' barStyle='dark-content'/>
      <View style={styles.imgcontainer}>
            <Image source={require("../../images/welcomelogo.jpg")} style={styles.img1}/>
      </View>
      <Text style={styles.text}>Dailogwave</Text>
    </View>
   )
}

export default Welcome

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
    },
    imgcontainer:{
        // backgroundColor:'black',
        
    },
    img1:{
        width:deviceWidth/2.5,
        height:deviceHeight/5.5,
        borderRadius:25,
        resizeMode:'contain',
    },
    text:{
        color:'black',
        fontSize:28,
        fontWeight:'800',
    },
})