import React from 'react';

const DropdownMenu = (props) => (
  <div id="dropdown-menu">
    Sort By
    <select className="dropdown">
      <option value="newest">Newest</option>
      <option value = "highest-rating">Highest Rating</option>
      <option value = "lowest-rating">Lowest Rating</option>
    </select>
  </div>
);

// class DropdownMenu extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       currentItem: {filter: 'Newest'},
//       selected: true
//     }
//   }

//   renderNewestData(event){
//     if (event.target.selected)
//   }

//   render() {
//     <DropdownMenu />
//   }
// } 

export default DropdownMenu;