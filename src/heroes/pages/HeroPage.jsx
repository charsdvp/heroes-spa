import { useParams, Navigate } from 'react-router-dom'
import { getHeroById } from '../helpers'
export const HeroPage = () => {
  // useParams es un React Router Hook que le permite acceder a parámetros dinámicos en la URL. useParams devuelve un objeto de pares clave
  const { id } = useParams()
  const hero = getHeroById(id)
  // console.log(hero)
  // redireccionamos a otra pagina si no tenemos un heroe
  if (!hero) {
    return <Navigate to='/'/>
  }

  return (
    <h1>HeroPage</h1>
  )
}
