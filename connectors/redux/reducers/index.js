import { combineReducers } from 'redux'

import auth from './auth'
import developer from './developer'
import app from './app'
import api from './api'

const reducer = combineReducers({
  auth, developer, app, api,
})

export default reducer
