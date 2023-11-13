import { types } from '../types/types'

const initialState = {
  logged: false
}
// creamos un reducer que tiene un estado inicial y una accion
export const authReducer = (state = initialState, action) => {
  // dependiendo de nuestro tipo de accion se ejecutara cierta funcionalidad
  switch (action.type) {
    // login: cambiamos nuestro estado a logged: false y nuestro objeto action tomamos el nombre
    case types.login:
      return {
        ...state,
        logged: true,
        user: action.payload
      }
    case types.logout:
      return {
        logged: false
      }
    default:
      return state
  }
}
