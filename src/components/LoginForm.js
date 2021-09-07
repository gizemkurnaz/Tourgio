import React, {Component} from 'react';
import {
  TextInput,
  Alert,
  View,
  Text,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import firebase from '@firebase/app';
import '@firebase/auth';
import {emailChanged, passwordChanged, loginUser} from '../actions';
import {Button, Spinner, SocialButton} from '../ortak';

const {width, height} = Dimensions.get('window');

class LoginForm extends Component {
  state = {email: '', password: '', loading: false};

  clickLogin() {
    const {email, password} = this.props;
    this.props.loginUser({email, password});
  }

  loginSucces() {
    console.log('Success!!');
    this.setState({loading: false});
  }
  loginFail() {
    console.log('Fail!!');
    this.setState({loading: false});
    Alert.alert('Mesaj', 'Kullanıcı adı veya şifreniz hatalı', [
      {text: 'Tamam', onPress: () => null},
    ]);
  }
  renderButton() {
    if (!this.props.loading) {
      return <Button onPress={this.clickLogin.bind(this)}> ENTER</Button>;
    }
    return <Spinner size="small" />;
  }
  render() {
    console.log('response email' + this.props.email);
    console.log('response password' + this.props.password);

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
            <View style={subContainerStyle}>
              <TextInput
                placeholder="E-mail"
                placeholderTextColor="#fff"
                style={inputStyle}
                value={this.props.email}
                onChangeText={email => this.props.emailChanged(email)}
              />
            </View>

            <View style={subContainerStyle}>
              <TextInput
                keyboardType={'default'}
                style={inputStyle}
                secureTextEntry
                placeholder="Password"
                placeholderTextColor="#fff"
                value={this.props.password}
                onChangeText={password => this.props.passwordChanged(password)}
              />
            </View>
            <TouchableOpacity style={{alignSelf: 'flex-end'}}>
              <Text style={textStyle3}>FORGOT PASSWORD ?</Text>
            </TouchableOpacity>
            <View>
              <Button onPress={() => Actions.homeScreen()}> LOG IN </Button>
            </View>
          </View>

          <View style={bottomContainerStyle}>
            <Text style={{color: '#fff', alignSelf: 'center', fontSize: 20}}>
              OR
            </Text>
            <Text style={{color: '#fff', alignSelf: 'center', fontSize: 10}}>
              Login with
            </Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <SocialButton bgcolor={'#4267B2'}>
                <Image
                  source={require('../images/icons/facebbok.png')}
                  style={{height: 15, width: 15}}></Image>
                <Text>FACEBOOK</Text>
              </SocialButton>
              <SocialButton bgcolor={'#1DA1F2'}>
                <Image
                  source={require('../images/icons/twitter.png')}
                  style={{height: 15, width: 15}}></Image>
                <Text>TWITTER</Text>
              </SocialButton>

              <SocialButton bgcolor={'#dd4b39'}>
                <Image
                  source={require('../images/icons/google+.png')}
                  style={{height: 15, width: 15}}></Image>
                <Text>GOOGLE+</Text>
              </SocialButton>
            </View>

            <View style={{flexDirection: 'row', alignSelf: 'center'}}>
              <Text style={textStyle3}>New to Tourgio ?</Text>
              <TouchableOpacity onPress={() => Actions.registerScreen()}>
                <Text style={textStyle3}> SignUp</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    height: height * 0.35,
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
  },

  inputStyle: {
    color: '#fff',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    flex: 1,
    opacity : 0.5
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
    height: height * 0.25,
    width: width * 0.7,
    alignSelf: 'center',
  },
};

const mapStateToProps = ({authencationResponse}) => {
  const {email, password, loading} = authencationResponse;
  return {
    email,
    password,
    loading,
  };
};

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser,
})(LoginForm);
