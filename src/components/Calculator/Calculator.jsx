import React, { Component } from 'react';
import './Calculator.scss';
import Input from '../Input/Input';
import Output from '../Output/Output';

class Calculator extends Component {

  render() {
    return (
      <div className='calculator'>
        <Input/>
        <Output/>
      </div>
    )
  }
}

export default Calculator
