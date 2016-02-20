import { List, Map, fromJS } from 'immutable'
import initialGame from './initial-game.js'
import next from './reductions/next.js'
import changeDirection from './reductions/change-direction.js'
import startGame from './reductions/start-game.js'
import { setUser } from './reductions/user.js'

export default function(state = initialGame, action) {
  switch(action.type) {
    case 'START_GAME':
      return startGame(state)
    case 'NEXT':
      return next(state)
    case 'CHANGE_DIRECTION':
      return changeDirection(state, action.direction)
    case 'SET_USER':
      return setUser(state, action.user)
  }
  return state
}
