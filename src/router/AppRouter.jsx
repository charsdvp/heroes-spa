import { Navigate, Route, Routes } from 'react-router-dom'
import { MarvelPage } from '../heroes/pages/MarvelPage'
import { DcPage } from '../heroes/pages/DcPage'
import { LoginPage } from '../auth/pages/LoginPage'

// router principal
export const AppRouter = () => {
  return (
    <>
      {/* Definimos nuestras rutas */}
      <Routes>
        <Route path='marvel' element={<MarvelPage />} />
        <Route path='dc' element={<DcPage />} />

        <Route path='login' element={<LoginPage />} />
        {/* Creamos un comodin por si no existe la page */}
        <Route path='/' element={<Navigate to='/marvel' />} />
      </Routes>
    </>
  )
}
