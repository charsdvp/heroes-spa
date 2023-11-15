const { render, screen, fireEvent } = require('@testing-library/react')
const { AuthContext } = require('../../../src/auth/context/AuthContext')
const { Navbar } = require('../../../src/ui/components/Navbar')
const { MemoryRouter, useNavigate } = require('react-router-dom')

const mockedUseNavigate = jest.fn()

// hacemos un mock de toda nuestra libreria con ...jest y solo modificamos la propiedad que necesitamos
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate
}))

describe('Pruebas en <Navbar >', () => {
// creamos nuestro contextValue que sera lo que mostraremos
  const contextValue = {
    logged: true,
    user: {
      name: 'Carlos'
    },
    logout: jest.fn()
  }
  // limpiamos nuestros mocks
  beforeEach(() => jest.clearAllMocks())

  test('Debe de mostrar el nombre del usuario', () => {
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    )
    // esperamos que se muestre nombre en el navbar
    expect(screen.getByText('Carlos')).toBeTruthy()
    // screen.debug()
  })
  test('Debe de llamar el logout y navigate cuando se hace click en el boton', () => {
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    )
    // capturamos nuestro boton y disparamos un evento click
    const logoutBtn = screen.getByRole('button')
    fireEvent.click(logoutBtn)
    // esperamos que nuestra funcion logout sea llamada
    expect(contextValue.logout).toHaveBeenCalled()
    // esperamos que nuestro mock sea llamado con los siguientes datos
    expect(mockedUseNavigate).toHaveBeenCalledWith('/login', {"replace": true})
  })
})