import React from "react";
import {View,Text, ScrollViewComponent} from 'react-native'
import { TouchableOpacity } from "react-native-gesture-handler";
export const MenuScreen =()=>{
    return(<ScrollViewComponent>
        <TouchableOpacity onPress={()=>console.log('pressed total balance')}>
           <Text style={''}>Total Balance</Text>
            </TouchableOpacity>
        <TouchableOpacity> To Bank</TouchableOpacity>
        <TouchableOpacity>To VB</TouchableOpacity>
        <TouchableOpacity> Withdraw</TouchableOpacity>
        <TouchableOpacity>History</TouchableOpacity>
        <TouchableOpacity>Services</TouchableOpacity>
    
    </ ScrollViewComponent>)
}