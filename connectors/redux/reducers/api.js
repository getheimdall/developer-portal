import { ApiConstants } from '../../../constants/action-type'

const stateDefault = {}

export default (state = stateDefault, action) => {
  switch (action.type) {
    case ApiConstants.RECEIVE_API:
        return { ...state, api: action.api }
    case ApiConstants.RECEIVE_SWAGGER:
        return { ...state, swagger: action.swagger }
    case ApiConstants.CLEAR_API: 
        return { ...state, api: null }
    case ApiConstants.CLEAR_SWAGGER:
        return { ...state, swagger: null }
    default:
      return state
  }
}
