export function next() {
  return {
    type: 'NEXT'
  }
}

export function changeDirection(direction) {
  return {
    type: 'CHANGE_DIRECTION',
    direction: direction
  }
}

export function setUser(user) {
  return {
    type: 'SET_USER',
    user: user
  }
}

export function startGame() {
  return {
    type: 'START_GAME'
  }
}
