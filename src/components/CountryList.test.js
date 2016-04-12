import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Flag from './Flag';
import CountryList from './CountryList';

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

