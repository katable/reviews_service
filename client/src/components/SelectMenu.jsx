import React from 'react';
import style from './style.css';

const SelectMenu = (props) => (
  <div className={style.dropdownMenu}>
    <select className={style.dropdown} onChange={props.onSelectHandler} value={props.value}>
      <option value ="newest">Newest</option>
      <option value="oldest">Oldest</option>
      <option value = "highest-rating">Highest Rating</option>
      <option value = "lowest-rating">Lowest Rating</option>
    </select>
  </div>
);

export default SelectMenu;