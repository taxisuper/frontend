import {
  FORM_UPDATED,
  FORM_SUBMITTED
} from '../actions';

const initialState = {
  name: '',
  hashtags: '',
  text: '',
  color: ''
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FORM_UPDATED:
      return {...state, [action.field.key]: action.field.value} ;
    case FORM_SUBMITTED:
      return initialState;
    default:
      return state;
  }
}
