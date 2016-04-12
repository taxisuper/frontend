import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import CurrentTweet from './CurrentTweet';
import Tweet from './Tweet';


describe('<CurrentTweet />', () => {
  it('should render without a tweet', () => {
    const wrapper = shallow(<CurrentTweet />);

    expect(wrapper.contains(<Tweet />)).toBe(true);
  });

  it('should render with a tweet', () => {
    const tweet = {};
    const wrapper = shallow(<CurrentTweet tweet={ tweet } />);

    expect(wrapper.contains(<Tweet tweet={ tweet } />)).toBe(true);
  });

  it('should have the current-tweet class', () => {
    const wrapper = shallow(<CurrentTweet />);

    expect(wrapper.hasClass('current-tweet')).toBe(true);
  });
});

