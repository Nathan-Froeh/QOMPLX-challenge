import React, { Component } from 'react'

export class Output extends Component {
  render() {
    return (
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
    )
  }
}

export default Output;
