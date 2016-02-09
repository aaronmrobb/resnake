import { Map, List, fromJS } from 'immutable'

const initialGame = Map({
  grid: fromJS(new Array(900).fill('')),
  direction: 'RIGHT',
  snake: List.of(1),
  length: 1,
  food: parseInt(Math.random() * 899),
  playing: false,
  gameover: false
})

export default initialGame
