import React from 'react';
import {Input} from './Input';
import {shallow} from 'enzyme';


describe('Input', () => {
  let wrapper, instance;
  const props = {
    tip: jest.fn(),
    total: jest.fn(),
    theme: jest.fn()
  }

  beforeEach(() => {
    wrapper = shallow(<Input store={props}/>)
    instance = wrapper.instance()
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should set state', () => {
    const e = {
      target: {
        name: 'totalBill',
        value: 100
      }
    }
    expect(wrapper.state('totalBill')).toEqual('')
    instance.handleChange(e)
    expect(wrapper.state('totalBill')).toEqual(100)
  })

})
