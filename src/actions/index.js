export const TWEET_RECEIVED = 'TWEET_RECEIVED';
export const TWEET_SELECTED = 'TWEET_SELECTED';

export function newTweet(tweet) {
  return {
    type: TWEET_RECEIVED,
    tweet
  };
}

export function selectTweet(tweet) {
  return {
    type: TWEET_SELECTED,
    tweet
  };
}

