import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';
import { RootAction, RootState, Services } from 'typesafe-actions';
import rootReducer from './root-reducer';
import rootEpic from './root-epic';
import services from '../services';

const initStore = (initialState: RootState) => {

  const epicMiddleware = createEpicMiddleware<
    RootAction,
    RootAction,
    RootState,
    Services
  >({
    dependencies: services,
  });

  const middlewares = [epicMiddleware];

  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(...middlewares)
    )
  );

  epicMiddleware.run(rootEpic);

  return store;
}

export default initStore;