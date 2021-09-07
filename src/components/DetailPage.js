import React from 'react';
import {View, Text, TextInput, ScrollView} from 'react-native';
import {ImageBackground, Dimensions} from 'react-native';
import {Icon} from 'react-native-elements';
import {TourPackage} from '../ortak/TourPackage';

const {width, height} = Dimensions.get('window');

const DetailPage = () => {
  const {imageStyle, textStyle1, textContainerStyle, searchStyle} = styles;
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../images/bg2.jpg')}
        resizeMode="cover"
        style={imageStyle}>
          <View style={{backgroundColor: 'rgba(0,0,0,0.2)'}}>
  
        <View style={textContainerStyle}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{marginEnd: 30}}>
              <Icon type="feather" name="arrow-left" color="#fff"></Icon>
            </View>
            <Text style={textStyle1}>I T A L Y - </Text>
            <Text
              style={{
                fontSize: 15,
                alignSelf: 'center',
                color: '#fff',
                opacity: 0.5,
              }}>
              {' '}
              122 tour packages
            </Text>
            <View style={{marginStart: 30}}>
              <Icon type="material" name="favorite" color="#fff"></Icon>
            </View>
          </View>
        </View>

        <View style={{alignSelf: 'center'}}>
          <TextInput
            placeholder="     Themes & Categories"
            style={searchStyle}
          />
        </View>

        <View
          style={{alignSelf: 'center', marginTop: 20, height: height * 0.7}}>
          <ScrollView>
            <TourPackage
              timage={require('../images/detail/i1.jpg')}
              props1= '4 Days & 3 Nights'
              props2 ='$1299'
              props3='Amsterdam'
              props4 ='Greece'></TourPackage>
               <TourPackage
              timage={require('../images/detail/i2.jpg')}
              props1= '3 Days & 3 Nights'
              props2 ='$1499'
              props3='Greece'
              props4 ='Athens'></TourPackage>
          </ScrollView>
        </View>
        <View 
          style={{
            backgroundColor: '#ddd',
            height: height * 0.06,
            width: width * 1,
            flexDirection:'row',
            justifyContent:'space-between',
            
          }}>
             <View style = {{flexDirection: 'row', justifyContent: 'space-between',marginLeft:35,alignSelf:'center'}}>
            <Icon type="octions" name="sort"></Icon>
            <Text >Sort By</Text>
          </View>
          <View style = {{flexDirection: 'row', justifyContent: 'space-between',marginRight:35,alignSelf:'center'}}>
            <Icon type="material" name="tune"></Icon>
            <Text>Filter</Text>
          </View>
         
        </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = {
  imageStyle: {
    flex: 1,
  },

  textStyle1: {
    color: '#fff',
    fontWeight: '900',
    fontSize: 20,
    alignSelf: 'center',
  },
  textStyle2: {
    color: '#fff',
    fontWeight: '100',
    alignSelf: 'center',
  },

  textContainerStyle: {
    marginTop: 15,
    justifyContent: 'space-between',
    height: height * 0.07,
    alignSelf: 'center',
  },
  searchStyle: {
    borderWidth: 1,
    backgroundColor: '#fff',
    borderRadius: 30,
    borderColor: '#fff',
    height: height * 0.06,
    width: width * 0.9,
    marginTop: 6,
    opacity: 0.9,
    fontSize: 12,
  },
};

export default DetailPage;
