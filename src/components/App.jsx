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
  componentWillUpdate(props){
    if(props.playing) {
      window.addEventListener("keyup", (e) => {
       this.handleKeyup(e.keyCode)
     })
     this.interval = setInterval(this.props.next, 100)
   } else {
     window.removeEventListener("keyup")
     clearInterval(this.interval)
   }
  }
  handleKeyup(key) {
    switch (key) {
      case 37:
        this.props.changeDirection('LEFT')
          break;
      case 38:
        this.props.changeDirection('UP')
        break;
      case 39:
        this.props.changeDirection('RIGHT')
        break;
      case 40:
        this.props.changeDirection('DOWN')
        break;
    }
  }
  render() {
    return (
      <div className="container">
        <GridContainer />
        <button disabled={this.props.playing} onClick={this.props.startGame}>{this.props.gameover ? "Restart Game" : "Start Game" }</button>
      </div>
    )
  }
}
reactMixin(App.prototype, PureRenderMixin)

function mapStateToProps(state) {
  return {
    gameover: state.get('gameover'),
    playing: state.get('playing')
  }
}

export const AppContainer = connect(mapStateToProps, actionCreators)(App)
