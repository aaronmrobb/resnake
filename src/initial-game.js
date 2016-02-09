import { Map, List } from 'immutable'

const initialGame = Map({
  direction: 'RIGHT',
  snake: List.of(1),
  length: 1,
  food: parseInt(Math.random() * 899),
  playing: false,
  gameover: false
})

export default initialGame
