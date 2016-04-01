import React from 'react';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import FilterMonitor from 'redux-devtools-filter-actions';
import DockMonitor from 'redux-devtools-dock-monitor';

import { TWEET_RECEIVED } from '../actions';

export default createDevTools(
  <DockMonitor
    toggleVisibilityKey="ctrl-h"
    changePositionKey="ctrl-q"
  >
    <FilterMonitor blacklist={ [TWEET_RECEIVED] }>
      <LogMonitor />
    </FilterMonitor>
  </DockMonitor>
);
