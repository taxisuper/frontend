import {
  FILTER_ADDED,
  FILTER_DELETED
} from '../actions';

const initialState = [{
  color: 'yellow',
  name: 'Trump',
   text: 'Trump',
}];

export default function (state = initialState, action) {
  switch (action.type) {
  case FILTER_ADDED:
    return [
      ...state,
      action.filter
    ];
  case FILTER_DELETED:
    return state.filter(f => f.name !== action.filter.name);
  default:
    return state;
  }
}
