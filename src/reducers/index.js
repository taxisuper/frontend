import { combineReducers } from 'redux';

import tweets from './tweets';
import countries from './countries';
import view from './view';
import filters from './filters';
import route from './route';
import form from './form';

export default combineReducers({
  tweets,
  countries,
  view,
  filters,
  route: route,
  form
});
