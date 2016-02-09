import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Router, { Route } from 'react-router'
import { AppContainer } from './components/App.jsx'
import reducer from './reducer.js'

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider> ,
  document.getElementById('app')
)
