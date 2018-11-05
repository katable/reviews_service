import React from 'react';
import style from './style.css';

const SearchBar = (props) => (
  <div>
    <form className={style.searchContainer}>
      <input type="text" placeholder="Search.." name="search" onChange={props.onSearch}/>
      <button type="submit" className={style.searchButton}><i className="fa fa-search"></i></button>
    </form>
  </div> 
); //inline block?

export default SearchBar;