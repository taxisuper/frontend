import React, { PropTypes } from 'react';

import Tweet from './Tweet';

function TweetList({ tweets }) {
  const tweetComps = tweets
    .slice(-3)
    .map(t => (
      <li key={ t.id }><Tweet tweet={ t } /></li>
    ));

  return (
    <ul className="tweetlist">
      { tweetComps }
  </ul>
  );
}

TweetList.propTypes = {
  tweets: PropTypes.array.isRequired
};

export default TweetList;
