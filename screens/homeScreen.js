import React from 'react'
import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Text
} from 'react-native'
import { colors } from '../helpers/colors';
import {Login,Register,MenuScreen} from './index'
// import {Login} from './login'
// import{Register} from './register'
// import {MenuScreen} from './menu'
 const HomeScreen = ({navigation}) => {
  // console.log(Navigation.componentId,'componentId')
  return (
    <SafeAreaView style={style.container}>
      <TouchableOpacity
        // style={style.registerButton}
        onPress={() => { 

            console.log('Presssed register');
          
             navigation.navigate('Register')
    }}
      >
        <Text style={style.registerButton}>REGISTER</Text>

        {/* <Button title="Register" /> */}
      </TouchableOpacity>
      <TouchableOpacity
        // style={style.loginButton}
        onPress={() => { 
            navigation.navigate('Login');
             console.log('pressed login')
           
        }}
      >
        {/* <View style={style.loginButton}> */}
<Text style={style.loginButton}>LOGIN</Text>
        {/* <Button title="Login" /> */}

        {/* </View> */}
      </TouchableOpacity>
    </SafeAreaView>
  )
}
// Navigation.registerComponent('Home', ()=>HomeScreen)
// Navigation.registerComponent('Login', ()=>Login)
// Navigation.registerComponent('Register', ()=>Register)
// Navigation.registerComponent('Menu', ()=>MenuScreen)

// Navigation.events().registerAppLaunchedListener(async()=>{
//   Navigation.setRoot({
//     root:{
//       stack:{
//         children:[
//           {
//             component:{
//               name:'Home'
//             }
//           }
//         ]
//       }
//     }
//   })
// })
// HomeScreen.options= {
//   topBar: {
//     title: {
//       text: 'Home',
//       color: 'white'
//     },
//     background: {
//       color: '#4d089a'
//     }
//   }

// }

export default HomeScreen
const style = StyleSheet.create({
  container: {
    color: 'green',
    backgroundColor: colors.gray,
    justifyContent: 'flex-end',
    // alignItems: 'flex-end',
    flex: 1,
    padding: 20,
    margin: 2,
  },
  loginButton: {
    backgroundColor: 'tomato',
    width: '100%',
    marginTop: 5,
    borderWidth:1,
    borderRadius:8,
    borderColor:'orange',
    textAlign:'center',
    color:'#fff',
    fontWeight:'bold',
    paddingVertical:10,
    // flex: 1,
  },
  registerButton: {
    backgroundColor: 'green',
    width: '100%',
    marginTop: 5,
    borderWidth:1,
    borderRadius:8,
    textAlign:'center',
    color:'#fff',
    fontWeight:'bold',
    paddingVertical:10,
    borderColor:'orange',
  },
})
