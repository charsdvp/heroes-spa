import { heroes } from '../data/heroes'
// creamos una funcion para obtener los heroes por cada compania
export const getHeroesByPublihsher = (publisher) => {
  // tendremos solo 2
  const validPublishers = ['Marvel Comics', 'DC Comics']
  // validamos si nuestro array incluye lo que le pasamos por parametro
  if (!validPublishers.includes(publisher)) {
    throw new Error(`${publisher} is not a valid publisher`)
  }
  // devolvemos un nuevo array con los valores filtrados
  return heroes.filter(heroe => heroe.publisher === publisher)
}
