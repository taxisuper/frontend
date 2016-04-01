import { TWEET_RECEIVED } from '../actions';

export default function (state = {}, action) {
  switch (action.type) {
  case TWEET_RECEIVED:
    const countryCode = action.tweet.place.country_code;
    return {
      ...state,
      [countryCode]: (state[countryCode] || 0) + 1
    };
  default:
    return state;
  }
}
