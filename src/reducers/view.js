import {
  TWEET_RECEIVED,
  TWEET_SELECTED,
  FILTER_DELETED
} from '../actions';

const initialState = {
  tweetCount: 0,
  currentTweet: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
  case TWEET_RECEIVED:
    return {
      ...state,
      tweetCount: state.tweetCount + 1
    };
  case TWEET_SELECTED:
    return {
      ...state,
      currentTweet: action.tweet
    };
  case FILTER_DELETED:
    return {
      ...state,
      activeFilterMap: {
        ...state.activeFilterMap,
        [action.filter.name]: false
      }
    };
  default:
    return state;
  }
}
