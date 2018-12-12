import React from 'react';
import './search.css';
import PropTypes from 'prop-types';

function Search(props) {
  return (
    <form className="Search"
          onSubmit={props.handleSubmit}>
      <input 
        ref={props.setRef}
        type="text"
        name="search"
        placeholder="Search your favorite video"
        className="Search-input"
        onChange={props.handleChange}
        value={props.value}></input>
    </form>
  )
}

Search.propTypes = {
  value: PropTypes.any,
  setRef: PropTypes.func,
  handleSubmit: PropTypes.func
}

export default Search;