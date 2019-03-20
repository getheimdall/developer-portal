import { EndpointsConstants } from '../../constants/action-type'

export const incrementEndpoint = () => dispatch => {
    dispatch({ type: EndpointsConstants.INCREMENT_ENDPOINT })
}

export const decrementEndpoint = () => dispatch => {
    dispatch({ type: EndpointsConstants.DECREMENT_ENDPOINT })
}