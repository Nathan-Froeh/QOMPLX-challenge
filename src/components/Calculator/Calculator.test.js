import React from 'react';
import Calculator from './Calculator';
import {shallow} from 'enzyme';

describe('Calculator', () => {
  let wrapper, instance;

  beforeEach(() => {
    wrapper = shallow(<Calculator/>)
    instance = wrapper.instance
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})