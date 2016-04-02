import expect from 'expect';

import { getCountryName } from '../src/util/countries';
import { findFilterMatch } from '../src/util/filters';

describe('getCountryName', () => {
  it("should get name for 'no'", () => {
    expect(getCountryName('no')).toBe('Norway');
  });

  it('should return country code if not found', () => {
    const invalidCountryCode = 'asdadqasda';
    expect(getCountryName(invalidCountryCode)).toBe(invalidCountryCode);
  });
});

describe('findFilterMatch', () => {
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

  it('should match on text', () => {
    const tweet = {
      text: 'this is a tweet containing text'
    };

    expect(findFilterMatch(tweet, filters)).toBe(textFilter);
  });

  it('should match on hashtags', () => {
    const tweet = {
      entities: {
        hashtags: [{ text: 'react' }]
      }
    };

    expect(findFilterMatch(tweet, filters)).toBe(hashtagFilter);
  });

  it('should return undefined when not matched', () => {
    const tweet = {};

    expect(findFilterMatch(tweet, filters)).toBe(undefined);
  });
});
