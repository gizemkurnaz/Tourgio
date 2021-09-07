import React from 'react';
import {
  Text,
  View,
  Dimensions,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
const {width, height} = Dimensions.get('window');

const Dest = ({name, dimage, price, press}) => {
  const {textStyle, destStyle} = styles;
  return (
    <View style={destStyle}>
      <TouchableOpacity onPress={press}>
        <ImageBackground
         
          imageStyle={{borderRadius: 10}}
          source={dimage}
          resizeMode="cover"
          style={{
            height: height * 0.21,
            width: width * 0.42,
            borderRadius: 10,
          }}>
          <View style={{backgroundColor: 'rgba(0,0,0,0.6)',borderRadius: 10, height: height * 0.21}}>
            <View style={{alignSelf: 'center', marginTop: 30}}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 16,
                  fontWeight: 'bold',
                  alignSelf: 'center',
                }}>
                {name}
              </Text>
              <Text style={{color: '#fff'}}>Starting budget</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: '#fff', fontWeight: 'bold'}}>{price}</Text>
                <Text style={{color: '#fff'}}>/person</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  textStyle: {
    color: 'black',
    fontSize: 15,
    paddingTop: 5,
    paddingBottom: 2,
    fontWeight: 'bold',
    marginLeft: 2,
  },

  destStyle: {
    backgroundColor: '#fff',
    marginTop: 15,
    marginBottom: 15,
    borderRadius: 10,
    alignSelf: 'center',
  },
};
export {Dest};
