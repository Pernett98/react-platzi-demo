import React from 'react';
import './search.css';

function Search(props) {
  return (
    <form className="Search">
      <input type="text"
        placeholder="Search your favorite video"
        className="Search-input"></input>
    </form>
  )
}

export default Search;