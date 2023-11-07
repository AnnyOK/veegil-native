import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from '../screens/homeScreen'
import Login from '../screens/login'
import Register from '../screens/register'
import React from 'react'
// import {
//   StyleSheet,
//   SafeAreaView,
//   TouchableOpacity,
//   Button,
//   Text
// } from 'react-native'
const Home = () => {
const Stack = createStackNavigator()
  return (
    <NavigationContainer independent>
 <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
//     <SafeAreaView style={style.container}>
//       <TouchableOpacity
//         // style={style.registerButton}
//         onPress={() => console.log('Presssed register')}
//       >
//         <Text style={style.registerButton}>REGISTER</Text>

//         {/* <Button title="Register" /> */}
//       </TouchableOpacity>
//       <TouchableOpacity
//         // style={style.loginButton}
//         onPress={() => console.log('pressed login')}
//       >
//         {/* <View style={style.loginButton}> */}
// <Text style={style.loginButton}>LOGIN</Text>
//         {/* <Button title="Login" /> */}

//         {/* </View> */}
//       </TouchableOpacity>
//     </SafeAreaView>
  )
}
export default Home
// const style = StyleSheet.create({
//   container: {
//     color: 'green',
//     backgroundColor: 'purple',
//     justifyContent: 'flex-end',
//     // alignItems: 'flex-end',
//     flex: 1,
//     padding: 20,
//     margin: 2,
//   },
//   loginButton: {
//     backgroundColor: 'tomato',
//     width: '100%',
//     marginTop: 5,
//     borderWidth:1,
//     borderRadius:8,
//     borderColor:'orange',
//     textAlign:'center',
//     color:'#fff',
//     fontWeight:'bold',
//     paddingVertical:10,
//     // flex: 1,
//   },
//   registerButton: {
//     backgroundColor: 'green',
//     width: '100%',
//     marginTop: 5,
//     borderWidth:1,
//     borderRadius:8,
//     textAlign:'center',
//     color:'#fff',
//     fontWeight:'bold',
//     paddingVertical:10,
//     borderColor:'orange',
//   },
// })
