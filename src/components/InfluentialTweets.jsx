import _ from 'lodash';
import React from 'react';
import Tweet from './Tweet';

export default function InfluentialTweets({ tweets }) {
  const influentialTweets = _.chain(tweets)
    .sortBy(t => -t.user.followers_count)
    .slice(0, 3)
    .map(tweet => (
      <li key={ tweet.id }>
        <Tweet tweet={ tweet } />
      </li>
    ))
    .value();

  return (
    <ul className="tweetlist">
      { influentialTweets }
    </ul>
  );
}
