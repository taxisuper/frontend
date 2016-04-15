import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { setCurrentTweet } from '../actions';

import TweetMap from '../components/TweetMap';
import CurrentTweet from '../components/CurrentTweet';

function Map({
  currentTweet,
  tweets,
  dispatch
}) {
  const tweet = currentTweet !== null ?
    <CurrentTweet tweet={ currentTweet } /> :
    null;

  return (
    <div className="map">
      <TweetMap
        tweets={ tweets }
        onTweetClick={ t => dispatch(setCurrentTweet(t)) }
      />
      { tweet }
    </div>
  );
}

Map.propTypes = {
  tweets: PropTypes.array,
  currentTweet: PropTypes.object,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  tweets: state.tweets,
  currentTweet: null
});

export default connect(mapStateToProps)(Map);
