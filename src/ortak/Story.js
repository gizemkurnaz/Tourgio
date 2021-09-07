import React from 'react';
import {Text, View, Dimensions, Image} from 'react-native';
const {width, height} = Dimensions.get('window');

const Story = ({children,simage}) => {
  const {textStyle} = styles;
  return (
    <View style={{flex: 1,alignSelf:'center'}}>
      <Image
        source={simage}
        resizeMode="cover"
        style={{
          height: height * 0.1,
          width: width * 0.17,
          borderRadius: 50,
          marginLeft: 5,
          marginTop: 10,
          marginRight:5,
          
        }}
      />

      <Text style={textStyle}>{children}</Text>
    </View>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 12,
    paddingTop: 5,
    paddingBottom: 5,
    alignSelf:'center'
  },
};
export {Story};
