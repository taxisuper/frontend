import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './configureStore';
import { newTweet } from './actions';
import {findFilterMatch} from './util/filters.js';

import Router from './Router';
import DevTools from './containers/DevTools';


const store = configureStore();

const ws = new WebSocket('ws://twitterws.herokuapp.com');

ws.onmessage = ms => {
  const tweet = JSON.parse(ms.data);
  const {view: {activeFilterNameMap}, filters} = store.getState();
  const activeFilters = filters.filter(f => activeFilterNameMap[f.name]);
  if (activeFilters.length !== 0) {
    if (findFilterMatch(tweet, activeFilters)) {
      store.dispatch(newTweet(tweet));
    }
  } else {
    store.dispatch(newTweet(tweet));
  }
};

render(
  <Provider store={ store }>
    <div>
      <Router />
      <DevTools />
    </div>
  </Provider>,
  document.querySelector('#app')
);
