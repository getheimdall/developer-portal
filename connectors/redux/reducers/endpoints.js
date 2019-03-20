import { EndpointsConstants } from '../../../constants/action-type'

export default (state = 0, action) => {
    switch (action.type) {
      case EndpointsConstants.INCREMENT_ENDPOINT:
        return state + 1
        case EndpointsConstants.DECREMENT_ENDPOINT:
        return state - 1
      default:
        return state
    }
  }