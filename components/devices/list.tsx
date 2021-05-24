import React, { useEffect } from 'react';
import { View, FlatList } from 'react-native';
import * as stl from '../../libs/styles';
import Card from './card';
import { useDispatch, useSelector } from 'react-redux';
import { Device } from '../../redux/devices/types';
import { State } from '../../redux';
import { loadDevices } from '../../redux/devices/actions';
import { BleManager } from 'react-native-ble-plx';
import Empty from './empty';

const List = () => {
  const dispatch = useDispatch();
  const BLE = new BleManager();
  const {
    Devices, STARTED, FAILURE, SUCCEED, Error
  } = useSelector((state : State) => state.reduceDevices);
  const mockDevices = Array(50).fill("DEVICE");

  useEffect(() => {
    dispatch( loadDevices() );
    return () => {
      BLE.destroy();
    }
    
  }, []);

  useEffect(() => {
    console.log(Devices);
  }, [Devices])

  return (
    <View style={stl.Frames.Main}>
      <FlatList data = {mockDevices}
        renderItem = { ({item, index }) => <Card title={item} />}
        ListEmptyComponent={Empty}
        keyExtractor = { (ele, idx) =>  idx.toString() }
      />
    </View>
  )
}

export default List;