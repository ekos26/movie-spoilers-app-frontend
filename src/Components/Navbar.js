import React from 'react';
import {NavLink} from 'react-router-dom';


class Navbar extends React.Component {
  render () {
    return (
      <>
        <div className="navbar">
          <NavLink to='/'>
            Home
          </NavLink>
        <br/>

        <NavLink to='/groups'>
          Groups
        </NavLink>
        <br/>

        <NavLink to='/login'>
          Login
        </NavLink>
        <br/>

        <NavLink to='/mygroups'>
          My Groups
        </NavLink>

        </div>
      </>
    )
  }
}

//change mygroups to only when you are logged in


export default Navbar;
