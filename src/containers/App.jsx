import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import If from './If';
import IfChild from './IfChild';
import AppHeader from '../components/AppHeader.jsx';
import DashBoard from './DashBoard.jsx';
import Calendar from './Calendar.jsx';
import { Router, Route, IndexRoute, Redirect, useRouterHistory } from 'react-router';

function App({route, tweetCount}) {
  return (
    <div>
      <AppHeader tweetCount={ tweetCount } />
      <If condition={ route === '/calendar' }>
        <IfChild>
          <Calendar />
        </IfChild>
        <IfChild>
          <DashBoard />
        </IfChild>
      </If>
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
