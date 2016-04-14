import { ROUTE_CHANGED } from '../actions';

const initialState = '';

export default function(state = initialState, action) {
  if (action.type === ROUTE_CHANGED) {
    return action.route;
  }
  return state;
}
