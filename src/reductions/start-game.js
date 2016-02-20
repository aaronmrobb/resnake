import { List, Map, fromJS } from 'immutable'

function startGame(state) {
  return Map({
    grid: fromJS(new Array(900).fill('')),
    direction: 'RIGHT',
    snake: List.of(1),
    length: 1,
    food: parseInt(Math.random() * 899),
    playing: true,
    gameover: false,
    score: 0
  })
}

export default startGame
