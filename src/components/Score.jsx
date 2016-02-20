import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'


export class Score extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div className="score">
        {this.props.score}
      </div>
    )
  }
}

reactMixin(Score.prototype, PureRenderMixin)

function mapStateToProps(state){
  return {
    score: state.get('score')
  }
}

export const ScoreContainer = connect(mapStateToProps)(Score)
