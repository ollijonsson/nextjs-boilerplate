import { createAction, createAsyncAction } from 'typesafe-actions';

export const loadMessage = createAsyncAction(
  'LOAD_MESSAGE_REQUEST',
  'LOAD_MESSAGE_SUCCESS',
  'LOAD_MESSAGE_FAILED',
)<boolean, string, string>();

export const removeMessage = createAction(
  'REMOVE_MESSAGE',
)();