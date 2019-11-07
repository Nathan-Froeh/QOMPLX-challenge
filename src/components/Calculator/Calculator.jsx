import React, { Component } from 'react';
import './Calculator.scss';
import Input from '../Input/Input';

class Calculator extends Component {

  render() {
    return (
      <div className='calculator'>
        <Input/>
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
