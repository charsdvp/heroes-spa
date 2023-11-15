import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { SearchPage } from '../../../src/heroes/pages/SearchPage'

const mockedUseNavigate = jest.fn()
// hacemos un mock de toda nuestra libreria con ...jest y solo modificamos la propiedad que necesitamos
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate
}))

describe('Pruebas en <SearchPage>', () => {

  beforeEach(() => jest.clearAllMocks())

  test('Debe de mostrarse correctamente con valores por defecto', () => {
    const { container } = render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    )
    // screen.debug()
    // tomamos un snapshot
    expect( container ).toMatchSnapshot()
  })
  test('Debe de mostrar a Batman y el input con el valor del queryString', () => {
    render(
      <MemoryRouter initialEntries={['/search?q=batman']}>
        <SearchPage />
      </MemoryRouter>
    )
    // nuestro input debe de tener los mismo que en nuestro query
    const input = screen.getByRole('textbox')
    expect(input.value).toBe('batman')
    // se debe de renderizar una imagen que contenga el texto batman
    const img = screen.getByRole('img')
    expect(img.src).toContain('dc-batman.jpg')
    // no se deberia de mostrar nuestro alertDanger
    const alertDanger = screen.getByLabelText('alert-danger')
    expect(alertDanger.style.display).toBe('none')
  })
  test('Debe de mostrar un error si no se encuentra el hero',() => {
    render(
      <MemoryRouter initialEntries={['/search?q=batman123']}>
        <SearchPage />
      </MemoryRouter>
    )
    // se deberia de mostrar nuestro alertDanger
    const alertDanger = screen.getByLabelText('alert-danger')
    expect(alertDanger.style.display).toBe('')
  })
  test('Debe de llamar el navigate a la pantalla nueva', () =>{
    render(
      <MemoryRouter initialEntries={['/search']}>
        <SearchPage />
      </MemoryRouter>
    )
    // el valor que se enviara es superman
    const input = screen.getByRole('textbox')
    fireEvent.change(input, {target: {name: 'searchtext', value: 'superman'}})
    // disparamos el evento del form con el valor de superman
    const form = screen.getByRole('form')
    fireEvent.submit(form)

    expect(mockedUseNavigate).toHaveBeenCalledWith('?q=superman')
  })
})