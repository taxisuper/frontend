import { combineReducers } from 'redux';

import tweets from './tweets';
import countries from './countries';
import view from './view';

export default combineReducers({
  tweets,
  countries,
  view
});
