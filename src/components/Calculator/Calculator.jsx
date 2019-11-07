import React, { Component } from 'react';
import './Calculator.scss';

class Calculator extends Component {

  render() {
    return (
      <div className='calculator'>
        <form>
          <input type="number" placeholder='Total Bill'/>
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
          <input type="number" placeholder='Party size'/>
          <input type="submit" className='submit' value='Calc tip'/>
        </form>
        <section className='output'>
          <div>
            <label htmlFor="tip">Tip total:</label>
            <p className='tip'>$Tip</p>
          </div>
          <div>
            <label htmlFor="total">Tip total:</label>
            <p className='total'>$Total</p>
          </div>
        </section>
      </div>
    )
  }
}

export default Calculator
