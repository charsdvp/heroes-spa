import PropTypes from 'prop-types'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../auth/context/AuthContext'

export const PrivateRoute = ({ children }) => {
  // traemos nuestro contexto para saber si estamos logueados
  const { authState } = useContext(AuthContext)
  // renderizamos nuestros componentes o regresamos a login
  return (
    authState.logged
      ? children
      : <Navigate to='/login' />
  )
}

PrivateRoute.propTypes = {
  children: PropTypes.any
}
