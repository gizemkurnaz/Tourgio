import React,{useState} from 'react';
import {Text, View, Dimensions, Image, ImageBackground} from 'react-native';
const {width, height} = Dimensions.get('window');
import CheckBox from '@react-native-community/checkbox';

const Checkbox= ({textname,bwidth}) => {
  const {textStyle, destStyle} = styles;
  const [isSelected, setSelection] = useState(false);
  return (
    <View style={{backgroundColor: '#fff',
    height:height*0.05,
    width:bwidth,
    marginBottom:1,
    borderColor:'#aaa',
    flexDirection: 'row',
    justifyContent:'space-between'}}>
        <View style={{flexDirection : 'row'}}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
        />
        <Text style = {textStyle}>{textname}</Text>
      </View>
      
        </View>
     
  );
};

const styles = {
  textStyle: {
    color: 'black',
    fontSize: 13,
    paddingTop: 5,
    paddingBottom: 2,
    marginLeft: 2,
  },
};
export {Checkbox};