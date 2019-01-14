import { AuthConstants } from '../../../constants/action-type'
import { isLoggedIn } from '../../../utils/authentication'

const initialState = {
  logged: isLoggedIn(),
}

export default (state = initialState, action) => {
  switch (action.type) {
    case AuthConstants.LOGIN:
      return { ...state, logged: true }
    case AuthConstants.LOGOUT:
      return { ...state, logged: false }
    default:
      return state
  }
}
