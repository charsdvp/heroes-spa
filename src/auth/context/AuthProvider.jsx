import PropTypes from 'prop-types'
import { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'

export const AuthProvider = ({ children }) => {
  const initialState = {
    logged: false
  }
  // usamos nuestro reducer
  const [authState, dispatch] = useReducer(authReducer, initialState)
  return (
    <AuthContext.Provider value={{}}>
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.any
}
