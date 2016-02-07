import React, { Component } from 'react'
import Cell from './Cell.jsx'

export class Grid extends Component {
  constructor(props){
    super(props)
  }
  render() {
    const blah = new Array(10).fill('x')
    const cells =  blah.map((bla, index)=> <Cell key={index} />)
    return(
      <div>
        { cells }
      </div>
    )
  }
}
