import React, { Component } from 'react';
import './Calculator.scss';

class Calculator extends Component {

  render() {
    return (
      <form className='calculator'>
        <input type="text" placeholder='Total Bill'/>
        <select type="text">
          <option value=''>Choose a tip percent</option>
          <option value={0}>0%</option>
          <option value={5}>5%</option>
          <option value={10}>10%</option>
          <option value={15}>15%</option>
          <option value={20}>20%</option>
          <option value={25}>25%</option>
          <option value={30}>30%</option>
        </select>
        <input type="number" placeholder='Party size'/>
        <input type="submit" value='Calc tip'/>
      </form>
    )
  }
}

export default Calculator
