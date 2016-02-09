import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class Cell extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div className={this.props.occupant}>
      </div>
    )
  }
}

reactMixin(Cell.prototype, PureRenderMixin)

export default Cell
