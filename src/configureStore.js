import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import DevTools from './containers/DevTools';

const storeEnhancer = compose(
  applyMiddleware(
    thunk
  ),
  DevTools.instrument()
);

export default function (initialState) {
  return createStore(rootReducer, initialState, storeEnhancer);
}

