import { combineReducers } from 'redux';
import demoReducer from './demo/reducer';

export default combineReducers({
  demo: demoReducer,
});