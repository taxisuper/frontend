import {
  TWEET_RECEIVED,
  TWEET_SELECTED,
  FILTER_DELETED
} from '../actions';

const initialState = {
  currentTweet: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
  case TWEET_SELECTED:
    return {
      ...state,
      currentTweet: action.tweet
    };
  default:
    return state;
  }
}
