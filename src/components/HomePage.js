import React, {Component, useState} from 'react';
import {View, Text} from 'react-native';
import {Story, Destination, Header} from '../ortak';
import {BottomMenu, Item} from 'react-native-bottom-menu';
import {Actions} from 'react-native-router-flux';
import {Icon} from 'react-native-elements';
import {connect} from 'react-redux';
import {filterClicked} from '../actions/FilterActions';
import FilterPage from './FilterPage';
import {
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';

const {width, height} = Dimensions.get('window');
//const [isActive, setActive] = useState('home');


class HomePage extends Component {

  render(){

    
  const {
    textStyle1,
    textStyle2,
    textContainerStyle,
    searchStyle,
    textStyle3,
    imageStyle,
  } = styles;

  return (
    <View
      style={{flex: 1, height: height * 1, justifyContent: 'space-between'}}>
      <ImageBackground
        source={require('../images/bg2.jpg')}
        resizeMode="cover"
        style={imageStyle}
        imageStyle={{opacity: 0.8}}>

          

        <View style={textContainerStyle}>
          <View style={{alignSelf: 'center'}}>
            <Text style={textStyle1}>T O U R G I O</Text>
          </View>

          <View style={{alignSelf: 'center'}}>
            <TextInput placeholder="   Destinations,Themes & Categories" style={searchStyle}  />
          </View>
        </View>

        <View style={{height: height * 0.22}}>
          <Text style={textStyle3}> TRIP </Text>
          <Text style={textStyle2}> THEMES </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Story
              children="HoneyMoon"
              simage={require('../images/stories/honeymoon.jpg')}
            />
            <Story
              children="Adventure"
              simage={require('../images/stories/adventure.jpg')}
            />
            <Story
              children="Family"
              simage={require('../images/stories/family.jpg')}
            />
            <Story
              children="Nature"
              simage={require('../images/stories/nature.jpg')}
            />
            <Story
              children="Wild"
              simage={require('../images/stories/wild.jpg')}
            />
          </ScrollView>
        </View>

        <View style={{height: height * 0.46, marginTop: 20}}>
          <Text style={textStyle3}> TRENDING </Text>
          <TouchableOpacity onPress={() => Actions.destinationScreen()}>
            <Text style={textStyle2}> DESTINATIONS </Text>
          </TouchableOpacity>
          <ScrollView horizontal>
            <Destination
              children="Greece"
              dimage={require('../images/destinations/greece.jpg')}
              price="$6020"
            />
            <Destination
              children="Romania"
              dimage={require('../images/destinations/romania.jpg')}
              price="$3145"
            />
            <Destination
              children="Thailand"
              dimage={require('../images/destinations/thailand.jpg')}
              price="$8040"
            />
            <Destination
              children="Turkey"
              dimage={require('../images/destinations/turkey.jpg')}
              price="$1200"
            />
          </ScrollView>

          <View style = {{alignSelf :'flex-end'}}>
            <Icon type="feather" name="filter" size={(16, 16)} reverse onPress={() =>this.props.filterClicked(true)}></Icon>
          </View>
          <FilterPage/>
        </View>
        <View style={{height: height * 0.15}}>
          <BottomMenu
            marginBottom={0}
            width={width * 1.2}
            height={height * 0.095}
            borderColor={'#aaa'}
            borderWidth={5}>
            <Item
              size={22}
              name="home"
              text="Home"
              type="Octicons"
              activeColor = '#ffc300'
              //isActive={isActive == 'home' ? true : false}
              //onPress={() => setActive('home')}
            />
            <Item
              size={22}
              type="Feather"
              text="Trip"
              name="star"
              //isActive={isActive == 'heart' ? true : false}
              //onPress={() => setActive('heart')}
            />
            <Item size={22} name="heart" text="Favorities" type="Feather" />
            <Item size={22} name="user" text="Profile" type="Feather" />
          </BottomMenu>
        </View>
      </ImageBackground>
    </View>
  );

  }
  
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
    backgroundColor: '#6b705c',
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
    fontWeight: '100',
    fontSize: 15,
    fontWeight: 'bold',
  },
  textStyle3: {
    color: '#fff',
    fontSize: 10,
    opacity: 0.8,
  },
  textContainerStyle: {
    height: height * 0.15,
    alignSelf: 'center',
  },
  searchStyle: {
    borderWidth: 1,
    backgroundColor: '#fff',
    borderRadius: 25,
    borderColor: '#fff',
    height: height * 0.06,
    width: width * 0.9,
    marginTop: 9,
    opacity: 0.9,
  },
};

const mapToStateProps = ({filterResponse}) => {
  const {showModal} = filterResponse;
  return {showModal};
};

export default connect(mapToStateProps, {filterClicked})(HomePage);
