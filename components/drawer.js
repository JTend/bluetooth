import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './home';
import Devices from './devices';

const Drawer = createDrawerNavigator();

const DrawerComponent = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} options={{
        title : "Inicio"
      }}/>
      <Drawer.Screen name="Devices" component={Devices} options={{
        title : "Dispositivos"
      }}/>
    </Drawer.Navigator>
  )
}

export default DrawerComponent;