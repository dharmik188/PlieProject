import { StyleSheet, Text, View, Image, Dimensions, StatusBar, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const deviceHeight = Dimensions.get( 'window' ).height;
const deviceWidth = Dimensions.get( 'window' ).width;

const LoginScreen = ({navigation = useNavigation()}) => {
  return (
    <View style={styles.container}>
        <StatusBar backgroundColor='white' barStyle='dark-content'/>
        <ScrollView style={{flex:1,}}>
            <View style={styles.imgcontainer}>
                <Image source={require("../../images/welcomelogo1.png")} style={styles.img1}/>
            </View>
            <View style={styles.signcontainer}>
                <Text style={styles.signtext}>Welcome Back</Text>
            </View>
            <View style={{marginVertical:10}}>
                <View style={styles.usercontainer}>
                    <Text style={styles.usertext}>Username</Text>
                    <TextInput   keyboardType={'email-address'} style={styles.userinput}></TextInput>
                </View>
                <View style={styles.passcontainer}>
                    <Text style={styles.passtext}>Password</Text>
                    <TextInput keyboardType={'numbers-and-punctuation'} style={styles.passinput}></TextInput>
                </View>
                <View style={styles.forgotcontainer}>
                    <TouchableOpacity>
                        <Text style={styles.forgottext}>Forgot Password ?</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity onPress={()=> navigation.navigate("BottomTabNavigation")} style={styles.signbtn}>
                    <Text style={{color:'white',fontSize:20,fontWeight:'700'}}>Login</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        // justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
    },
    logtext:{
        fontSize:20,
        fontWeight:'bold',
    },
    imgcontainer:{
        // backgroundColor:'red',
        marginVertical:25,
        width:deviceWidth/1.03,
        alignItems:'center',
        
    },
    img1:{
        width:deviceWidth/1.02,
        resizeMode:'contain',
        height:deviceHeight/3.2,
        borderRadius:25,
        
    },
    signcontainer:{
        // width:deviceWidth/1.1,
        margin:20,
        display:'flex',
        alignItems:'center',
        // backgroundColor:'red',
        marginTop:40
    },
    signtext:{
        fontSize:32,
        fontWeight:'500',
        color:'#8A2BE2',
    },
    usercontainer:{
        flexDirection:'column',
        padding:5,
        width:deviceWidth/1.07,
        marginLeft:6,
        // backgroundColor:'red'
    },
    userinput:{
        borderWidth:1,
        width:deviceWidth/1.1,
        height:40,
        paddingLeft:15,
        borderRadius:10,
        // borderColor:'white',
        
    },
    usertext:{
        fontSize:17,
        marginBottom:9,
        fontWeight:'700',
        color:'black',
    },
    passcontainer:{
        flexDirection:'column',
        padding:5,
        width:deviceWidth/1.07,
        marginLeft:6,
        // backgroundColor:'orange'
    },
    passinput:{
        borderWidth:1,
        width:deviceWidth/1.1,
        height:40,
        paddingLeft:15, 
        borderRadius:10,
        // borderColor:'white',
    },
    passtext:{
        fontSize:17,
        marginBottom:9,
        fontWeight:'700',
        color:'black',
    },
    forgotcontainer:{
        alignItems: 'flex-end',
        margin:5,
        paddingRight:15,
        // backgroundColor:'black',

    },
    forgottext:{
        fontSize:14,
        color:'red',
        fontWeight:'700'
    },
    btnContainer:{
        alignItems:'center',
        borderRadius:15,
        justifyContent:'center',
        marginTop:80,
    },
    signbtn:{
        backgroundColor:'#8A2BE2',
        width:deviceWidth/1.40,
        height:deviceHeight*0.06,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20
    },
    btn:{
        height:80,
    },
    lastContainer:{
        flexDirection:'row',
        marginVertical:6,
    },
    text1:{
        fontSize:14,
        fontWeight:'600',
        color:'black',
    },
    text2:{
        fontSize:14.5,
        fontWeight:'900',
        marginLeft:5,
        color:'black',
    },
})