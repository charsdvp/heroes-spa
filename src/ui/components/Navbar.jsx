import { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/context/AuthContext'

export const Navbar = () => {
  // traemos nuestro contexto para poder agregar el nombre del usuario en el navbar
  const { logout, user } = useContext(AuthContext)
  // customHook de react-router
  const navigate = useNavigate()
  const onLogout = () => {
    logout()
    navigate('/login', {
      replace: true
    })
  }
  return (
    <nav className='p-2 navbar navbar-expand-sm navbar-dark bg-dark'>
      <Link
        className='navbar-brand'
        to='/'>
        Asociaciones
      </Link>
      <div className='navbar-collapse'>
        <div className='navbar-nav'>
          <NavLink
            className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
            to='/marvel'>
            Marvel
          </NavLink>
          <NavLink
            className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
            to='/dc'>
            DC
          </NavLink>
          <NavLink
            className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
            to='/search'>
            Search
          </NavLink>
        </div>
      </div>
      <div className='navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end'>
        <ul className='navbar-nav ml-auto'>
          <span className='nav-item nav-link text-info'>{user?.name}</span>
          <button
            className='nav-item nav-link btn'
            onClick={onLogout}>Logout</button>
        </ul>
      </div>
    </nav>
  )
}
