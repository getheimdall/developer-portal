import Router from 'next/router'
import { toast } from 'react-toastify'

import { AuthConstants } from '../../constants/action-type'
import { isLoggedIn, handleLogout, setUserInStorage } from '../../utils/authentication'
import { developerService } from '../../services/developer'

export const login = ({ email, password }) => dispatch => {
  if (!isLoggedIn()) {
    developerService.login(email, password)
      .then(data => {
        setUserInStorage({
          id: data.id,
          email: data.email,
          name: data.name,
        })
        dispatch({ type: AuthConstants.LOGIN })
        toast.success(`Welcome, ${data.name}!`)
        Router.push('/apps')
      })
      .catch(error => {
        toast.error('Invalid username or password')
        dispatch({ type: AuthConstants.LOGOUT})
        throw error
      })
  } else {
    dispatch({ type: AuthConstants.LOGIN })
  }
}

export const logout = () => dispatch => {
  if (isLoggedIn()) {
    handleLogout(() => {
      dispatch({ type: AuthConstants.LOGOUT })
    })
  } else {
    dispatch({ type: AuthConstants.LOGOUT })
  }
}
