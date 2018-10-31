import React from 'react';

const User = (props) => (
  <div className="user">
        <div className="user-container">
        <div className="username">
          {props.username}
        </div>
        <div className="location">
          <span>{`${props.city}, ${props.state}`}</span>
          <br />
          <br />
        </div>
      </div>
  </div>
)


export default User;