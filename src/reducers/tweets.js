import { TWEET_RECEIVED } from '../actions';

export default function (state = [], action) {
  switch (action.type) {
  case TWEET_RECEIVED:
    return [
      ...state,
      action.tweet
    ];
  default:
    return state;
  }
}
