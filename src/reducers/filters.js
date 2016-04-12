import {
  FILTER_ADDED,
  FILTER_DELETED,
  FILTER_ACTIVE_CHANGED
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
    active: true
  },
  {
    color: 'orange',
    name: 'Redux',
    text: 'Redux',
    active: false,
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
  case FILTER_ACTIVE_CHANGED:
    return state.map(f => action.filter.name === f.name ? {...f, active: !f.active} : f)
  default:
    return state;
  }
}
