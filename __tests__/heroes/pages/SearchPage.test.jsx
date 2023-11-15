import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { SearchPage } from '../../../src/heroes/pages/SearchPage'

describe('Pruebas en <SearchPage>', () => {
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
})