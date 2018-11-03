import React from 'react';

const SearchBar = (props) => (
  <div>
    <form className="searchbar-container" action="action_page.php">
      <input type="text" placeholder="Search.." name="search" />
      <button type="submit"><i className="fa fa-search"></i></button>
    </form>
  </div>
);

export default SearchBar;