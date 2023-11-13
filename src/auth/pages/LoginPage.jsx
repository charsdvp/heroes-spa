import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export const LoginPage = () => {
  // traemos nuestro contexto
  const { login } = useContext(AuthContext)
  const navigate = useNavigate()

  const onLogin = () => {
    // llamamos nuestra funcion y recibe un nombre -> name
    login('Carlos Sanchez')
    // nos trasladamos a la pagina principal
    navigate('/', {
      replace: true
    })
  }
  return (
    <div className='container mt-5'>
      <h1>Login</h1>
      <button
      className='btn btn-primary'
      onClick={onLogin}>Login</button>
    </div>
  )
}
