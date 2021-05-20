import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Devices from './components/devices';
import { Provider } from 'react-redux';
import store from './redux';

export default function App() {
  return (
    <NavigationContainer>
      <Provider store = { store }>
        <Devices />
      </Provider>
    </NavigationContainer>
  );
}