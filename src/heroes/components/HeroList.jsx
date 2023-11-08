import PropTypes from 'prop-types'
import { getHeroesByPublihsher } from '../helpers'

export const HeroList = ({ publisher }) => {
  const heroes = getHeroesByPublihsher(publisher)
  console.log(heroes)
  return (
    <>
      <h1>heroes</h1>
      <ul>
      {
        heroes.map(hero => (
          <li key={hero.id}>{hero.superhero}</li>
        ))
      }
      </ul>
    </>
  )
}
HeroList.propTypes = {
  publisher: PropTypes.string.isRequired
}
