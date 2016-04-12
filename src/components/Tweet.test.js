import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Tweet from './Tweet';

describe('<Tweet />', () => {
  it('should show text, name and screen name', () => {
    const tweet = {
      text: 'React should’ve been called Rect. It manages rectangles on the screen, right? And no confusion with being reactive.',
      user: {
        name: 'Dan Abramov',
        screen_name: 'dan_abramov',
        profile_image_url: '',
        followers_count: 9001
      },
      place: {
        country_code: 'ru',
        country: 'Russia',
        name: 'Moscow'
      }
    };
    const wrapper = shallow(<Tweet tweet={ tweet } />);

    expect(wrapper.contains(tweet.text)).toBe(true);
    expect(wrapper.contains(tweet.user.name)).toBe(true);
    expect(wrapper.contains(tweet.user.screen_name)).toBe(true);
  });
});
