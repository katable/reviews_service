import React from 'react';
import style from './style.css';

const SearchBar = (props) => (
  <div>
    <form className={style.searchContainer}>
      <input type="text" placeholder="Search..." name="search" onChange={props.onSearch} className={style.inputText}/>
    </form>
  </div> 
); 

export default SearchBar;