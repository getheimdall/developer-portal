import { toast } from 'react-toastify'
import { apiService } from '../../services/api'
import { ApiConstants } from '../../constants/action-type'

const receiveApi = api => ({ type: ApiConstants.RECEIVE_API, api })

export const getApi = () => dispatch => {
    apiService.getApiById(process.env.REACT_PORTAL_API_ID)
        .then(data => {
            dispatch(receiveApi(data))
        })
        .catch(error => {
            if (error.response && error.response.status === 400) {
                toast.error(error.response.data.message)
            }
        })
}

export const clearApi = () => dispatch => {
    dispatch({ type: ApiConstants.CLEAR_API })
}

export const getDescriptionResources = () => dispatch => {
    apiService.getDescriptionResources().then(result => {
        dispatch({ type: ApiConstants.GET_DESCRIPTION_RESOURCES, descriptions: result })
    })
}