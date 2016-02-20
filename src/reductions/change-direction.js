function changeDirection(state, direction) {
  const currentDirection = state.get('direction')
  if
    ((currentDirection === 'DOWN' && direction === 'UP') ||
    (currentDirection === 'UP' && direction === 'DOWN') ||
    (currentDirection === 'RIGHT' && direction === 'LEFT') ||
    (currentDirection === 'LEFT' && direction === 'RIGHT')
    ) {
    return state
  }
  return state.set('direction', direction)
}

export default changeDirection
