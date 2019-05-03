import React from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


class Navbar extends React.Component {

  logout = () => {
    localStorage.removeItem("token")
    this.props.history.push("/")
  }

  render () {
    let token = localStorage.getItem('token');

    return (
        <div className="navbar">
          <NavLink to='/'>
            Home
          </NavLink>
        <br/>

        {!!token ?
            <NavLink to='/groups'>
              Groups
            </NavLink> : null
        }
      <br/>

        {!!token ? <button onClick={this.logout}>Logout</button> : <NavLink to='/login'>
          Login
        </NavLink>}

        <br/>

          {!!token ?
            <NavLink to='/mygroups'>
              My Groups
            </NavLink> : null
          }


        <div>
          {!!token && this.props.user ? `Welcome ${this.props.user.fullname}!` : null}
        </div>

      </div>

    )
  }
}
// {!!token ?
//   <button onClick={this.logout}>Logout</button> : null}

// { this.props.getUser(this.props.user.id) ?
// : null
// }
//change mygroups to only when you are logged in

const mapStateToProps = state => {
  // console.log('state', state);
  return {
    user: state.user
  }
}


export default withRouter(connect(mapStateToProps)(Navbar));

// { getUser }
