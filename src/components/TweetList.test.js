import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import TweetList from './TweetList';
import Tweet from './Tweet';

describe('<TweetList />', () => {
  it('should not render tweets when not given any', () => {
    const wrapper = shallow(<TweetList tweets={ [] } />);

    expect(wrapper.contains(<Tweet />)).toBe(false);
  });

  it('should be able to render one tweet', () => {
    const tweets = [{}];
    const wrapper = shallow(<TweetList tweets={ tweets } />);

    expect(wrapper.contains(<Tweet tweet={ {} } />)).toBe(true);
  });

  it('should be able to render three tweets', () => {
    const tweets = [{}, {}, {}];
    const wrapper = shallow(<TweetList tweets={ tweets } />);

    expect(wrapper.find(Tweet).length).toBe(3);
  });

  it('should render maximum three tweets', () => {
    const tweets = [{}, {}, {}, {}, {}, {}, {}];
    const wrapper = shallow(<TweetList tweets={ tweets } />);

    expect(wrapper.find(Tweet).length).toBe(3);
  });
});
