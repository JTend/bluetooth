import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerActions, useNavigation } from '@react-navigation/core';
import List from './devices/list';
import Material from 'react-native-vector-icons/MaterialIcons';
import * as stl from '../libs/styles';
import { useDispatch } from 'react-redux';
import { resetLoad } from '../redux/devices/actions';

const stack = createStackNavigator();

const Devices = () => {
  const navigator = useNavigation();
  const dispatch = useDispatch();
  
  return (
    <stack.Navigator>
      <stack.Screen name="listDevices" component={List} options={{
        title : "Dispositivos",
        headerLeft : () => (
          <Material name="menu" size={32} color="black" style={stl.Icon.Row}
            onPress={ () => navigator.dispatch(DrawerActions.toggleDrawer()) }
          />
        ),
        headerRight : () => (
          <Material name="sync" color="black" size={32} style={stl.Icon.Row}
            onPress={ () => dispatch( resetLoad() ) }
          />
        )
      }} />
    </stack.Navigator>
  );
}

export default Devices;