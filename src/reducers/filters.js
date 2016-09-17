import {
  FILTER_ADDED,
  FILTER_DELETED,
  FILTER_ACTIVE_TOGGLE
} from '../actions';

const initialState = [
  {
  color: 'yellow',
  name: 'Trump',
   text: 'Trump',
    active: true
},
  {
    color: 'pink',
    name: 'Hillary',
    text: 'Hillay',
    active: false
  },
  {
    color: 'orange',
    name: 'Frequent filter',
    text: 'the',
    active: true,
  }
];

export default function (state = initialState, action) {
  switch (action.type) {
  case FILTER_ADDED:
    return [
      ...state,
      {...action.filter, active: false}
    ];
  case FILTER_DELETED:
    return state.filter(f => f.name !== action.filter.name);
  case FILTER_ACTIVE_TOGGLE:
    return state.map(f => action.filter.name === f.name ? {...f, active: !f.active} : f)
  default:
    return state;
  }
}
