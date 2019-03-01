import axios from 'axios'

const baseURL = `${process.env.REACT_APP_SCHEME}://${process.env.REACT_APP_ADDRESS}:${process.env.REACT_APP_PORT}`

const HTTP = axios.create({
  baseURL,
})

const HTTPv1 = axios.create({
  baseURL: baseURL + process.env.REACT_APP_API,
  headers: { 'Content-Type': 'application/json' },
})

const getAuthentication = () => {
  const accountCredentials = {
    username: process.env.REACT_PORTAL_USERNAME,
    password: process.env.REACT_PORTAL_PASSWORD,
  }

  return HTTP.post('/v1/api/login', accountCredentials)
    .then(res => {
      const token = res.headers.authorization
      localStorage.setItem('token', token)
      return Promise.resolve(token)
    })
    .catch(error => {
      console.log('Error: ', error)
    })
}

const existApiAndPlanDefault = async () => {
  const apiId = process.env.REACT_PORTAL_API_ID
  const planDefaultId = process.env.REACT_PORTAL_PLAN_DEFAULT_ID

  return await HTTPv1.get(`/apis/${apiId}`)
    .then(res => {
      return HTTPv1.get(`/plans/${planDefaultId}`)
        .then(res => { 
          return Promise.resolve(res)
        })
        .catch(error => {
          throw error
        })
    })
    .catch(error => Promise.reject(error))
}

const existToken = () => !!localStorage.getItem('token')

HTTPv1.interceptors.request.use(req => {
  if (localStorage.getItem('token')) {
    const token = localStorage.getItem('token')
    req.headers.Authorization = `Bearer ${token}`
  }
  return req
}, error => Promise.reject(error))

HTTPv1.interceptors.response.use(res => {
  const token = res.headers.authorization
  localStorage.setItem('token', token)
  return res
}, error => {
  const response = error.response
  if (response && (response.status === 401 || response.status === 403 || response.data.message === 'Token expired')) {
    localStorage.clear()
    getAuthentication().then(token => {
      error.config.headers.Authorization = `Bearer ${token}`
      return axios.request(error.config)
    })
  }

  return Promise.reject(error)
})

const auth = {
  getAuthentication,
  existToken,
  existApiAndPlanDefault
}

export { HTTP, HTTPv1, auth }
