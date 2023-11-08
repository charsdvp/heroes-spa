import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../auth'
import { HeroesRoutes } from '../heroes'

// router principal
export const AppRouter = () => {
  return (
    <>
        {/* Definimos nuestras rutas de autenticacion */}
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          {/* Creamos una ruta que apuntara a nuestro heroesRoutes */}
          <Route path='/*' element={<HeroesRoutes />}/>
        </Routes>
    </>
  )
}
