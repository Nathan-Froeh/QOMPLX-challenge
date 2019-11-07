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
    wrapper = shallow(<Input {...props}/>)
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

  it('should call style func', () => {
    const e = {
      target: {
        name: 'tipAmount',
        value: 10
      }
    }
    instance.style = jest.fn()
    expect(instance.style).toHaveBeenCalledTimes(0)
    instance.handleChange(e)
    expect(instance.style).toHaveBeenCalledTimes(1)
  })

  it('should run calculate', () => {
    const e = {
      preventDefault: jest.fn()
    }
    expect(props.tip).toHaveBeenCalledTimes(0)
    expect(props.total).toHaveBeenCalledTimes(0)
    instance.calculate(e)
    expect(props.tip).toHaveBeenCalledTimes(1)
    expect(props.total).toHaveBeenCalledTimes(1)
  })

  it('theme should be normal', () => {
    const value = '';
    expect(props.theme).toHaveBeenCalledTimes(0)
    instance.style(value)
    expect(props.theme).toHaveBeenCalledWith('normal')
  })

  it('theme should be low', () => {
    const value = 15;
    expect(props.theme).toHaveBeenCalledTimes(1)
    instance.style(value)
    expect(props.theme).toHaveBeenCalledWith('low')
  })

  it('theme should be high', () => {
    const value = 30;
    expect(props.theme).toHaveBeenCalledTimes(2)
    instance.style(value)
    expect(props.theme).toHaveBeenCalledWith('high')
  })

  it('should not be submitable', () => {
    instance.calculate = jest.fn()
    expect(instance.calculate).toHaveBeenCalledTimes(0)
    wrapper.find('.submit').simulate('click')
    expect(instance.calculate).toHaveBeenCalledTimes(0)
  })

  it('should be submitable', () => {
    const e = {
      preventDefault: jest.fn()
    }
    instance.calculate = jest.fn()
    expect(instance.calculate).toHaveBeenCalledTimes(0)
    wrapper.setState({totalBill: 100, tipAmount: 10, partySize: 1})
    wrapper.find('form').simulate('submit', e)
    expect(instance.calculate).toHaveBeenCalledTimes(1)
  })

})
