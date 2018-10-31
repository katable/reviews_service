import React from 'react';

function getInitials (name) {
  let newName = name.replace(/[^A-Z]/g, '');
  return newName.toUpperCase();
}

const UserIcon = (props) => (
  <div className = "profile-icon">
    <div className = "name">
      {getInitials(props.name)}
    </div>
  </div>
)

export default UserIcon;