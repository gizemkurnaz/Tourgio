import React, { Component } from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { Actions } from 'react-native-router-flux';
  
export default class SideBar extends Component {
   
  render() {
    return (
       <View>
           <View style = {styles.container}>
                <View style = {styles.textView}>
                   <TouchableOpacity onPress={() => Actions.main()}><Text style = {styles.title}> Home </Text></TouchableOpacity> 
                </View>
               
                <View style = {styles.textView}>
                    <TouchableOpacity onPress={() => Actions.drawerClose()}><Text style = {styles.title}> Back </Text></TouchableOpacity> 
                </View>
            </View>
       </View>       
      );
  }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex:1,
     },
     textView:{
        height: 30,
        width:'100%',
        alignItems: 'center',
     },
     title:{
      fontSize:18
     },     
});