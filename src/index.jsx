import React from 'react';
import ReactDOM from 'react-dom'
import { Router, hashHistory } from 'react-router'

import routes from './Routes'
import GuestStore from './stores/GuestStore'

const initialState = window.initialState || {
  guests:[]
}
var store = GuestStore.fromJS(initialState.guests)


ReactDOM.render((
  <Router history={hashHistory} routes={routes(store)}>
  </Router>
), document.querySelector("#root"))
