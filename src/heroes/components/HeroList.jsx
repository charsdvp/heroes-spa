import PropTypes from 'prop-types'
import { getHeroesByPublihsher } from '../helpers'
import { HeroCard } from './HeroCard'

export const HeroList = ({ publisher }) => {
  // obtenemos los heroes
  const heroes = getHeroesByPublihsher(publisher)
  return (
    <div className='row rows-cols-1 row-cols-md-3 g-3'>
      {
        heroes.map(hero => (
          <HeroCard
          key={hero.id}
          {...hero} />
        ))
      }
    </div>
  )
}
HeroList.propTypes = {
  publisher: PropTypes.string.isRequired
}
