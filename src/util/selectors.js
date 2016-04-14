import { createSelector } from 'reselect'

import {findFilterMatch} from './filters.js'

const getActiveFilters = (state) => state.filters.filter(f => f.active);
const getTweets = (state) => state.tweets;

export const getViewTweets = createSelector(
  [ getActiveFilters, getTweets ],
  (activeFilters, tweets) => {
    if (activeFilters.length !== 0) {
      return tweets.map(t => {
        const filterMatch = findFilterMatch(t, activeFilters);
        return filterMatch ? {...t, color: filterMatch.color} : t;
      }).filter(t => t.color);
    } else {
      return tweets.slice(-99).map((t) => ({...t, color: 'red'}));
    }
  }
);
