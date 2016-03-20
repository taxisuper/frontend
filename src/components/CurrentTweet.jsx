import React from 'react';

import Tweet from './Tweet';

export default function CurrentTweet(props) {
  return (
    <div className="current-tweet">
      <Tweet { ...props } />
    </div>
  );
}
