import PropTypes from 'prop-types'
import { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../auth/context/AuthContext'

export const PrivateRoute = ({ children }) => {
  // traemos nuestro contexto para saber si estamos logueados
  const { authState } = useContext(AuthContext)
  // !logged
  const { pathname, search } = useLocation()
  const lasthPath = pathname + search
  localStorage.setItem('lasthPath', lasthPath)
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
