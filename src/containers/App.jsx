import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import AppHeader from '../components/AppHeader.jsx';

export default function App({children, tweetCount}) {
  return (
      <div>
          <AppHeader tweetCount={ tweetCount } />
          {children}
      </div>
  );
}

App.propTypes = {
  tweetCount: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
    tweetCount: state.tweets.length
});

export default connect(mapStateToProps)(App);
