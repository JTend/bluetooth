import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import * as stl from '../../libs/styles';
import Material from 'react-native-vector-icons/MaterialIcons';

const Card = ({title}) => {
  return (
    <View style={stl.Frames.Card}>
        <View style={[stl.Flex.row, stl.Flex.between]}>
          <Material name="devices-other" size={32} color="lightblue" style={stl.Icon.Row} />
          <Text style={stl.Text.Row} >{title}</Text>
          <TouchableOpacity>
            <Material name="settings" size={32} color="gray" style={stl.Icon.Row} />
          </TouchableOpacity>
        </View>
      </View>
  )
}

export default Card;