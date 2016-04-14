import React, { PropTypes } from 'react';
import Flag from './Flag';
import { connect } from 'react-redux';
import { saveTweet } from '../actions';

class Tweet extends React.Component {
  shouldComponentUpdate(nextProps) {
    return this.props.tweet !== nextProps.tweet;
  }

  render() {
    const { tweet, dispatch } = this.props;

    return (
      <div className="tweet">
        <div className="tweet-header">
          <img className="tweet-image" src={ tweet.user.profile_image_url } />
          <div className="tweet-image-offset">
            <span className="tweet-name">{ tweet.user.name }</span>
            <span className="tweet-screen-name">@{ tweet.user.screen_name }</span>
          </div>
          
        </div>

        <div className="tweet-text">{ tweet.text }</div>
        <span className="tweet-country tweet-stats-desc"></span>
        <div className="tweet-city tweet-stats-desc">
          { tweet.place.name }, { tweet.place.country }
        </div>
        <button onClick={ () => dispatch(saveTweet(tweet)) }>SAVE</button>
      </div>
    );
  }
}

Tweet.propTypes = {
  tweet: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default connect()(Tweet);
