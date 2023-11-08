export const SearchPage = () => {
  return (
    <>
      <h1>SearchPage</h1>
      <div className="row">
        <div className='col-5'>
          <h4>Searching...</h4>
          <form>
            <input type='text'
              placeholder='Search a hero'
              className='form-control'
              name='searchtext'
              autoComplete='off' />
            <button className='btn btn-outline-primary mt-1'>Search</button>
          </form>
        </div>
        <div className='col-7'>
          <h4>Results</h4>
          <div className='alert alert-primary'>
            Search a hero
          </div>
          <div className='alert alert-danger'>
            Theres no results
          </div>
        </div>
      </div>
    </>
  )
}
