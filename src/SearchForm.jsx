import React from 'react'
import { useGlobalContext } from './context'

const SearchForm = () => {
  const {setSearch} = useGlobalContext()
  const handleSubmit = (e) => {
    e.preventDefault()
    const searchVal = e.target.elements.search.value
    if (!searchVal) return;
    setSearch(searchVal)

  }
  return (
    <section>
      <h1 className='title'>Get Images</h1>
      <form className='search-form' onSubmit={handleSubmit}>
        <input type="text" className='form-input search-input' name='search' placeholder='tree'/>
        <button type='submit' className='btn'>Browse</button>
      </form>
    </section>
  )
}

export default SearchForm
