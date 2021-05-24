import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as stl from '../../libs/styles';
import { BleManager, Device } from 'react-native-ble-plx';

const Home = () => {
  const [bth, setBth] = useState("");
  const navigator = useNavigation();
  const Ble = new BleManager();
  
  useEffect(() => {
    const subscription = Ble.onStateChange(state => {
      setBth(state);
      if(state === "PoweredOn") {
        scan();
      }
    }, true);
    return () => {
      console.info("closing...");
      subscription.remove();
      Ble.destroy();
    };
  }, []);
  
  const scan = () => {
    Ble.startDeviceScan(null, null, (error, device) => {
      if(error) {
        console.error("Error:", error.errorCode, "Message:", error.message, "Reason:", error.reason);
        return;
      }
      //if(device.id?.length) console.log(device.id);
      if(device.name === 'TI BLE Sensor Tag' || device.name === 'SensorTag')
      Ble.stopDeviceScan();
    });
  };

  return (
    <View style={stl.Frames.Main}>
      <View>
        <Text style={stl.Text.Title}>{bth}</Text>
      </View>
      <Button title="scan" onPress={() => alert("next")} />
      <Button color="orange" title="DEVICES" onPress={async () => console.info(await Ble.devices(null))} />
    </View>
  )
}

export default Home;
/*console.info("Device:", device.name);
  console.info("id:", device.id);
  console.info("isConnectable:", device.isConnectable);
  console.info("localName:", device.localName);
  console.info("MTU:", device.mtu);
  console.info("RSSI:", device.rssi);
  console.info("manufacturerData:", device.manufacturerData);
  console.info("serviceData:", device.serviceData);
  console.info("serviceUUIDs:", device.serviceUUIDs);
  console.info("overflowServiceUUIDs:", device.overflowServiceUUIDs);
  console.info("solicitedServiceUUIDs:", device.solicitedServiceUUIDs);
  console.info("txPowerLevel:", device.txPowerLevel); */