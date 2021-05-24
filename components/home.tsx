import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Material from 'react-native-vector-icons/MaterialIcons';
import * as stl from '../libs/styles';
import Component from './home/component';

const stack = createStackNavigator();

const Home = ({navigation}) => {

  return (
    <stack.Navigator>
      <stack.Screen name="Home" component={Component} options={{
        title : "Inicio",
        headerLeft : () => (
          <Material name="menu" size={32} color="black" style={stl.Icon.Row}
            onPress={ () => navigation.toggleDrawer() }
          />
        )
      }} />
    </stack.Navigator>
  )
}

export default Home;