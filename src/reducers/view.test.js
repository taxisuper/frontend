import expect from 'expect';

import viewReducer from './view';
import {
  TWEET_SELECTED
} from '../actions';

describe('view reducer', () => {
  it('should set current tweet when tweet is selected', () => {
    const initialState = {
      currentTweet: null,
      activeFilterNameMap: {}
    };
    const action = {
      type: TWEET_SELECTED,
      tweet: { text: 'Fagdag!' }
    };

    const newState = viewReducer(initialState, action);

    expect(newState.currentTweet).toBe(action.tweet);
  });

  it('should be able to set current tweet to null', () => {
    const initialState = {
      currentTweet: { text: 'Fagdag!' },
      activeFilterNameMap: {}
    };
    const action = {
      type: TWEET_SELECTED,
      tweet: null
    };

    const newState = viewReducer(initialState, action);

    expect(newState.currentTweet).toBe(null);
  });
});
