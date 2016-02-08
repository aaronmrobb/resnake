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
  describe('NEXT movement behavior', () => {
    it('goes UP legally', () => {
      const initialState = Map({
        direction: 'UP',
        snake: List.of(67),
        playing: true,
        gameover: false
      })
      const action = {
        type: 'NEXT'
      }
      const nextState = reducer(initialState, action)
      expect(nextState).to.equal(fromJS({
        direction: 'UP',
        snake: List.of(37),
        playing: true,
        gameover: false
      }))
    })
    it('doesn\'t go UP illegally', () => {
      const initialState = Map({
        direction: 'UP',
        snake: List.of(1),
        playing: true,
        gameover: false
      })
      const action = {
        type: 'NEXT'
      }
      const nextState = reducer(initialState, action)
      expect(nextState).to.equal(fromJS({
        direction: 'UP',
        snake: List.of(1),
        playing: false,
        gameover: true
      }))
    })
    it('goes DOWN legally')
    it('doesn\'t go DOWN illegally')

    it('goes LEFT legally')
    it('doesn\'t go LEFT illegally')

    it('goes RIGHT legally')
    it('doesn\'t go RIGHT illegally')

  })
  describe('NEXT snake behavior', () => {
    it('doesn\'t eat itself')
    it('increases in length after eating')
  })
  describe('NEXT food behavior', () => {
    it('consumes food')
    it('appears in new place after being consumed')
  })
  describe('NEXT score behavior', () => {
    it('increases on food consumption')
    it('increases with multiplier of snake length')
  })
})
