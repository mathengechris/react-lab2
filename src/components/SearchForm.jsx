import React, { useEffect, useState } from 'react'

const Searchform = ({searchTerm, setSearchTerm}) => {
   
  function handleSearch(e){
    e.preventDefault()

   
  }
  return (
    <>
     <div className='search-container'>
      <form onSubmit={handleSearch} className="search-form">
        <input
        type="text"
        placeholder="Search Projects"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="searchInput"
      />

      <button type='submit' className='search-container'>
            search
        </button>
      </form>
    </div>
    </>
  )
}

export default Searchform