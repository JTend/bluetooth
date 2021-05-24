import { Action, actions, Device, StateDevices } from './types';
import { Dispatch } from 'redux';


export const loadStarted = () : Action => ({ type: actions.LOAD_DEVICES_STARTED, payload : null });
export const loadFailure = (error : string) : Action => ({ type : actions.LOAD_DEVICES_FAILURE, payload : error });
export const loadSucceed = (devices : Array<Device>) => ({ type: actions.LOAD_DEVICES_SUCCEED, payload: devices});
export const resetLoad = () : Action => ({ type: actions.RESET_DEVICES_STATE, payload : null });
export const addDevice = (device : Device) => ({ type : actions.ADD_DEVICE, payload : device });

export const loadDevices = () => async (dispatch : Dispatch) => {
  dispatch( loadStarted() );

  dispatch( loadSucceed([]) );
}