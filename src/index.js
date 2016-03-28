import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './configureStore';
import { newTweet } from './actions';

import App from './containers/App';
import DevTools from './containers/DevTools';

const store = configureStore();

const ws = new WebSocket('ws://twitterws.herokuapp.com');

ws.onmessage = ms => {
  const tweet = JSON.parse(ms.data);

  store.dispatch(newTweet(tweet));
};

render(
  <Provider store={ store }>
    <div>
      <App />
      <DevTools />
    </div>
  </Provider>,
  document.querySelector('#app')
);
