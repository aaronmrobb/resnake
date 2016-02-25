import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class Cell extends Component {

  render() {
    return(
      <div className={this.props.occupant} style={{opacity: this.props.gameover ? 0.3 : 1}}>
      </div>
    )
  }
}

reactMixin(Cell.prototype, PureRenderMixin)

export default Cell
