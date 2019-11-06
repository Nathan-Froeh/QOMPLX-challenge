import React, { Component } from 'react'

class Calculator extends Component {

  render() {
    return (
      <form className='calculator'>
        <input type="text" placeholder='Total Bill'/>
        <select type="text">
          <option value=''>Choose a tip percent</option>
        </select>
        <input type="number" placeholder='Party size'/>
        <input type="submit" value='Calc tip'/>
      </form>
    )
  }
}

export default Calculator
