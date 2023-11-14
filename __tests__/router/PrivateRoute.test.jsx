import { render,screen } from '@testing-library/react'
import { AuthContext } from '../../src/auth/context/AuthContext'
import { PrivateRoute } from '../../src/router/PrivateRoute'
import { MemoryRouter } from 'react-router-dom'

describe('Pruebas en el <PrivateRoute>', () => {
  test('Debe de mostrar el children si esta autenticado', () => {
    // aqui simulamos que guardanos en el localstorage
    Storage.prototype.setItem = jest.fn()
        // creamos estado que simulara nuestro contexto
        const authState = {
          logged: true,
          user: {
            name: 'Carlos',
            id: '123'
          }
        }
        // aqui ponemos a prueba nuestro componente de publicRoute si no estamos logueados
        render(
          <AuthContext.Provider value={authState}>
            <MemoryRouter>
              <PrivateRoute>
                <h2>Ruta Privada</h2>
              </PrivateRoute>
            </MemoryRouter>
          </AuthContext.Provider>
        )
        // esperamos que renderice el children
        expect(screen.getByText('Ruta Privada')).toBeTruthy()
        // esperamos que el localStorage sea llamado
        expect(localStorage.setItem).toHaveBeenCalled()
  })
})