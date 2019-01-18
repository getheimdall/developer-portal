import { ApiConstants } from '../../../constants/action-type'

const stateDefault = {}

export default (state = stateDefault, action) => {
  switch (action.type) {
    case ApiConstants.RECEIVE_API:
        return { ...state, api: action.api }
    case ApiConstants.RECEIVE_APIS:
        return { ...state, apis: action.apis }
    case ApiConstants.CLEAR_API: 
        return { ...state, api: null }
    case ApiConstants.CLEAR_APIS:
        return { ...state, apis: null }
    default:
      return state
  }
}
