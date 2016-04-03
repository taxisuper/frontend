import {
  TWEET_RECEIVED,
  TWEET_SELECTED,
  FILTER_ACTIVE_CHANGED,
  FILTER_DELETED
} from '../actions';

const initialState = {
  tweetCount: 0,
  currentTweet: null,
  activeFilterNameMap: {}
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
  case FILTER_ACTIVE_CHANGED:
    return {
      ...state,
      activeFilterNameMap: {
        ...state.activeFilterNameMap,
        [action.filter.name]: action.active
      }
    };
  case FILTER_DELETED:
    return {
      ...state,
      activeFilterNameMap: {
        ...state.activeFilterNameMap,
        [action.filter.name]: false
      }
    };
  default:
    return state;
  }
}
