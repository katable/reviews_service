import React from 'react';

function getInitials (name) {
  let newName = name.replace(/[^A-Z]/g, '');
  if (newName.length === 0) {
    return "OT";
  }
  return newName.toUpperCase();
};

function randomizeColors() {
  let color = '#';
  let letters = '0123456789ABCDEF';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const UserIcon = (props) => (
  <div className = "profile-icon" 
  style={{background:randomizeColors()}}>
    <div className = "name">
      {getInitials(props.name)}
    </div>
  </div>
);

export default UserIcon;