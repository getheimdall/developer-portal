import Router from 'next/router'
import { toast } from 'react-toastify'
import { apiService } from '../../services/api'
import { ApiConstants } from '../../constants/action-type'

const receiveApi = api => ({ type: ApiConstants.RECEIVE_API, api })

const receiveSwagger = swagger => ({ type: ApiConstants.RECEIVE_SWAGGER, swagger })

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


export const getSwaggerApi = () => dispatch => {
  apiService.getApiSwagger(process.env.REACT_PORTAL_API_ID)
      .then(data => {
          dispatch(receiveSwagger(data))
      })
      .catch(error => {
          if (error.response && error.response.status === 400) {
              toast.error(error.response.data.message)
          }
          Router.push('/api-browser')
      })
}

export const clearApi = () => dispatch => {
    dispatch({ type: ApiConstants.CLEAR_API })
}

export const clearSwagger = () => dispatch => {
    dispatch({ type: ApiConstants.CLEAR_SWAGGER })
}