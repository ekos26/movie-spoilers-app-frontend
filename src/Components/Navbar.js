import React from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


class Navbar extends React.Component {

  logout = () => {
    localStorage.removeItem("token")
  // console.log(this.props);
    this.props.history.push("/")
  }

  render () {
    return (
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

      <button onClick={this.logout}>Logout</button>

      </div>
    )
  }
}

// {this.props.username ?
//   <NavLink to='/mygroups'>
//     My Groups
//   </NavLink> : null
// }
//change mygroups to only when you are logged in

const mapStateToProps = state => {
  return {
    user: state.user
  }
}


export default withRouter(connect(mapStateToProps)(Navbar));
