import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Device } from '../redux/devices/types';
import { State } from '../redux';
import { loadDevices } from '../redux/devices/actions';

const Devices = () => {
  const dispatch = useDispatch();
  const devices : Array<Device> = useSelector((state : State) => state.reduceDevices.Devices);
  const started : boolean = useSelector((state : State) => state.reduceDevices.STARTED);
  const failure : boolean = useSelector((state : State) => state.reduceDevices.FAILURE);
  const succeed : boolean = useSelector((state : State) => state.reduceDevices.SUCCEED);
  const message : string = useSelector((state : State) => state.reduceDevices.Error);

  useEffect(() => {
    dispatch(loadDevices());
  }, []);

  useEffect(() => {
    console.log("Devices:", devices);
  }, [devices])

  return (
    <div>
      
    </div>
  )
}

export default Devices;