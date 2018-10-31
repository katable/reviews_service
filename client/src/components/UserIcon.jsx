import React from 'react';

//splices out any non-string characters and gets the capitalized characters to display in icon
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

// import React from 'react';

// function getInitials(name) {
//   let characters = name.split("");
//   let str = "";
//   for (let i = 0; i < characters.length; i++) {
//         if (characters[i] === characters[i].toUpperCase()) {
//           str += characters[i];
//         }
//       }
//   return str;
// }

// const UserIcon = (props) => (
//   <div className = "profile-icon">
//     <div className = "name">
//       {getInitials(props.name)}
//     </div>
//   </div>
// )

// export default UserIcon;