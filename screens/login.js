import React,{useEffect, useState} from 'react'
import { View, Text, SafeAreaView, TextInput, StyleSheet,Alert } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { colors } from '../helpers/colors'
import {Feather} from '@expo/vector-icons'
import axios from 'axios'

const Login = ({navigation}) => {
const [userData,setUserData] = useState({username:'',password:''})
const [eye,toggleEye] = useState(false)

    const handleRegister=async()=>{
        try{
            const result = await axios.post('https://veegil-banking-app.onrender.com/users/login',userData)

        }catch(e){
            Alert.alert(
                'Error ',
      e.message,
      [

        { text: 'OK', onPress: () => console.log('OK Pressed') },
        { text: 'Go Back', onPress: () => navigation.navigate('Login') }
    ],
      { cancelable: false }
            )

        }
    }
    useEffect(()=>{

    },[userData])
  return (
    <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.wrapperView}>
        <Text style={styles.text}>Username: </Text>

          <TextInput
            onChangeText={( text ) => setUserData({...userData,username:text})}
            placeholder="e.g johnDoe"
            style={styles.input}
            placeholderTextColor={'white'}
            value={userData.username}
          />
        </TouchableOpacity>
      {/* password */}
      <TouchableOpacity style={styles.wrapperView}>

        <Text style={styles.text}>Password:</Text>
          <TextInput
            onChangeText={(text ) => setUserData({...userData,password:text})}
            placeholder="password"
            style={styles.input}
            secureTextEntry={eye}
            placeholderTextColor={'white'}
            value={userData.password}

          />
           {eye && <Feather name="eye" size={28} color="#eee"  style={styles.eyeIcon} onPress={()=>toggleEye(!eye)}/> }
          {!eye && <Feather name="eye-off" size={28} color="#eee"  style={styles.eyeIcon} onPress={()=>toggleEye(!eye)}/> }
       
        </TouchableOpacity>
      
      {/* submit */}
        <TouchableOpacity onPress={handleRegister} style={styles.submitButton}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity >
        <Text style={styles.text}>Not Registered  ? <TouchableOpacity onPress={()=>navigation.navigate('Login')}><Text style={styles.link}> Register</Text></TouchableOpacity></Text>
    </SafeAreaView>
  )
}

export default Login
const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.gray,
        justifyContent: 'flex-end',
        flex: 1,
        padding: 20,
        margin: 2,
    },
    wrapperView:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center',
        borderRadius:8,
        padding: 2,
        margin: 2,
        borderWidth:1,
        borderColor:'#eee',
        // backgroundColor:'skyblue',

    },
    submitButton:{
        backgroundColor:'green',
        borderRadius:8,
        borderWidth:1,
        borderColor:'orange',
        justifyContent:'center',
        alignItems:'center',
        padding:5,
        borderColor:'#eee',
        marginTop:20
    },
    input:{
        borderWidth:1,
        borderRadius:8,
        borderColor:'#eee',
        color:colors.input,
        padding:5,
        flex:1
    },
    text:{
        color:'#fff',
        fontWeight:'bold',
        margin:3,
        minWidth:'30%'
    },
    link:{
        color:'blue',
        alignItems:'center'
    }
    

    
      
     
})