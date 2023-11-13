import PropTypes from 'prop-types'
import { useReducer } from 'react'
import { AuthContext, authReducer } from './index'
import { types } from '../types/types'

export const AuthProvider = ({ children }) => {
  const initialState = {
    logged: false
  }
  // usamos nuestro reducer
  const [authState, dispatch] = useReducer(authReducer, initialState)

  const login = (name = '') => {
    const action = {
      type: types.login,
      payload: {
        id: 'ABC',
        name
      }
    }
    // ejecutamos nuestra accion
    dispatch(action)
  }
  return (
    <AuthContext.Provider value={{ authState, login }}>
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.any
}
