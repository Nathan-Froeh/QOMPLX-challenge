import React from 'react';
import Calculator from './Calculator';
import {shallow} from 'enzyme';

describe('Calculator', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Calculator/>)
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})