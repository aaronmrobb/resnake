import React, { Component } from 'react'
import Cell from './Cell.jsx'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'

export class Grid extends Component {
  constructor(props){
    super(props)
  }
  checkCellOccupant(cellIndex) {
    const { snake, food } = this.props
    return snake.indexOf(cellIndex) !== -1 ? 'snake' : food === cellIndex ? 'food' : 'empty'
  }
  render() {
    const { grid } = this.props
    const cells = []
    grid.map((cell, index) => {
      cells.push(<Cell occupant={this.checkCellOccupant(index)} key={index} />)
    })
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
    grid: state.get('grid'),
    snake: state.get('snake'),
    food: state.get('food')
  }
}

export const GridContainer = connect(mapStateToProps)(Grid)
