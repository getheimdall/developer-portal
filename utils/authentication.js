const isBrowser = typeof window !== 'undefined'

const getUser = () => 
  window.localStorage.user
    ? JSON.parse(window.localStorage.user)
    : {}

export const setUserInStorage = user => { window.localStorage.user = JSON.stringify(user) }

export const isLoggedIn = () => {
  if (!isBrowser) return false

  const user = getUser()

  return !!user.email
}

export const getCurrentUser = () => isBrowser && getUser()

export const handleLogout = callback => {
  if (!isBrowser) return

  setUserInStorage({})
  callback()
}
