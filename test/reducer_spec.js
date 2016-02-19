import { expect } from 'chai'
import { List, Map, fromJS } from 'immutable'

import reducer from '../src/reducer.js'

describe('reducers', () => {
  describe('interaction behavior', () => {
    it('handles START_GAME', () => {
      const initialState = Map({
        playing: false
      })
      const action = {
        type: 'START_GAME'
      }
      const nextState = reducer(initialState, action)
      expect(nextState).to.equal(fromJS({
        playing: true
      }))
    })
    it('handles CHANGE_DIRECTION when not trying to go the opposite direction', () => {
      const initialState = Map({
        direction: 'RIGHT'
      })
      const action = {
        type: 'CHANGE_DIRECTION',
        direction: 'DOWN'
      }
      const nextState = reducer(initialState, action)
      expect(nextState).to.equal(fromJS({
        direction: 'DOWN'
      }))
    })
    it('does change direction when attempting to move in opposite of current direction', () => {
      const initialState = Map({
        direction: 'UP'
      })
      const action = {
        type: 'CHANGE_DIRECTION',
        direction: 'DOWN'
      }
      const nextState = reducer(initialState, action)
      expect(nextState).to.equal(fromJS({
        direction: 'UP'
      }))
    })
    it('handles SET_USER', () => {
      const initialState = Map({
        user: ''
      })
      const action = {
        type: 'SET_USER',
        user: 'Dudebro'
      }
      const nextState = reducer(initialState, action)
      expect(nextState).to.equal(fromJS({
        user: 'Dudebro'
      }))
    })
  })
  describe('NEXT movement behavior', () => {
    it('goes UP legally', () => {
      const initialState = Map({
        direction: 'UP',
        snake: List.of(67),
        length: 1,
        playing: true,
        gameover: false
      })
      const action = {
        type: 'NEXT'
      }
      const nextState = reducer(initialState, action)
      expect(nextState).to.equal(fromJS({
        direction: 'UP',
        snake: [37],
        length: 1,
        playing: true,
        gameover: false
      }))
    })
    it('doesn\'t go UP illegally', () => {
      const initialState = Map({
        direction: 'UP',
        snake: List.of(1),
        length: 1,
        playing: true,
        gameover: false
      })
      const action = {
        type: 'NEXT'
      }
      const nextState = reducer(initialState, action)
      expect(nextState).to.equal(fromJS({
        direction: 'UP',
        snake: [1],
        length: 1,
        playing: false,
        gameover: true
      }))
    })
    it('goes DOWN legally', () => {
      const initialState = Map({
        direction: 'DOWN',
        snake: List.of(1),
        length: 1,
        playing: true,
        gameover: false
      })
      const action = {
        type: 'NEXT'
      }
      const nextState = reducer(initialState, action)
      expect(nextState).to.equal(fromJS({
        direction: 'DOWN',
        snake: [31],
        length: 1,
        playing: true,
        gameover: false
      }))
    })
    it('doesn\'t go DOWN illegally', () => {
      const initialState = Map({
        direction: 'DOWN',
        snake: List.of(899),
        length: 1,
        playing: true,
        gameover: false
      })
      const action = {
        type: 'NEXT'
      }
      const nextState = reducer(initialState, action)
      expect(nextState).to.equal(fromJS({
        direction: 'DOWN',
        snake: [899],
        length: 1,
        playing: false,
        gameover: true
      }))
    })

    it('goes LEFT legally', () => {
      const initialState = Map({
        direction: 'LEFT',
        snake: List.of(1),
        length: 1,
        playing: true,
        gameover: false
      })
      const action = {
        type: 'NEXT'
      }
      const nextState = reducer(initialState, action)
      expect(nextState).to.equal(fromJS({
        direction: 'LEFT',
        snake: [0],
        length: 1,
        playing: true,
        gameover: false
      }))
    })
    it('doesn\'t go LEFT illegally',() => {
      const initialState = Map({
        direction: 'LEFT',
        snake: List.of(0),
        length: 1,
        playing: true,
        gameover: false
      })
      const action = {
        type: 'NEXT'
      }
      const nextState = reducer(initialState, action)
      expect(nextState).to.equal(fromJS({
        direction: 'LEFT',
        snake: [0],
        length: 1,
        playing: false,
        gameover: true
      }))
    })

    it('goes RIGHT legally', () => {
      const initialState = Map({
        direction: 'RIGHT',
        snake: List.of(1),
        length: 1,
        playing: true,
        gameover: false
      })
      const action = {
        type: 'NEXT'
      }
      const nextState = reducer(initialState, action)
      expect(nextState).to.equal(fromJS({
        direction: 'RIGHT',
        snake: [2],
        length: 1,
        playing: true,
        gameover: false
      }))
    })
    it('doesn\'t go RIGHT illegally', () => {
      const initialState = Map({
        direction: 'RIGHT',
        snake: List.of(29),
        length: 1,
        playing: true,
        gameover: false
      })
      const action = {
        type: 'NEXT'
      }
      const nextState = reducer(initialState, action)
      expect(nextState).to.equal(fromJS({
        direction: 'RIGHT',
        snake: [29],
        length: 1,
        playing: false,
        gameover: true
      }))
    })

  })
  describe('NEXT snake behavior', () => {
    it('doesn\'t eat itself', () => {
      const initialState = Map({
        direction: 'RIGHT',
        snake: List.of(28, 29),
        length: 2,
        playing: true,
        gameover: false
      })
      const action = {
        type: 'NEXT'
      }
      const nextState = reducer(initialState, action)
      expect(nextState).to.equal(fromJS({
        direction: 'RIGHT',
        snake: [29, 28],
        length: 2,
        playing: false,
        gameover: true
      }))
    })
    it('increases in length after eating', () => {
      const initialState = Map({
        direction: 'RIGHT',
        snake: List.of(1),
        length: 1,
        food: 2,
        playing: true,
        gameover: false
      })
      const action = {
        type: 'NEXT'
      }
      const nextState = reducer(initialState, action)
      expect(nextState.get('length')).to.equal(5)
      expect(nextState.get('snake').indexOf(nextState.get('food'))).to.equal(-1)
    })
  })
  describe('NEXT food behavior', () => {
    it('consumes food', () => {
      const initialState = Map({
        direction: 'RIGHT',
        snake: List.of(1),
        length: 1,
        food: 2,
        playing: true,
        gameover: false
      })
      const action = {
        type: 'NEXT'
      }
      const nextState = reducer(initialState, action)
      expect(nextState.get('length')).to.equal(5)
      expect(nextState.get('snake').indexOf(nextState.get('food'))).to.equal(-1)
      expect(nextState.get('food')).to.not.equal(2)
    })
    it('appears in new place after being consumed', () => {
      const initialState = Map({
        direction: 'RIGHT',
        snake: List.of(1),
        length: 1,
        food: 2,
        playing: true,
        gameover: false
      })
      const action = {
        type: 'NEXT'
      }
      const nextState = reducer(initialState, action)
      expect(nextState.get('food')).to.be.ok
      expect(nextState.get('snake').indexOf(nextState.get('food'))).to.equal(-1)
      expect(nextState.get('food')).to.not.equal(2)
    })
  })
  describe('NEXT score behavior', () => {
    it('increases on food consumption', () => {
      const initialState = Map({
        direction: 'RIGHT',
        snake: List.of(1),
        length: 1,
        food: 2,
        score: 1,
        playing: true,
        gameover: false
      })
      const action = {
        type: 'NEXT'
      }
      const nextState = reducer(initialState, action)
      expect(nextState.get('food')).to.be.ok
      expect(nextState.get('snake').indexOf(nextState.get('food'))).to.equal(-1)
      expect(nextState.get('food')).to.not.equal(2)
      expect(nextState.get('score')).to.equal
    })
  })
})
