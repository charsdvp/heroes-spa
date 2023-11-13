import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../auth'
import { HeroesRoutes } from '../heroes'
import { PrivateRoute } from './PrivateRoute'

// router principal
export const AppRouter = () => {
  return (
    <>
      {/* Definimos nuestras rutas de autenticacion */}
      <Routes>
        <Route path='login' element={<LoginPage />} />
        {/* Creamos una ruta que apuntara a nuestro heroesRoutes */}
        {/* Añadimos nuestras rutdas privadas */ }
        <Route path='/*' element={
          <PrivateRoute>
            <HeroesRoutes />
          </PrivateRoute>
          }/>
    </Routes >
    </>
  )
}
