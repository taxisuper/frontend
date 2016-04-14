import React from 'react';
import Link from '../containers/Link';

import Timer from './Timer';

export default function AppHeader({ tweetCount }) {
  return (
    <div className="app-header">
      <div>
        <div className="menu-item">
          <Link to="/" className="img img-icon img-icon-dashboard"/>
          <Link to="/feed" className="img img-icon img-icon-settings"/>
        </div>
      </div>
      <div>
        <span className="tweet-stats-desc">seconds running</span>
        <strong><Timer /></strong>
      </div>
      <div>
        <span className="tweet-stats-desc">tweets captured</span>
        <strong>{ tweetCount }</strong>
      </div>
    </div>
  );
}
