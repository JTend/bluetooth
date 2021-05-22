import React from 'react';
import { TouchableHighlight } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCI from 'react-native-vector-icons/MaterialCommunityIcons';
import * as stl from '../libs/styles';
import { resetLoad } from '../redux/devices/actions'
import { useDispatch } from 'react-redux';
import Devices from './devices';

const stack = createStackNavigator();

const Home = () => {
  const dispatch = useDispatch();

  return (
    <stack.Navigator>
      <stack.Screen name="Devices" component={Devices} options={{
        title : "Devices",
        headerRight : () => (
          <MaterialCI name="refresh" size={32} color="black" 
            onPress={ () => dispatch( resetLoad() ) }
            style={stl.Icon.right}
          />
        )
      }} />
    </stack.Navigator>
  )
}

export default Home;