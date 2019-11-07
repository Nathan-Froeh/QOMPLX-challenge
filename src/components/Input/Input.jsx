import React, { Component } from 'react';
import Cleave from 'cleave.js/react';
import {connect} from 'react-redux';
import {setTip, setTotal, setTipAmount} from '../../Actions/index';

export class Input extends Component {
  constructor() {
    super()
    this.state = {
      totalBill: '',
      tipAmount: '',
      partySize: ''
    }
  }

  handleChange = (e) => {
    const {value, name} = e.target;
    if(name === 'tipAmount') this.style(value)
    this.setState({[name]: value})
  }

  calculate = (e) => {
    e.preventDefault()
    const {totalBill, tipAmount, partySize} = this.state;
    const totalTip = totalBill/tipAmount;
    this.props.tip(totalTip/partySize)
    this.props.total(totalBill/partySize)
  }

  style = (value) => {
    switch(true) {
      case (value < 20):
        this.props.tipAmount('low');
        break;
      case (value > 25):
        this.props.tipAmount('high');
        break;
      default:
        this.props.tipAmount('normal');
        break;
    }
  }

  render() {
    return (
      <form onSubmit={this.calculate}>
        <Cleave placeholder='Total bill'
          name='totalBill'
          options={{numeral: true, numeralDecimalScale: 2}}
          value={this.state.totalBill}
          onChange={this.handleChange}
          required
        />
        <select onChange={this.handleChange} name='tipAmount' required>
          <option value=''>Choose a tip percent</option>
          <option value={0}>0%</option>
          <option value={5}>5%</option>
          <option value={10}>10%</option>
          <option value={15}>15%</option>
          <option value={20}>20%</option>
          <option value={25}>25%</option>
          <option value={30}>30%</option>
          <option value={35}>35%</option>
          <option value={40}>40%</option>
          <option value={45}>45%</option>
          <option value={50}>50%</option>
          </select>
        <Cleave placeholder='Party size'
          name='partySize'
          options={{numeral: true}}
          value={this.state.partySize}
          onChange={this.handleChange}
          required
        />
        <input type="submit" className='submit' value='Calc tip'/>
        </form>
    )
  }
}

export const mapDispatchToProps = dispatch => ({
  tip: (tip) => dispatch(setTip(tip)),
  total: (total) => dispatch(setTotal(total)),
  tipAmount: (tipAmount) => dispatch(setTipAmount(tipAmount))
})

export default connect(null, mapDispatchToProps)(Input)
