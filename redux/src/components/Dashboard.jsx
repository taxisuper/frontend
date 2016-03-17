import _ from 'lodash';
import React from 'react';
import TweetMap from './TweetMap';
import AppHeader from './AppHeader';
import CountryList from './CountryList';
import CurrentTweet from './CurrentTweet';
import InfluentialTweets from './InfluentialTweets';

const ws = new WebSocket('ws://twitterws.herokuapp.com');

const Dashboard = React.createClass({

  getInitialState() {
    return {
      tweets: [],
      tweetCount: 0,
      currentTweet: null,
      countries: {}
    };
  },

  countCountry(countryCode) {
    const countries = _.clone(this.state.countries);
    countries[countryCode] = (countries[countryCode] || 0) + 1;
    this.setState({ countries });
  },

  componentDidMount() {
    ws.onmessage = function (ms) {
      const newTweet = JSON.parse(ms.data);
      const tweets = this.state.tweets.concat([newTweet]).slice(-100);
      this.setState({ tweets, tweetCount: this.state.tweetCount + 1 });

      const countryCode = newTweet.place.country_code;
      if (countryCode) {
        this.countCountry(countryCode);
      }
    }.bind(this);
  },

  componentWillUnmount() {
    ws.onmessage = null;
  },

  showTweet(id) {
    const tweet = _.findWhere(this.state.tweets, { id });
    if (!tweet) {
      console.log('Tweet no longer in selection');
    }
    this.setState({ currentTweet: tweet });
  },

  render() {
    let tweet = null;
    if (this.state.currentTweet !== null) {
      tweet = <CurrentTweet tweet={ this.state.currentTweet } />;
    }

    return (
      <div>
        <TweetMap
          tweets={ this.state.tweets }
          currentTweet={ this.state.currentTweet }
          showTweet={ this.showTweet}
        />
        <InfluentialTweets tweets={ this.state.tweets } />
        <AppHeader tweetCount={this.state.tweetCount} />
        <CountryList countries={this.state.countries} />
        { tweet }
      </div>
    );
  }

});

export default Dashboard;
