import { combineReducers } from 'redux';

import tweets from './tweets';
import countries from './countries';
import view from './view';
import filters from './filters';
import form from './form';

export default combineReducers({
  tweets,
  countries,
  view,
  form,
  filters
});
