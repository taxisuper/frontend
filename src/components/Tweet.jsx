import React, { PropTypes } from 'react';

class Tweet extends React.Component {
  shouldComponentUpdate(nextProps) {
    return this.props.tweet !== nextProps.tweet;
  }

  render() {
    const { tweet, color } = this.props;

    return (
      <div className="tweet">
        <div className={`tweet-header ${color ? color : ''}`}>
          <img className="tweet-image" src={ tweet.user.profile_image_url } />
          <div className="tweet-image-offset tweet-name">{ tweet.user.name }</div>
          <div className="tweet-image-offset tweet-screen-name">@{ tweet.user.screen_name }</div>
        </div>

        <div className="tweet-content">
          <div className="tweet-text">{ tweet.text }</div>
          <div className="tweet-stats">
            <span className="tweet-user-followers">
              <strong>{ tweet.user.followers_count }</strong>
              <span className="tweet-stats-desc">followers</span>
            </span>
          </div>
          <span className="tweet-country tweet-stats-desc">{ tweet.place.country }</span>
          <div className="tweet-city tweet-stats-desc">{ tweet.place.name }</div>
        </div>
      </div>
    );
  }
}

Tweet.propTypes = {
  tweet: PropTypes.object.isRequired
};

export default Tweet;
