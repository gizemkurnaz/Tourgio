import React from 'react';
import {View, Text} from 'react-native';
import {
  TextInput,
  Alert,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import firebase from '@firebase/app';
import '@firebase/auth';
import {Dest} from '../ortak';
const {width, height} = Dimensions.get('window');
import {Actions} from 'react-native-router-flux';
import { Icon } from 'react-native-vector-icons/Icon';
import DetailPage from './DetailPage';

const DestinationPage = () => {
  const {
    inputStyle,
    imageStyle,
    containerStyle,
    subContainerStyle,
    textStyle1,
    textStyle2,
    textStyle3,
    searchStyle,
    textContainerStyle,
    bottomContainerStyle,
    subContainerStyle2,
  } = styles;
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../images/bg2.jpg')}
        resizeMode="cover"
        style={imageStyle}
      >
        <View style={textContainerStyle}>
          <Text style={textStyle2}>Destinations</Text>
        </View>
        <View style={{alignSelf: 'center'}}>
            <TextInput placeholder="     Find your destinations" style={searchStyle} />
          </View>
        <View style={{justifyContent: 'space-between',alignSelf:'center'}}>
        <View  style={{flexDirection: 'row', justifyContent: 'space-between',width:width*0.9,alignSelf:'center'}}>
          <Dest dimage={require('../images/dest/greece.jpg')}
           name = {'Greece'} 
           price= {'$800'}   ></Dest>
          <Dest dimage={require('../images/dest/italy.jpg')}
           name = {'Italy'} 
           price= {'$1200'}
           press = {() => Actions.detailScreen()} ></Dest>
        </View>
        <View  style={{flexDirection: 'row', justifyContent: 'space-between',width:width*0.9,alignSelf:'center'}}>
          <Dest dimage={require('../images/dest/france.jpg')}
           name = {'France'} 
           price= {'$1200'} ></Dest>
          <Dest dimage={require('../images/dest/switzerland.jpg')}
           name = {'Switzerland'} 
           price= {'$800'} ></Dest>
        </View>
        <View  style={{flexDirection: 'row', justifyContent: 'space-between',width:width*0.9,alignSelf:'center'}}>
          <Dest dimage={require('../images/dest/alaska.jpg')}
           name = {'Alaska'} 
           price= {'$1500'} ></Dest>
          <Dest dimage={require('../images/dest/romania.jpg')}
           name = {'Romania'} 
           price= {'$800'} ></Dest>
        </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = {
  containerStyle: {
    height: height * 0.55,
    borderRadius: 5,
    borderColor: '#fff',
    justifyContent: 'space-between',
    width: width * 0.75,
    alignSelf: 'center',
    marginTop: 60,
  },

  subContainerStyle: {
    borderWidth: 1,
    //padding:15,
    borderRadius: 5,
    borderColor: '#fff',
    height: height * 0.08,
    width: width * 0.35,
  },
  subContainerStyle2: {
    borderWidth: 1,
    //padding:15,
    borderRadius: 5,
    borderColor: '#fff',
    height: height * 0.08,
    width: width * 0.75,
  },

  inputStyle: {
    color: '#fff',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 15,
    flex: 1,
  },

  imageStyle: {
    flex: 1,
  },

  textStyle1: {
    color: '#fff',
    fontWeight: '900',
    fontSize: 25,
  },
  textStyle2: {
    color: '#fff',
    fontWeight: '900',
    fontSize:17
  },
  textStyle3: {
    color: '#fff',
    fontSize: 12,
  },
  textContainerStyle: {
    marginTop: 15,
    justifyContent: 'space-between',
    height: height * 0.07,
    width: width * 0.3,
    alignSelf: 'center',
  },
  SocialIconStyle: {
    borderRadius: 2,
    height: 30,
  },
  bottomContainerStyle: {
    marginTop: 20,
    justifyContent: 'space-between',
    height: height * 0.1,
    width: width * 0.7,
    alignSelf: 'center',
  },
  searchStyle: {
    backgroundColor: '#fff',
    borderRadius: 25,
    borderColor: '#fff',
    height: height * 0.06,
    width: width * 0.85,
    opacity:0.7
    
  },
};

export default DestinationPage;
