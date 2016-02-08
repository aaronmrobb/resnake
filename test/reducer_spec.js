import { expect } from 'chai'
import { List, Map, fromJS } from 'immutable'

import reducer from '../src/reducer.js'

describe('reducers', () => {
  describe('interaction reducers', () => {
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
    it('handles CHANGE_DIRECTION', () => {
      const initialState = Map({
        direction: 'UP'
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
  describe('main reducer NEXT', () => {
    it('handles NEXT', () => {
      const initialState = Map({
        direction: 'UP',
        snake: List.of(0, 1)
      })
      const action = {
        type: 'NEXT'
      }
      const nextState = reducer(initialState, action)
      expect(nextState).to.equal(fromJS({
        direction: 'UP',
        snake: List.of(0, 1)
      }))
    })
  })
})
