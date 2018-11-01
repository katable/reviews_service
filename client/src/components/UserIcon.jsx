import React from 'react';

function getInitials (name) {
  let newName = name.replace(/[^A-Z]/g, '');
  return newName.toUpperCase();
}

function loopColors() { //inline style
  let color = '#';
  let letters = '0123456789ABCDEF';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// document.getElementByClassName

const UserIcon = (props) => (
  <div className = "profile-icon">
    <div className = "name">
      {getInitials(props.name)}
    </div>
  </div>
)

export default UserIcon;
// export default loopColors;