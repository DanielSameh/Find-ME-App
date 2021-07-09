import { useContext } from 'react'
import jwtDecode from 'jwt-decode'

import AuthContext from './context'
import authstorage from './storage'

export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext)

  const logOut = () => {
    setUser(null)
    authstorage.removeToken()
  }

  const login = authToken => {
    var user = null
    user = jwtDecode(authToken)
    setUser(user)
    authstorage.storeToken(authToken)
  }

  return { user, logOut, login }
}
