import React, { Component } from 'react'
import { GridContainer } from './Grid.jsx'
import { ScoreContainer } from './Score.jsx'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import * as actionCreators from '../action_creators'

export class App extends Component {
  constructor(props) {
    super(props)
  }
  componentWillMount(){
    window.addEventListener("keyup", (e) => {
     this.handleKeyup(e.keyCode)
   })
  }
  componentWillUpdate(props){

    if(props.playing) {
     this.interval = setInterval(this.props.next, 100)
   } else {
     window.removeEventListener("keyup")
     clearInterval(this.interval)
   }
  }
  handleKeyup(key) {

    switch (key) {
      case 32:
        this.props.startGame()
        break;
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
        <div className="game">
          <GridContainer />
          <div id="status-message"></div>
        </div>
        <div className="sidebar">
          <ScoreContainer />
          <div className="key">
            <h3>Controls</h3>
            <p>&larr; &uarr; &rarr;	&darr; for movement</p>
            <p>Spacebar for starting / restarting</p>
          </div>
        </div>
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
