import React,{useEffect, useState} from 'react'
import { View, Text, SafeAreaView, TextInput, StyleSheet,Alert } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { colors } from '../helpers/colors'
import {Feather} from '@expo/vector-icons'
import axios from 'axios'

const Register = ({navigation}) => {
const [userData,setUserData] = useState({username:'',password:'',email:'',phoneNo:''})
const [eye,toggleEye] = useState(false)
    const handleRegister=async()=>{
        try{
          console.log(userData,'userData')
            const {status} = await axios.post('https://veegil-banking-app.onrender.com/users/register',userData)
            // console.log(result,'result 1')
            if(status===201){
              Alert.alert(
                'Successfully registered',
      [
  
        { text: 'OK', onPress: () => console.log('OK Pressed') },
        { text: 'Go to login', onPress: () => navigation.navigate('Login') }
    ],
      { cancelable: false }
            )
            }
            
            // navigation.navigate('Login')
        }catch(e){
            Alert.alert(
                'Error ',
      e.message,
      [

        // { text: 'OK', onPress: () => console.log('OK Pressed') },
        { text: 'Go Back', onPress: () => navigation.navigate('MenuScreen') }
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
      {/* emailInput */}
      <TouchableOpacity style={styles.wrapperView}>
        <Text style={styles.text}>Email:</Text>
          <TextInput
            onChangeText={( text ) => setUserData({...userData,email:text})}
            placeholder="e.g johnDoe"
            style={styles.input}
            keyboardType='email-address'
            autoCapitalize='none'
            value={userData.email}

          />
        </TouchableOpacity>
      {/* phoneNo */}
      <TouchableOpacity style={styles.wrapperView}>
        <Text style={styles.text}>Phone No:</Text>
          <TextInput
            onChangeText={( text ) => setUserData({...userData,phoneNo:text})}
            placeholder="e.g johnDoe"
            style={styles.input}
            keyboardType='numeric'
            placeholderTextColor={'white'}
            value={userData.phoneNo}

          />
        </TouchableOpacity>
      {/* submit */}
        <TouchableOpacity onPress={handleRegister} style={styles.submitButton}>
          <Text style={styles.text}>Register</Text>
        </TouchableOpacity >
        <Text style={styles.text}>Registered already ? <TouchableOpacity onPress={()=>navigation.navigate('Login')}><Text style={styles.link}> login</Text></TouchableOpacity></Text>
    </SafeAreaView>
  )
}

export default Register
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
    },
    eyeIcon:{
        position:'absolute',
        right:5
    }
    

    
      
     
})