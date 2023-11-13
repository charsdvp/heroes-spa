import PropTypes from 'prop-types'
import { useReducer } from 'react'
import { AuthContext, authReducer } from './index'
import { types } from '../types/types'

export const AuthProvider = ({ children }) => {
  const initialState = {
    logged: false
  }
  const init = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    return {
      // null
      logged: !!user,
      user
    }
  }
  // usamos nuestro reducer
  const [authState, dispatch] = useReducer(authReducer, initialState, init)

  const login = (name = '') => {
    const user = {
      id: 'ABC',
      name
    }
    const action = {
      type: types.login,
      payload: user
    }
    // agregamos a nuestro storage nuestro usuario
    localStorage.setItem('user', JSON.stringify(user))
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
