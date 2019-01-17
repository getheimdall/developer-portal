import Router from 'next/router'
import { toast } from 'react-toastify'

import { AppConstants } from '../../constants/action-type'
import { appService } from '../../services/app'
import { getCurrentUser } from './../../utils/authentication'

export const saveApp = app => dispatch => {
  appService.save(app)
    .then(data => {
      dispatch({ type: AppConstants.SAVE, app: data })
      toast.success('App saved with success!')
      Router.push('/apps')
    })
    .catch(error => {
      toast.error('Error to save app!')
      throw error
    })
}

export const getAllApps = (query = {offset: 0, limit: 10, 'developer.id': getCurrentUser().id }) => dispatch => {
  const parameters = { params: query }
  appService.getApps(parameters)
      .then(data => {
          dispatch({ type: AppConstants.GET_ALL, apps: data })
      })
}

export const getApp = appId => dispatch => {
  appService.getApp(appId)
      .then(data => dispatch({ type: AppConstants.GET, app: data }))
      .catch(error => {
        console.log(error)
      })
}

export const updateApp = app => dispatch => {
  appService.updateApp(app)
    .then(data => {
      dispatch({ type: AppConstants.UPDATE, app: data})
      toast.success('App updated with success!')
    })
    .catch(error => {
      toast.error('Error to updated app!')
    })
}

export const deleteApp = (id) => dispatch => {
  appService.remove(id)
    .then(res => {
      dispatch({ type: AppConstants.CLEAR_APP })
      toast.success('App removed with success!')
      Router.push('/apps')
      dispatch(getAllApps())
    })
    .catch(error => {
      toast.error('Error to remove this app!')
    })
}

export const clearApp = () => dispatch => {
  dispatch({ type: AppConstants.CLEAR_APP })
}