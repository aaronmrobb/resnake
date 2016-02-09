import React, { Component } from 'react'
import Cell from './Cell.jsx'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'

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

reactMixin(Grid.prototype, PureRenderMixin)

function mapStateToProps(state) {
  return {
    snake: state.get('snake'),
    food: state.get('food')
  }
}

export const GridContainer = connect(mapStateToProps)(Grid)
