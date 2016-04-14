
// A: create the store
import { createStore } from 'redux';

function reducer(state=0, action) {
  // C: change the state
  if (action.type === 'USER_CLICKED') {
    return state + 1;
  }
  return state;
}

const store = createStore(reducer);

// B: get the state
document.body.innerText = store.getState();

// C: change the state
document.addEventListener('click', () => store.dispatch({ type: 'USER_CLICKED' }));

// D: subscribe to store changes
function renderApp() {
  document.body.innerText = store.getState();
}

store.subscribe(renderApp)