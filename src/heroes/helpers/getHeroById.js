import { heroes } from '../data/heroes'
// si existe regresa el hero, si no, regresa undefined
export const getHeroById = (id) => {
  return heroes.find(hero => hero.id === id)
}
