import React, {Component} from 'react';
import {View, Text, StyleSheet, Modal, TouchableOpacity} from 'react-native';
import {Dimensions} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import {filterClicked} from '../actions/FilterActions';

import {Button, Checkbox} from '../ortak';
const {width, height} = Dimensions.get('window');

class FilterPage extends Component{

  render(){
    const {textStyle2, textContainerStyle,filterstyle} = styles;

    return (
      <Modal visible = {this.props.showModal} transparent>
        <View style = {{flex:1, backgroundColor:'rgba(0,0,0,0.6)'}}>
        <View style={filterstyle}>
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontWeight: 'bold', marginLeft: 5,marginTop:10,marginBottom:10}}>
            Budget (per person)
          </Text>
          <Text style={{marginLeft: 185, color: '#fff',marginTop:10,marginBottom:10}}>Clear</Text>
        </View>
        <Checkbox textname="Below $500" bwidth={width * 1} />
        <Checkbox textname="$500-$1000" bwidth={width * 1} />
        <Checkbox textname="$1000-$2000" bwidth={width * 1} />
        <Checkbox textname="Below $500" bwidth={width * 1} />
        <Checkbox textname="$1000-$2000" bwidth={width * 1} />
        <Checkbox textname="$8000-$10000" bwidth={width * 1} />
        <Checkbox textname="$10000+" bwidth={width * 1} />
  
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontWeight: 'bold', marginBottom: 10,marginTop:10, marginLeft: 5}}>
            Duration Days
          </Text>
          <Text style={{marginLeft: 220,marginBottom: 10,marginTop:10, color: '#fff'}}>Clear</Text>
        </View>
  
        <View style={{flexDirection: 'row'}}>
          <Checkbox textname="1-3" bwidth={width * 0.5} />
          <Checkbox textname="4-6" bwidth={width * 0.5} />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Checkbox textname="7-9" bwidth={width * 0.5} />
          <Checkbox textname="10-12" bwidth={width * 0.5} />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontWeight: 'bold', marginBottom: 10,marginTop:10, marginLeft: 5}}>
            Activity Days
          </Text>
          <Text style={{marginLeft: 225,marginBottom: 10,marginTop:10,color: '#fff'}}>Clear</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Checkbox textname="Nature" bwidth={width * 0.5} />
          <Checkbox textname="Beach" bwidth={width * 0.5} />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Checkbox textname="Historical" bwidth={width * 0.5} />
          <Checkbox textname="Religious" bwidth={width * 0.5} />
        </View>
      <View >
      <TouchableOpacity style={{width: width * 0.8,height:height*0.05, alignSelf: 'center', marginTop: 10,backgroundColor:'#008000',borderRadius:5,alignItems:'center',  paddingTop:5,
        paddingBottom:5}}
      onPress = {() => this.props.filterClicked(false)}>
        <Text style= {{color:'#fff',alignItems:'center'}}> Apply Filter</Text>
      </TouchableOpacity>
      </View>
  
        </View>
        </View>
      </Modal>
    );

  }
 

  
};

const styles = {
  imageStyle: {
    flex: 1,
  },

  textStyle2: {
    color: 'black',
    fontWeight: '900',
    fontSize: 17,
    alignSelf:'center'
  },

  textContainerStyle: {
    marginTop: 15,
    justifyContent: 'space-between',
    height: height * 0.06,
    width: width * 0.3,
    alignSelf: 'center',
  },
  filterstyle:{

    backgroundColor:'#fff',
    marginTop:55,
    backgroundColor:'#dee2e6',
    height:height*0.9
  
  }
};
const mapToStateProps = ({filterResponse}) => {
  const {showModal} = filterResponse;
  return {showModal};
};

export default connect(mapToStateProps, {filterClicked})(FilterPage);
