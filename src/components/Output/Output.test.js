import React from 'react';
import {Output} from './Output';
import {shallow} from 'enzyme';

describe('Output', () => {
  let wrapper;
  const props = {
    tip: jest.fn(),
    total: jest.fn(),
    theme: jest.fn()
  }

  beforeEach(() => {
    wrapper = shallow(<Output {...props}/>)
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})