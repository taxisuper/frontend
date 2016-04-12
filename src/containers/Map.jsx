import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { selectTweet, toggleFilterActive, addFilter } from '../actions';
import { getViewTweets } from '../util/selectors.js';

import TweetMap from '../components/TweetMap';
import CountryList from '../components/CountryList';
import CurrentTweet from '../components/CurrentTweet';
import InfluentialTweets from '../components/InfluentialTweets';
import FilterContainer from './FilterContainer.jsx';

class Map extends React.Component {
  constructor(props) {
    super(props);

    this.showTweet = this.showTweet.bind(this);
  }

  showTweet(id) {
    const tweet = this.props.tweets.find(t => t.id === id);
    this.props.dispatch(selectTweet(tweet));
  }

  render() {
    const {
      currentTweet,
      tweets,
      filters,
      dispatch
    } = this.props;
    const tweet = currentTweet !== null ?
      <CurrentTweet tweet={ currentTweet } /> :
      null;

    return (
      <div className="map">
        <TweetMap
          tweets={ tweets }
          showTweet={ this.showTweet }
        />
        <FilterContainer
          filters = {filters}
          onAddFilter = {f => dispatch(addFilter(f))}
          onFilterButtonPressed = {(f, active) => dispatch(toggleFilterActive(f, active))}
        />
        { tweet }
      </div>
    );
  }
}

Map.propTypes = {
  tweets: PropTypes.array,
  tweetCount: PropTypes.number,
  currentTweet: PropTypes.object,
  countries: PropTypes.object,
  filters: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  tweets: getViewTweets(state),
  currentTweet: state.view.currentTweet,
  countries: state.countries,
  filters: state.filters
});

export default connect(mapStateToProps)(Map);
