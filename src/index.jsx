import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Router, { Route } from 'react-router'
import {App} from './components/App.jsx'


ReactDOM.render(
  <App /> ,
  document.findElementById('app')
)
