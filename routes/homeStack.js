import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import Home from '../app/index'
const screens = {
    Home:{
        screen:Home,
    },
    register:{
        screen:Register
    },
    login:{screen:Login}
}
const homeStack =createStackNavigator(screens)