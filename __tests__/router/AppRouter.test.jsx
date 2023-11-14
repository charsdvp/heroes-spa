import { render, screen } from '@testing-library/react'
import { AuthContext } from '../../src/auth/context/AuthContext'
import { MemoryRouter } from 'react-router-dom'
import { AppRouter } from '../../src/router/AppRouter'

describe('Pruebas en el <AppRouter>', () => {
  test('Debe de mostrar el login si no esta autenticado', () => {
    const contextValue = {
      logged: false
    }
    render(
      <MemoryRouter initialEntries={['/marvel']}>
        <AuthContext.Provider value={contextValue}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    )
    expect(screen.getAllByText('Login').length).toBe(2)
    // screen.debug()
  })
  test('Debe de mostrar el componente Marvel si esta autenticado', () => {
    const contextValue = {
      logged: true,
      user: {
        id: 'asd',
        name: 'Carlos'
      }
    }
    render(
      <MemoryRouter initialEntries={['/login']}>
        <AuthContext.Provider value={contextValue}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    )
    // Si cuando se renderiza algo viene la palabra marvel por lo menos una vez
    expect(screen.getAllByText('Marvel').length).toBeGreaterThanOrEqual(1)
  })
})