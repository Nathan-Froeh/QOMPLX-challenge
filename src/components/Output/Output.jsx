import React, { Component } from 'react';
import {connect} from 'react-redux';

export class Output extends Component {
  render() {
    return (
      <section className='output'>
        <div>
          <label htmlFor="tip" className={this.props.tipAmount}>Tip total:</label>
          <p className={this.props.tipAmount}>${this.props.tip}</p>
        </div>
        <div>
          <label htmlFor="total" className={this.props.tipAmount}>Tip total:</label>
          <p className={this.props.tipAmount}>${this.props.total}</p>
        </div>
      </section>
    )
  }
}

export const mapStatehToProps = state => ({
  tip: state.tip,
  total: state.total,
  tipAmount: state.tipAmount
})

export default connect(mapStatehToProps)(Output)
