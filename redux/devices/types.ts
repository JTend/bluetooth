
export interface Action { type : string; payload : any; };

export interface Device {
  id : string;
  name? : string;
}

export interface StateDevices {
  STARTED : boolean;
  FAILURE : boolean;
  SUCCEED : boolean;
  Devices : Device[];
  Error : string;
}

export default actions;

export const actions = {
  LOAD_DEVICES_STARTED : 'LOAD_DEVICES_STARTED',
  LOAD_DEVICES_SUCCEED : 'LOAD_DEVICES_SUCCEED',
  LOAD_DEVICES_FAILURE : 'LOAD_DEVICES_FAILURE',
  RESET_DEVICES_STATE : 'RESET_DEVICES_STATE',
  ADD_DEVICE : 'ADD_DEVICE'
}