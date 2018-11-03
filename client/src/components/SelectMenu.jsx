import React from 'react';

const SelectMenu = (props) => (
  <div className="dropdown-menu">
    Sort By
    <select className="dropdown" onChange={props.onSelectHandler} value={props.value}>
      <option value ="newest">Newest</option>
      <option value = "highest-rating">Highest Rating</option>
      <option value = "lowest-rating">Lowest Rating</option>
    </select>
  </div>
);

export default SelectMenu;