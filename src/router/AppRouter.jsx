import { Navigate, Route, Routes } from 'react-router-dom'
import { MarvelPage, DcPage } from '../heroes'
import { LoginPage } from '../auth'
import { Navbar } from '../ui'

// router principal
export const AppRouter = () => {
  return (
    <>
        {/* Definimos nuestras rutas */}
      <Navbar />
        <Routes>
          <Route path='/marvel' element={<MarvelPage />} />
          <Route path='/dc' element={<DcPage />} />

          <Route path='/login' element={<LoginPage />} />
          {/* Creamos un comodin por si no existe la page */}
          <Route path='/' element={<Navigate to='/marvel' />} />
        </Routes>
    </>
  )
}
