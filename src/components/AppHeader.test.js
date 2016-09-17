import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Link from '../containers/Link';

import AppHeader from './AppHeader';

describe('<AppHeader />', () => {
  it('should contain link to / and /feed', () => {
    const wrapper = shallow(<AppHeader />);

    const links = wrapper.find(Link);

    expect(links.find({ to: '/' }).length).toBe(1);
    expect(links.find({ to: '/feed' }).length).toBe(1);
  });
});

