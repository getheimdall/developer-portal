import { HTTPv1 } from '../utils/http'

const save = developer => HTTPv1.post('/developers', JSON.stringify(developer))
  .then(res => Promise.resolve(res.data))
  .catch(error => {
    console.log('Error: ', error)
    if (error.response && error.response.status === 404) {
      return null
    }
    throw error
  })

const login = (email, password) => {
  const developerLogin = {
    email,
    password,
  }

  return HTTPv1.post('/developers/login', developerLogin)
    .then(res => Promise.resolve(res.data))
    .catch(error => {
      console.log('Error: ', error)
      throw error
    })
}

export const developerService = {
  login, save,
}
