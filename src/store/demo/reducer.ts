import { ActionType, createReducer, RootAction } from 'typesafe-actions';
import { DemoState } from './state';
import * as demoActions from './actions';

const initialState = {
  message: ''
}

export default createReducer(initialState as DemoState)
  .handleAction(
    demoActions.removeMessage,
    (state, action) => {
      return {
        ...state,
        message: ''
      }
    }
  )
  .handleAction(
    demoActions.loadMessage.request,
    (state, action) => {
      return state;
    }
  )
  .handleAction(
    demoActions.loadMessage.success,
    (state, action) => {
      return {
        ...state,
        message: action.payload
      }
    }
  )
  .handleAction(
    demoActions.loadMessage.failure,
    (state, action) => {
      console.log(action.payload)
      return state
    }
  )