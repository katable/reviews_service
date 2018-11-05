import React from 'react';
import style from './style.css';

const SearchBar = (props) => (
  <div>
    <form className={style.searchContainer}>
      <input type="text" placeholder="&#xf167; Search" name="search" onChange={props.onSearch} />
    </form>
  </div> 
); 

export default SearchBar;


// const SearchBar = (props) => (
//   <div>
//     <form className={style.searchContainer}>
//       <input type="text" placeholder="Search.." name="search" onChange={props.onSearch}/>
//       <button type="submit" className={style.searchButton}><i className="fa fa-search"></i></button>
//     </form>
//   </div> 
// ); 

// export default SearchBar;