import React from 'react';

const Search = ({handleInputChange, handleSubmit, searchTerm}) => {
  return (
    <div id="search">
    <form onSubmit={handleSubmit}>
       <input
         type="text"
         placeholder="Search for an Actor"
         onChange={handleInputChange}
         value={searchTerm}
       />
       <input
         type="submit"
         value="Search"
       />
    </form>
    </div>
  )
}

export default Search;
