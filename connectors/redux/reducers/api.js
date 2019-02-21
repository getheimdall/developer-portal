import { ApiConstants } from '../../../constants/action-type'

const stateDefault = {}

export default (state = stateDefault, action) => {
  switch (action.type) {
    case ApiConstants.RECEIVE_API:
        return { ...state, api: action.api }
    case ApiConstants.CLEAR_API: 
        return { ...state, api: null }
    case ApiConstants.GET_DESCRIPTION_RESOURCES:
        return { ...state, descriptions: action.descriptions }
    default:
      return state
  }
}
