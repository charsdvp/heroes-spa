import { authReducer } from '../../src/auth/context'
import { types } from '../../src/auth/types/types'


describe('Pruebas en el authReducer', () => {
  test('Debe de retornar el estado por defecto', () => {
    // creamos un estado inicial
    const initialState = {
      logged: false
    }  
    // llamamos nuestro reducer y le pasamos un estado y una accion
    const state = authReducer(initialState, {})
    // esperamos que sea igual al estado por defecto
    expect(state).toEqual({logged: false})
  })
  test('Debe de (login) llamar el login autenticar y establecer el user', () => {
    // creamos un accion y simulamos el payload
    const action = {
      type: types.login,
      payload: {
        id: '123',
        name: 'Juan'
      }
    }
    // llamamos nuestro reducer le pasamos un estado y nuestra accion
    const state = authReducer({ logged: false }, action)
    // este sera nuestro estado que esperamos que cambie
    expect(state).toEqual({
      logged: true,
      user: action.payload
    })
  })
  test('Debe de (loogout) borrar el name del usuario y logged en false', () => {
    // simulamos nuestro state
    const state = {
      logged: true,
      user: { id: '123', user: 'Juan' }
    }
    // creamos nuestra accion
    const action = {
      type: types.logout
    }
    // llamos nuestro reducer
    const newState = authReducer(state, action)
    // esperamos que el estado sea false
    expect(newState).toEqual({ logged: false })
  })
})
