import _ from 'lodash';
import React from 'react';
import TweetMap from './TweetMap';
import AppHeader from './AppHeader';
import CountryList from './CountryList';
import CurrentTweet from './CurrentTweet';
import InfluentialTweets from './InfluentialTweets';

const ws = new WebSocket('ws://twitterws.herokuapp.com');

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: [],
      tweetCount: 0,
      currentTweet: null,
      countries: {}
    };
  }

  countCountry(countryCode) {
    const countries = _.clone(this.state.countries);
    countries[countryCode] = (countries[countryCode] || 0) + 1;
    this.setState({ countries });
  }

  componentDidMount() {
    ws.onmessage = ms => {
      const newTweet = JSON.parse(ms.data);
      const tweets = this.state.tweets.concat([newTweet]).slice(-100);
      this.setState({ tweets, tweetCount: this.state.tweetCount + 1 });

      const countryCode = newTweet.place.country_code;
      if (countryCode) {
        this.countCountry(countryCode);
      }
    };
  }

  componentWillUnmount() {
    ws.onmessage = null;
  }

  showTweet(id) {
    const tweet = _.findWhere(this.state.tweets, { id });
    if (!tweet) {
      console.log('Tweet no longer in selection');
    }
    this.setState({ currentTweet: tweet });
  }

  render() {
    const { currentTweet, tweets, tweetCount, countries } = this.state;
    const tweet = currentTweet !== null ?
      <CurrentTweet tweet={ currentTweet } /> :
      null;

    return (
      <div>
        <TweetMap
          tweets={ tweets }
          currentTweet={ currentTweet }
          showTweet={ this.showTweet}
        />
        <InfluentialTweets tweets={ tweets } />
        <AppHeader tweetCount={ tweetCount } />
        <CountryList countries={ countries } />
        { tweet }
      </div>
    );
  }
}

export default Dashboard;
