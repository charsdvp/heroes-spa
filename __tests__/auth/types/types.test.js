import { types } from '../../../src/auth/types/types'

describe('Pruebas en "Types.js', () => {
  test('Debe de regresar estos types', () => {
    // aqui nos aseguramos que los valores no cambien 
    expect(types).toEqual({
      login: '[Auth Login]',
      logout: '[Auth Logout]'
    }
    )
  })
})