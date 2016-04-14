import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import TweetFeed from './TweetFeed';
import Tweet from './Tweet';

describe('<TweetFeed />', () => {
  it('should not render tweets when not given any', () => {
    const wrapper = shallow(<TweetFeed tweets={ [] } />);

    expect(wrapper.contains(<Tweet />)).toBe(false);
  });

  it('should be able to render one tweet', () => {
    const tweets = [{}];
    const wrapper = shallow(<TweetFeed tweets={ tweets } />);

    expect(wrapper.find(Tweet).length).toBe(1);
  });

  it('should be able to render three tweets', () => {
    const tweets = [{}, {}, {}];
    const wrapper = shallow(<TweetFeed tweets={ tweets } />);

    expect(wrapper.find(Tweet).length).toBe(3);
  });

  it('should render maximum five tweets', () => {
    const tweets = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
    const wrapper = shallow(<TweetFeed tweets={ tweets } />);

    expect(wrapper.find(Tweet).length).toBe(5);
  });
});
