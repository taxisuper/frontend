import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { Link } from 'react-router';

import AppHeader from '../src/components/AppHeader';
import CurrentTweet from '../src/components/CurrentTweet';
import Tweet from '../src/components/Tweet';
import CountryList from '../src/components/CountryList';
import Flag from '../src/components/Flag';

describe('<AppHeader />', () => {
  it('should contain link to / and /feed', () => {
    const wrapper = shallow(<AppHeader />);

    const links = wrapper.find(Link);

    expect(links.find({ to: '/' }).length).toBe(1);
    expect(links.find({ to: '/feed' }).length).toBe(1);
  });
});

describe('<CountryList />', () => {
  it('should render empty list when given no countries', () => {
    const wrapper = shallow(<CountryList countries={ {} } />);

    expect(wrapper.find(Flag).length).toBe(0);
  });

  it('should render three flags when given three countries', () => {
    const countries = {
      en: 2,
      no: 9,
    };
    const wrapper = shallow(<CountryList countries={ countries } />);

    expect(wrapper.find(Flag).length).toBe(2);
  });

  it('should render max 25 flags', () => {
    const countries = {};
    for (let i = 0; i < 100; i++) {
      countries[i] = i;
    }
    const wrapper = shallow(<CountryList countries={ countries } />);

    expect(wrapper.find(Flag).length).toBe(25);
  });
});

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
