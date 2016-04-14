import React, {PropTypes} from 'react';
import { connect } from 'react-redux';

import { selectTweet, toggleFilterActive, addFilter } from '../actions';
import { getViewTweets } from '../util/selectors.js';

import TweetFeed from '../components/TweetFeed';
import FilterContainer from './FilterContainer.jsx';

function Feed({tweets = [], filters, dispatch}) {
  return (
    <div>
      <div className="menu">
        <FilterContainer
          filters = {filters}
          onAddFilter = {f => dispatch(addFilter(f))}
          onFilterButtonPressed = {(f, active) => dispatch(toggleFilterActive(f, active))}
        />
      </div>
      <div className="feed">
        <TweetFeed tweets={ tweets }/>
      </div>
    </div>
  );
}

Feed.propTypes = {
  tweets: PropTypes.array,
  tweetCount: PropTypes.number,
  currentTweet: PropTypes.object,
  countries: PropTypes.object,
  filters: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  tweets: getViewTweets(state),
  countries: state.countries,
  filters: state.filters,
});

export default connect(mapStateToProps)(Feed);





