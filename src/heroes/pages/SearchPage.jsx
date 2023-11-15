import { useLocation, useNavigate } from 'react-router-dom'
import { useForm } from '../hooks/useForm'
import queryString from 'query-string'
import { getHeroesByName } from '../helpers'
import { HeroCard } from '../components/HeroCard'

export const SearchPage = () => {
  const navigate = useNavigate()
  // para manejar los query params
  const location = useLocation() // nos dara nuestra localizacion y nuestros params
  // procesamos nuestros querys
  const { q = '' } = queryString.parse(location.search)
  // obtenemos los heroes filtrados por el query - name
  const heroes = getHeroesByName(q)

  const showSearch = q.length === 0
  const showError = !showSearch && heroes.length === 0

  // reutilizamos nuestro hook useform para controlar el form
  const { searchtext, onInputChange } = useForm({
    searchtext: q
  })
  // cuando enviamos nuestros valores del form
  const onSearchSubmit = (event) => {
    event.preventDefault()
    // limpiamos el texto
    // if (searchtext.trim().length <= 1) return
    // navegamos hacia -> searchtext
    navigate(`?q=${searchtext.toLowerCase().trim()}`)
  }
  return (
    <>
      <h1>SearchPage</h1>
      <div className="row">
        <div className='col-5'>
          <h4>Searching...</h4>
          <form onSubmit={ onSearchSubmit }>
            <input type='text'
              placeholder='Search a hero'
              className='form-control'
              name='searchtext'
              autoComplete='off'
              value={searchtext}
              onChange={onInputChange} />
            <button className='btn btn-outline-primary mt-1'>Search</button>
          </form>
        </div>
        <div className='col-7'>
          <h4>Results</h4>
          <div className='alert alert-primary' style={{ display: showSearch ? '' : 'none' }}>
            Search a hero
          </div>
          <div aria-label='alert-danger' className='alert alert-danger' style={{ display: showError ? '' : 'none' }}>
            No hero with <b>{q}</b>
          </div>
          {
            heroes.map(hero => (
              <HeroCard key={hero.id} {...hero}/>
            ))
          }
        </div>
      </div>
    </>
  )
}
