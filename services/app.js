import { HTTPv1 } from '../utils/http'
import { getCurrentUser } from '../utils/authentication'
import { toast } from 'react-toastify'

const save = app => {
  const appToSave = {
    name: app.name,
    description: app.description,
    clientId: '',
    developer: {
      id: getCurrentUser().id,
    },
    status: 'ACTIVE',
    plans: [],
    tags: [],
  }
  return HTTPv1.post('/apps', JSON.stringify(appToSave))
    .then(res => {
      const accessToken = {
        app: {
          id: parseInt(res.headers.location.replace('/apps/', '')),
        },
        code: '',
        plans: [],
        status: 'ACTIVE',
      }
      return HTTPv1.post('/access_tokens', JSON.stringify(accessToken))
        .then(resAccessToken => {
          const data = res.data
          const appResult = {
            id: data,
            name: data.name,
            description: data.description,
            accessToken: resAccessToken.data.code,
          }
          return Promise.resolve(appResult)
        })
        .catch(error => {
          console.log('Error: ', error)
          if (error.response && error.response.status === 404) {
            return null
          }
          throw error
        })
    })
    .catch(error => {
      console.log('Error: ', error)
      if (error.response && error.response.status === 404) {
        return null
      }
      throw error
    })
}

const updateApp = (app) => {
  return HTTPv1.put('/apps/' + app.id, JSON.stringify(app))
      .then(res => Promise.resolve(res.data))
      .catch(error => {
          console.log('Error: ', error)
          if (error.response && error.response.status === 404) {
              return null;
          }
          throw error;
      })
}

const remove = (appId) => {
  return HTTPv1.delete('/apps/' + appId)
      .catch(error => {
          console.log('Error: ', error)
          if (error.response && error.response.status === 404) {
              return null;
          }
          throw error;
      })
}

const getApps = (params = { params: {} }) => HTTPv1.get('/apps', params)
  .then(res => Promise.resolve(res.data))
  .catch(error => {
    console.log('Error: ', error)
    if (error.response && error.response.status === 404) {
      return null
    }
    throw error
  })

const getApp = appId => {
  if (isNaN(appId)) {
    return Promise.reject(new Error('Invalid parameter'))
  }

  return HTTPv1.get(`/apps/${appId}`)
    .then(res => Promise.resolve(res.data))
    .catch(error => {
      console.log('Error: ', error)
      if (error.response && error.response.status === 404) {
        toast.warn('App not exist!')
        return null
      }
      throw error
    })
}

export const appService = {
  save, getApps, getApp, updateApp, remove
}
