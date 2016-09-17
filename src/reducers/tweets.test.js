import expect from 'expect';

import tweetsReducer from './tweets';
import { TWEET_RECEIVED } from '../actions';

describe('tweets reducer', () => {
  it('should handle receiving tweets', () => {
    const initialState = [];
    const action = {
      type: TWEET_RECEIVED,
      tweet: {}
    };

    const newState = tweetsReducer(initialState, action);

    expect(newState.length).toBe(1);
  });
});
