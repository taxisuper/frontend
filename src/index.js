import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './configureStore';
import { newTweet } from './actions';
import {findFilterMatch} from './util/filters.js';

import App from './containers/App';
import DevTools from './containers/DevTools';

const store = configureStore();

render(
  <Provider store={ store }>
    <div>
      <App />
      <DevTools />
    </div>
  </Provider>,
  document.querySelector('#app')
);
