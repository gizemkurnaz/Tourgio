import React from 'react';
import {Text, TouchableOpacity} from 'react-native';


export const SocialButton = ({onPress, children,bgcolor}) => {
    const {textStyle} = styles;
    return(
        <TouchableOpacity onPress={ (onPress)} style ={{borderRadius:5,
        
            width : 90,
            height : 30,  
            backgroundColor :bgcolor,
            width:75}}>
        <Text style ={textStyle}>{children}</Text>
        </TouchableOpacity >
    );
};

const styles = {
    textStyle:{
        alignSelf:'center',
        color:'#fff',
        fontSize:10,
        paddingTop:5,
        paddingBottom:5
    },
   
};
