import { List, Map } from 'immutable'

function startGame(state) {
  return state.set('playing', true)
}

function changeDirection(state, direction) {
  return state.set('direction', direction)
}

function setUser(state, user) {
  return state.set('user', user)
}

function next(state) {
  switch(state.get('direction')) {
    case 'UP':
      return moveSnake(state, -30)
    case 'DOWN':
      return moveSnake(state, 30)
    case 'LEFT':
      return moveSnake(state, -1)
    case 'RIGHT':
      return moveSnake(state, 1)
  }
}

function moveSnake(state, change) {
  let currentHead = state.get('snake').get(0)
  let nextHead = currentHead + change
  if(nextHead < 0 ||
    nextHead > 900 ||
    (currentHead % 30 === 0 && change === -1) ||
    ((currentHead + 1) % 30 === 0 && change === 1))
  {
    console.log(state.set('playing', false).set('gameover', true))
    return state.set('playing', false).set('gameover', true)
  }
  return state
}


export default function(state = Map(), action) {
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
