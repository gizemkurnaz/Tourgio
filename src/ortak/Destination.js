import React from 'react';
import {Text, View, Dimensions, Image} from 'react-native';
const {width, height} = Dimensions.get('window');

const Destination = ({children,dimage,price}) => {
  const {textStyle,destStyle} = styles;
  return (
    <View style = {destStyle}>
      <Image
        source={dimage}
        resizeMode="cover"
        style={{
          height: height * 0.21,
          width: width * 0.29,
          borderRadius: 10,
        
        }}
      />

      <Text style={textStyle}>{children}</Text>
      <View  style = {{flexDirection: 'row',justifyContent:'space-between'}}>
      <Text style = {{color: '#6c757d',
                      fontSize:12,
                      marginLeft:5}}>starting:</Text>
      <Text style = {{color :'#06d6a0', marginRight:10}}>{price}</Text>
      </View>
      
    </View>
  );
};

const styles = {
  textStyle: {
    
    color: 'black',
    fontSize: 15,
    paddingTop: 5,
    paddingBottom: 2,
    fontWeight : 'bold',
    marginLeft : 2
  },

  destStyle:{
    flex: 1,
    height:height*0.29,
    width:width*0.29,
    backgroundColor:'#fff',
    marginTop : 10,
    marginBottom : 20,
    marginLeft: 5,
    marginRight:5,
    borderRadius: 10,

  }
};
export {Destination};
