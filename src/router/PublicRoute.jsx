import PropTypes from 'prop-types'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../auth/context/AuthContext'

export const PublicRoute = ({ children }) => {
  // traemos nuestro contexto para saber si estamos logueados
  const { logged } = useContext(AuthContext)
  // renderizamos nuestros componentes o regresamos a login
  return (
    !logged
      ? children
      : <Navigate to='/marvel' />
  )
}

PublicRoute.propTypes = {
  children: PropTypes.any
}
