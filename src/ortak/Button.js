import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Button = ({onPress, children}) => {
    const {buttonStyle, textStyle} = styles;
    return(
        <TouchableOpacity onPress={ (onPress)} style = {buttonStyle } >
        <Text style ={textStyle}>{children}</Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle:{
        alignSelf:'center',
        color:'#fff',
        fontSize:12,
        paddingTop:10,
        paddingBottom:10
    },
    buttonStyle:{
        borderRadius:5,
        borderColor:'#fff',
        backgroundColor : 'black'
    },
   
};

export {Button};