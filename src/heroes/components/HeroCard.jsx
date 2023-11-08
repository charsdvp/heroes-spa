/* eslint-disable camelcase */
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
// creamos un componente donde validamos si el alterEgo es igual a los personajes renderizamos un fragment que es igual a nada
// de otro modo renderizamos los personajes
const CharactersByHero = ({ alter_ego, characters }) => {
  if (alter_ego === characters) return (<></>)
  return <p>{characters}</p>
}
export const HeroCard = ({ id, superhero, publisher, alter_ego, first_appearance, characters }) => {
  // creamos una ruta para las imagenes
  const heroImageUrl = `/assets/heroes/${id}.jpg`
  return (
    <div className='col animate__animated animate__fadeIn'>
      <div className='card'>
        <div className='row no-gutters'>
          <div className='col-4'>
            <img src={heroImageUrl} alt={superhero} className='card-img'/>
          </div>
          <div className='col-8'>
            <div className='card-body'>
              <h5 className='card-title'>
                {superhero}
              </h5>
              <p className='card-text'>
                {alter_ego}
              </p>
              <CharactersByHero alter_ego={alter_ego} characters={characters}/>
              <p className='card-text'>
                <small className='text-muted'>{first_appearance}</small>
              </p>
              <Link to={`/hero/${id}`} >Mas..</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
HeroCard.propTypes = {
  id: PropTypes.string,
  superhero: PropTypes.string,
  publisher: PropTypes.string,
  alter_ego: PropTypes.string,
  first_appearance: PropTypes.string,
  character: PropTypes.string,
  characters: PropTypes.string
}
CharactersByHero.propTypes = {
  alter_ego: PropTypes.string,
  characters: PropTypes.string
}
