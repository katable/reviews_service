import React from 'react';
import UserIcon from './UserIcon.jsx';

const User = (props) => (
  <div className="user">
        <div className="user-container">
        <div className="pic-container">
          <UserIcon name={props.username} />
        </div>
        <div className="user-text-container">
        <div className="username">
          <br />
          {props.username}
        </div>
        <br />
        <div className="location">
          <span className="location-font">{`${props.city}, ${props.state}`}</span>
          <br />
          <br />
        </div>
        </div>
      </div>
  </div>
)

export default User;