import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { getHeroById } from '../helpers'
import { useMemo } from 'react'
export const HeroPage = () => {
  // useParams es un React Router Hook que le permite acceder a parámetros dinámicos en la URL. useParams devuelve un objeto de pares clave
  const { id } = useParams()
  const navigate = useNavigate()
  // podemos memorizar la funcion si sabemos que no cambiara
  const hero = useMemo(() => getHeroById(id), [id])
  // console.log(hero)
  const onNavigateBack = () => {
    // nos permite navegar entre el historial
    navigate(-1)
  }
  // redireccionamos a otra pagina si no tenemos un heroe
  if (!hero) {
    return <Navigate to='/'/>
  }

  return (
    <div className='row mt-5'>
      <div className='col-4'>
        <img src={`/assets/heroes/${id}.jpg`} alt={hero.superhero} className='img-thumbnail' />
      </div>
      <div className='col-8'>
        <h3>{hero.superhero}</h3>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'><b>Alter ego:</b> {hero.alter_ego}</li>
          <li className='list-group-item'><b>Publisher:</b> {hero.publisher}</li>
          <li className='list-group-item'><b>First appearance:</b> {hero.first_appearance}</li>
        </ul>
        <h5 className='mt-3'>Characters</h5>
        <p>{hero.characters}</p>
        <button
        className='btn btn-outline-primary'
        onClick={onNavigateBack}>Regresar</button>
      </div>
    </div>
  )
}
