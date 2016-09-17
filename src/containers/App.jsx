import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import AppHeader from '../components/AppHeader.jsx';
import DashBoard from './DashBoard.jsx';
import Calendar from './Calendar.jsx';
import Activities from './Activities.jsx';
import { Router, Route, IndexRoute, Redirect, useRouterHistory } from 'react-router';

function App({route}) {
  const renderCorrectRoute = (route) => {
    if (route === '/calendar') {
      return <Calendar/>
    } else if ( route === '/activities') {
      return <Activities/>
    } else {
      return <Calendar/>
    }
  };

  return (
    <div>
      {renderCorrectRoute(route)}
    </div>
  );
}

App.propTypes = {
  tweetCount: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  tweetCount: state.tweets.length,
  route: state.route
});

export default connect(mapStateToProps)(App);
