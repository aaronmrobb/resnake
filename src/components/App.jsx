import React, { Component } from 'react'
import { GridContainer } from './Grid.jsx'
import { ScoreContainer } from './Score.jsx'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import * as actionCreators from '../action_creators'

export class App extends Component {
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
    const gameover = <div><h3>Gameover </h3><span className="instructions">Hit space to restart</span></div>
    const newgame = <div><h3>New Game </h3><span className="instructions">Hit space to start</span></div>
    return (
      <div className="container">
        <div className="game">
          <h1 className="site-title">Super Snake Bros</h1>
          <GridContainer />
          <div id="status-message" style={{display: this.props.gameover || !this.props.playing ? "block" : "none"}}>
            { this.props.gameover ? gameover : newgame}
          </div>
        </div>
        <div className="sidebar">
          <ScoreContainer />
          <div className="key">
            <h3>Controls</h3>
            <p>&larr; &uarr; &rarr;	&darr; to move</p>
            <p>SPACEBAR to play</p>
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
