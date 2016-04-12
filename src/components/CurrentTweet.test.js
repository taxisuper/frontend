import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import CurrentTweet from './CurrentTweet';
import Tweet from './Tweet';


describe('<CurrentTweet />', () => {
  it('should render a tweet', () => {
    const wrapper = shallow(<CurrentTweet />);

    expect(wrapper.contains(Tweet));
  });

  it('should have the current-tweet class', () => {
    const wrapper = shallow(<CurrentTweet />);

    expect(wrapper.hasClass('current-tweet'));
  });
});

