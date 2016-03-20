import React from 'react';

import Tweet from './Tweet';

export default function TweetList({ tweets }) {
  const tweets = tweets
    .slice(-3)
    .map(t => (
      <li><Tweet key={ t.id } tweet={ t } /></li>
    ));

  return (
    <ul className="tweetlist">
      { tweets }
  </ul>
  );
}
