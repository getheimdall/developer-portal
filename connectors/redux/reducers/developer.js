import { DeveloperConstants } from '../../../constants/action-type'

export default (state = {}, action) => {
  switch (action.type) {
    case DeveloperConstants.SAVE:
      return { ...state, developer: action.developer }
    default:
      return state
  }
}
