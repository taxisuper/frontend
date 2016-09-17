import expect from 'expect';

import { findFilterMatch } from './filters';

describe('findFilterMatch', () => {
  it('should be able to match on text', () => {
    const textFilter = {
      name: 'txtfilter',
      text: 'text'
    };
    const filters = [textFilter];
    const tweet = {
      text: 'this is a tweet containing text'
    };

    expect(findFilterMatch(tweet, filters)).toBe(textFilter);
  });

  it('should be able to match on a hashtag', () => {
    const hashtagFilter = {
      name: 'hashtag filter',
      hashtags: ['react']
    };
    const filters = [hashtagFilter];
    const tweet = {
      entities: {
        hashtags: [{ text: 'react' }]
      }
    };

    expect(findFilterMatch(tweet, filters)).toBe(hashtagFilter);
  });

  it('should match a tweet that has only one hashtag from a filter', () => {
    const hashtagFilter = {
      name: 'hashtag filter',
      hashtags: ['react', 'angular', 'cycle']
    };
    const filters = [hashtagFilter];
    const tweet = {
      entities: {
        hashtags: [{ text: 'react' }]
      }
    };

    expect(findFilterMatch(tweet, filters)).toBe(hashtagFilter);
  });

  it('should return undefined when not matched', () => {
    const textFilter = {
      name: 'txtfilter',
      text: 'text'
    };
    const hashtagFilter = {
      name: 'hashtag filter',
      hashtags: ['react']
    };
    const filters = [
      textFilter,
      hashtagFilter
    ];
    const tweet = {};

    expect(findFilterMatch(tweet, filters)).toBe(undefined);
  });

  it('should return undefined when no filters are specified', () => {
    const filters = [];
    const tweet = {};

    expect(findFilterMatch(tweet, filters)).toBe(undefined);
  });

  describe('a filter with both text and hashtag', () => {
    const comboFilter = {
      name: 'combo filter',
      hashtags: ['redux'],
      text: 'redux is awesome'
    };
    const filters = [comboFilter];

    it('should match tweets that only have the text', () => {
      const tweet = {
        name: 'reduxtweet',
        text: 'redux is awesome!!!!!!111',
      };

      expect(findFilterMatch(tweet, filters)).toBe(comboFilter);
    });

    it('should match tweets that only have the hashtags', () => {
      const tweet = {
        name: 'reduxtweet',
        entities: {
          hashtags: [{ text: 'redux' }]
        }
      };

      expect(findFilterMatch(tweet, filters)).toBe(comboFilter);
    });
  });
});

