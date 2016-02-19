import { Map, List, fromJS } from 'immutable'

const initialGame = Map({
  grid: fromJS(new Array(900).fill('')),
  direction: 'RIGHT',
  snake: 0,
  length: 0,
  food: 0,
  playing: false,
  gameover: false
})

export default initialGame
