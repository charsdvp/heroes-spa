import { Routes, Route, Navigate } from 'react-router-dom'
import { MarvelPage, DcPage, SearchPage, HeroPage } from '../pages'
import { Navbar } from '../../ui'

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      {/* Definimos nuestras rutas de heroes */}
      <div className='container'>
      <Routes>
        <Route path='/marvel' element={<MarvelPage />} />
        <Route path='/dc' element={<DcPage />} />

        <Route path='/search' element={<SearchPage />} />
        {/* ruta dinamica */}
        <Route path='/hero/:id' element={<HeroPage />} />

        {/* Creamos un comodin por si no existe la page */}
        <Route path='/' element={<Navigate to='/marvel' />} />
      </Routes>
      </div>
    </>
  )
}
