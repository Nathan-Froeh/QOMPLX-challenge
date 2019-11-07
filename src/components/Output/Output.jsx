import React, { Component } from 'react';
import {connect} from 'react-redux';

export class Output extends Component {
  render() {
    return (
      <section className='output'>
        <div>
          <label htmlFor="tip">Tip total:</label>
          <p className='tip'>${this.props.tip}</p>
        </div>
        <div>
          <label htmlFor="total">Tip total:</label>
          <p className='total'>${this.props.total}</p>
        </div>
      </section>
    )
  }
}

export const mapStatehToProps = state => ({
  tip: state.tip,
  total: state.total
})

export default connect(mapStatehToProps)(Output)
