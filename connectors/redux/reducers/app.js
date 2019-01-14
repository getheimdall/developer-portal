import { AppConstants } from '../../../constants/action-type'

const stateDefault = {}

export default (state = stateDefault, action) => {
  switch (action.type) {
    case AppConstants.SAVE:
      return { ...state, app: action.app }
    case AppConstants.GET_ALL:
      return { ...state, apps: action.apps }
    case AppConstants.GET:
      return { ...state, app: action.app }
    case AppConstants.CLEAR_APP: 
      return { ...state, app: null }
    case AppConstants.UPDATE: 
      return { ...state, app: action.app }
    default:
      return state
  }
}
