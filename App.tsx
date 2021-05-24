import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './redux';
import { createStackNavigator } from '@react-navigation/stack';
import Drawer from './components/drawer';

const stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store = { store }>
        <Drawer />
      </Provider>
    </NavigationContainer>
  );
}