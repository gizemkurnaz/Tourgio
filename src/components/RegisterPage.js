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
import {Button} from '../ortak';
const {width, height} = Dimensions.get('window');
import {Actions} from 'react-native-router-flux'

const RegisterPage = () => {
  const {
    inputStyle,
    imageStyle,
    containerStyle,
    subContainerStyle,
    textStyle1,
    textStyle2,
    textStyle3,
    textContainerStyle,
    bottomContainerStyle,
    subContainerStyle2
  } = styles;
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../images/bg2.jpg')}
        resizeMode="cover"
        style={imageStyle}>
        <View style={textContainerStyle}>
          <View>
            <Text style={textStyle1}>T O U R G I O</Text>
          </View>
          <View>
            <Text style={textStyle2}>We stay for you</Text>
          </View>
        </View>
        <View style={containerStyle}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={subContainerStyle}>
              <TextInput
                placeholder="FIRST NAME"
                placeholderTextColor="#fff"
                style={inputStyle}
              />
            </View>

            <View style={subContainerStyle}>
              <TextInput
                keyboardType={'default'}
                style={inputStyle}
                secureTextEntry
                placeholder="LAST NAME"
                placeholderTextColor="#fff"
              />
            </View>
            </View>

            <View style={subContainerStyle2}>
              <TextInput
                placeholder="EMAIL ADRESS"
                placeholderTextColor="#fff"
                style={inputStyle}
              />
            </View>

            <View style={subContainerStyle2}>
              <TextInput
                placeholder="PHONE NUMBER"
                placeholderTextColor="#fff"
                style={inputStyle}
              />
            </View>
            <View style={subContainerStyle2}>
              <TextInput
                placeholder="PASSWORD"
                placeholderTextColor="#fff"
                style={inputStyle}
              />
            </View>
            <View style={subContainerStyle2}>
              <TextInput
                placeholder="CONFIRM PASSWORD"
                placeholderTextColor="#fff"
                style={inputStyle}
    
              />
            </View>
            
            <Button> REGISTER </Button>
        </View>

        <View style = {bottomContainerStyle}>
          <Text style = {textStyle3}>By clicking register you can accept our terms of use and privacy policy. </Text>

        <View  style = {{flexDirection: 'row', alignSelf : 'center'}}>
              <Text style = {textStyle3}>Already have an account?</Text>
            <TouchableOpacity>
              <Text  style = {textStyle3}
              onPress={()=> Actions.loginScreen()}
             > Login</Text>
              </TouchableOpacity>  
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
    width: width*0.35
  },
  subContainerStyle2: {
    borderWidth: 1,
    //padding:15,
    borderRadius: 5,
    borderColor: '#fff',
    height: height * 0.08,
    width: width*0.75,
  
  },


  inputStyle: {
    color: '#fff',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 12,
    flex: 1,
    opacity:0.5
  },

  imageStyle: {
    flex: 1,
  },

  textStyle1: {
    color: '#fff',
    fontWeight: '900',
    fontSize: 25,
    alignSelf:'center'
  },
  textStyle2: {
    color: '#fff',
    fontWeight: '100',
    alignSelf:'center'
  },
  textStyle3: {
    color: '#fff',
    fontSize: 12,
  },
  textContainerStyle: {
    marginTop: 30,
    justifyContent: 'space-between',
    height: height * 0.07,
    alignSelf: 'center',
  },
  SocialIconStyle: {
    borderRadius: 2,
    height: 30,
  },
  bottomContainerStyle: {
    marginTop: 20,
    justifyContent: 'space-between',
    height: height * 0.10,
    width: width * 0.7,
    alignSelf: 'center',
  },
};

export default RegisterPage;
