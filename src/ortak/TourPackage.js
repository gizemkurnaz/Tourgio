import React from 'react';
import {Text, View, Dimensions, Image, ImageBackground} from 'react-native';
import {Icon} from 'react-native-elements';
const {width, height} = Dimensions.get('window');

const TourPackage = ({timage, props1, props2, props3, props4}) => {
  const {tourStyle} = styles;
  return (
    <View style={tourStyle}>
      <ImageBackground
        style={{
          height: height * 0.25,
          width: width * 0.9,
          borderRadius: 10,
          overflow: 'hidden',
        }}
        imageStyle={{borderRadius: 10}}
        resizeMode="cover"
        source={timage}>
        <View>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'space-between',
              backgroundColor: 'rgba(0,0,0,0.4)',
              height: height * 0.25,
              width: width * 0.9,
            }}>
            <View>
              <Icon type="material" name="favorite" style={{alignSelf:'flex-end',marginRight:5}}
              color='red'
              size ={20}
            ></Icon>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:5}}>
              <View style={{marginStart: 10}}>
                <Text style={{color: '#fff'}}>Italy Food Adventure Budget</Text>
                <Text style={{color: '#fff'}}>Tour Package</Text>
              </View>

              <View
                style={{
                  backgroundColor: '#008000',
                  width: width * 0.35,
                  borderRadius: 5,
                  height: height * 0.05,
                  
                 
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: 'white',
                    alignSelf: 'center',
                  }}>
                  {props1}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>

      <View
        style={{
          marginStart: 10,
          marginTop: 6,
        }}>
        <Text style={{color: '#008000'}}>starting From</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{fontWeight: 'bold'}}>{props2}</Text>
          <Text style={{marginEnd: 105, color: '#aaa'}}>
            per Person on twin sharing
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: 15,
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text>{props3}</Text>
            <Icon type="material" name="arrow-right"></Icon>
            <Text>{props4}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignSelf: 'center',
              marginRight: 10,
            }}>
            <Icon type="material" name="flight" color="#aaa" size={18}></Icon>
            <Icon
              type="material"
              name="drive-eta"
              color="#aaa"
              size={18}></Icon>
            <Icon type="material" name="king-bed" color="#aaa" size={18}></Icon>
            <Icon
              type="material"
              name="restaurant"
              color="#aaa"
              size={18}></Icon>
            <Text style={{color: '#aaa'}}>+4</Text>
          </View>
        </View>
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
    fontWeight: 'bold',
    marginLeft: 2,
  },

  tourStyle: {
    flex: 1,
    height: height * 0.4,
    width: width * 0.9,
    backgroundColor: '#fff',
    marginTop: 10,
    marginBottom: 20,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 10,
  },
};
export {TourPackage};
