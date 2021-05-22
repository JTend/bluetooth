import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Device } from '../redux/devices/types';
import { State } from '../redux';
import { loadDevices } from '../redux/devices/actions';
import * as stl from '../libs/styles';
import { View, Text, ScrollView } from 'react-native';
import MaterialCI from 'react-native-vector-icons/MaterialCommunityIcons';
import Card from './card'

const Devices = () => {
  const dispatch = useDispatch();
  const devices : Array<Device> = useSelector((state : State) => state.reduceDevices.Devices);
  const started : boolean = useSelector((state : State) => state.reduceDevices.STARTED);
  const failure : boolean = useSelector((state : State) => state.reduceDevices.FAILURE);
  const succeed : boolean = useSelector((state : State) => state.reduceDevices.SUCCEED);
  const message : string = useSelector((state : State) => state.reduceDevices.Error);
  const mockDevices = Array(50).fill("DEVICE");

  useEffect(() => {
    dispatch( loadDevices() );
  }, []);

  useEffect(() => {
    console.log("Devices:", devices);
  }, [devices]);
  
  return (
    <View style={stl.Frames.Main}>
      <ScrollView>
        { mockDevices.map((dev, idx) => <Card title={dev} key={idx} />) }
      </ScrollView>
    </View>
  );
}

export default Devices;