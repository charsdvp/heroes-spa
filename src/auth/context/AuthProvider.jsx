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

  const logout = () => {
    // removemos nuestra key
    localStorage.removeItem('user')
    // asignamos el tipo de accion
    const action = { type: types.logout }
    // disparamos la accion
    dispatch(action)
  }
  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.any
}
