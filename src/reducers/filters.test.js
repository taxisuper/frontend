import expect from 'expect';

import filtersReducer from './filters';
import {
  FILTER_ADDED,
  FILTER_DELETED
} from '../actions';

describe('filters reducer', () => {
  it('should handle adding filters', () => {
    const initialState = [];
    const action = {
      type: FILTER_ADDED,
      filter: { name: 'redux', hashtags: ['redux'] }
    };

    const newState = filtersReducer(initialState, action);

    expect(newState.length).toBe(1);
  });

  it('should handle deleting filters', () => {
    const initialState = [{
      name: 'redux',
      hashtags: ['redux']
    }];
    const action = {
      type: FILTER_DELETED,
      filter: { name: 'redux', hashtags: ['redux'] }
    };

    const newState = filtersReducer(initialState, action);

    expect(newState.length).toBe(0);
  });
});
