import { render } from 'react-dom';
import React from 'react';
import { createStore } from 'redux';

function reducer(state=0, action) {
  if (action.type === 'USER_CLICKED') {
    return state + 1;
  }
  return state;
}

const store = createStore(reducer);

function Counter(props) {
  return <div>{props.counter}</div>;
}

document.addEventListener('click', () => store.dispatch({ type: 'USER_CLICKED' }));

function renderApp() {
  render(<Counter counter={ store.getState() } />, document.querySelector('#app'));
}

store.subscribe(renderApp);

renderApp();