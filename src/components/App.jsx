import React, { Component } from 'react'
import { GridContainer } from './Grid.jsx'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import * as actionCreators from '../action_creators'

export class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <GridContainer />
        <button onClick={this.props.startGame}>Start Game</button>
      </div>
    )
  }
}
reactMixin(App.prototype, PureRenderMixin)

function mapStateToProps(state) {
  return {
    snake: state.get('snake'),
    food: state.get('food')
  }
}

export const AppContainer = connect(mapStateToProps, actionCreators)(App)
