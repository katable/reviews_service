import React from 'react';
import UserIcon from './UserIcon.jsx';
import style from './style.css';

const User = (props) => (
  <div className={style.user}>
    <div className={style.userContainer} style={{display: "inline-block"}}>
      <div className={style.picContainer}>
        <UserIcon name={props.username}/>
      </div>
      <div className={style.userTextContainer}>
      <div className={style.username} style = {{textAlign: "center"}}>
        <br />
        {props.username}
      </div>
      <br />
      <div className={style.location}>
        <span className={style.locationFont}>{`${props.city}, ${props.state}`}</span>
        <br />
        <br />
      </div>
      </div>
      </div>
  </div>
)

export default User;