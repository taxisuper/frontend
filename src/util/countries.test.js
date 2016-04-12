import expect from 'expect';

import { getCountryName } from './countries';

describe('getCountryName', () => {
  it("should get 'Norway' for country code 'no'", () => {
    expect(getCountryName('no')).toBe('Norway');
  });

  it('should return the country code if the name for that code does not exist', () => {
    const invalidCountryCode = 'asdadqasda';
    expect(getCountryName(invalidCountryCode)).toBe(invalidCountryCode);
  });
});
