import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './reducers';
import DevTools from './containers/DevTools';

import { TWEET_RECEIVED } from './actions';

const storeEnhancer = compose(
  applyMiddleware(
    thunk,
    createLogger({
      predicate: (getState, action) => action.type !== TWEET_RECEIVED
    })
  ),
  DevTools.instrument()
);

export default function (initialState) {
  return createStore(rootReducer, initialState, storeEnhancer);
}

