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
    return (
        <div className="navbar">
          <NavLink to='/'>
            Home
          </NavLink>
        <br/>

        {this.props.user.username ?
            <NavLink to='/groups'>
              Groups
            </NavLink> : null
        }
      <br/>

        {this.props.user.username ? null : <NavLink to='/login'>
          Login
        </NavLink>}

        <br/>

          {this.props.user.username ?
            <NavLink to='/mygroups'>
              My Groups
            </NavLink> : null
          }

          {this.props.user.username ?
          <button onClick={this.logout}>Logout</button> : null}

        <div>
          {this.props.user.fullname ? `Welcome back ${this.props.user.fullname}!` : null}
        </div>

      </div>

    )
  }
}

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
