import Router from 'next/router'
import { toast } from 'react-toastify'
import { apiService } from '../../services/api'
import { ApiConstants } from '../../constants/action-type'

const receiveApis = apis => ({
  type: ApiConstants.RECEIVE_APIS,
  apis
})

const receiveApi = api => ({ type: ApiConstants.RECEIVE_API, api })

export const getAllApis = () => dispatch => {
  apiService.getApis()
      .then(data => {
        dispatch(receiveApis(data))
      })
      .catch(error => {
          if (error.response && error.response.status === 400) {
              toast.error(error.response.data.message)
          }
      })
}

export const getApiById = (id) => dispatch => {
  apiService.getApiById(id)
      .then(data => dispatch(receiveApi(data)))
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

export const clearApis = () => dispatch => {
    dispatch({ type: ApiConstants.CLEAR_APIS })
}