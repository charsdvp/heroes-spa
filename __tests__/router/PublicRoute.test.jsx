import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { PublicRoute } from '../../src/router/PublicRoute'
import { AuthContext } from '../../src/auth/context/AuthContext'

describe('Pruebas en <PublicRoute>', () => {
  test('Debe de mostrar el children si no esta autenticado', () => {
    // creamos estado que simulara nuestro contexto
    const authState = {
      logged: false
    }
    // aqui ponemos a prueba nuestro componente de publicRoute si no estamos logueados
    render(
      <AuthContext.Provider value={authState}>
        <PublicRoute>
          <h2>Ruta Publica</h2>
        </PublicRoute>
      </AuthContext.Provider>
    )
    // esperamos que renderice el children
    expect(screen.getByText('Ruta Publica')).toBeTruthy()
  })
  test('Debe de navegar si esta autenticado', () => {
    // creamos un estado que simulara nuestro contexto
    const authState = {
      logged: true,
      user: {
        name: 'Strider',
        id: 'avc'
      }
    }
    // si estamos logueado nos debera de mandar a marvels
    render(
      <AuthContext.Provider value={authState}>
        <MemoryRouter initialEntries={['/login']}>
          <Routes>
            <Route path='login' element={
              <PublicRoute>
                <h2>Ruta Publica</h2>
              </PublicRoute>
            } />
            <Route path='marvel' element={<h1>Pagina marvel</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    )
    // esperamos que se renderice algo de marvels
    expect( screen.getByText('Pagina marvel')).toBeTruthy()    
  })
})