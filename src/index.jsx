import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Router, { Route } from 'react-router'
import { App } from './components/App.jsx'
import reducer from './reducer.js'

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider> ,
  document.getElementById('app')
)
