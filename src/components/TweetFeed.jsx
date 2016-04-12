import React from 'react';

import Tweet from './Tweet';

export default function TweetFeed({ tweets }) {
  const tweetFeed = tweets
    .slice(-5)
    .map(t => (
      <li><Tweet key={ t.id } color={ t.color} tweet={ t } /></li>
    ));

  return (
    <ul className="tweetlist">
      { tweetFeed }
  </ul>
  );
}
