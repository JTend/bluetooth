import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { reduceDevices } from './devices/reducer';

const reducers = combineReducers({
  reduceDevices
});

const store = createStore(reducers, applyMiddleware(thunk));

export type State = ReturnType<typeof reducers>;

export default store;