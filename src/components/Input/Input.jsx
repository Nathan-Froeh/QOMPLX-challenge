import React, { Component } from 'react';
import Cleave from 'cleave.js/react';

export class Input extends Component {
  constructor() {
    super()
    this.state = {
      totalBill: '',
      partySize: ''
    }
  }

  handleChange = (e) => {
    const {value, name} = e.target;
    this.setState({[name]: value})
  }
  
  render() {
    return (
      <form>
        <Cleave placeholder='Total bill'
          name='totalBill'
          options={{numeral: true, numeralDecimalScale: 2}}
          value={this.state.totalBill}
          onChange={this.handleChange}
        />
        <select>
          <option value=''>Choose a tip percent</option>
          <option value={0}>0%</option>
          <option value={5}>5%</option>
          <option value={10}>10%</option>
          <option value={15}>15%</option>
          <option value={20}>20%</option>
          <option value={25}>25%</option>
          <option value={30}>30%</option>
          </select>
        <Cleave placeholder='Party size'
          name='partySize'
          options={{numeral: true}}
          value={this.state.partySize}
          onChange={this.handleChange}
          />
        <input type="submit" className='submit' value='Calc tip'/>
        </form>
    )
  }
}

export default Input
