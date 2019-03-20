import { combineReducers } from 'redux'

import auth from './auth'
import developer from './developer'
import app from './app'
import api from './api'
import endpoints from './endpoints'

const reducer = combineReducers({
  auth, developer, app, api, endpoints,
})

export default reducer
