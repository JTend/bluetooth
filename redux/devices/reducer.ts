import { StateDevices, Action, actions } from './types';

const initialState : StateDevices = {
  STARTED : false,
  FAILURE : false,
  SUCCEED : false,
  Devices : [],
  Error : ''
}

export const reduceDevices = (state : StateDevices = initialState, action : Action ) => {
  switch(action.type) {
    case actions.LOAD_DEVICES_STARTED: return ({
      STARTED : true,
      FAILURE : false,
      SUCCEED : false,
      Devices : [],
      Error : ''
    });
    case actions.LOAD_DEVICES_FAILURE: return ({
      STARTED : false,
      FAILURE : true,
      SUCCEED : false,
      Devices : [],
      Error : action.payload
    });
    case actions.LOAD_DEVICES_SUCCEED: return ({
      STARTED : false,
      FAILURE : false,
      SUCCEED : true,
      Devices : action.payload,
      Error : ''
    });
    case actions.RESET_DEVICES_STATE: return initialState;
    default: return state;
  }
}