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
        <div className="ui massive menu">
          <div className="item">
          <NavLink to='/' className="home">
            Home
          </NavLink>
          </div>


        {!!token ?
          <div className="item">
            <NavLink to='/groups' className="home">
              Groups
            </NavLink></div> : null
        }


        {!!token ?
          <div className="item">
          <NavLink to='/mygroups' className="home">
            My Groups
          </NavLink></div> : null
        }



        {!!token ? <div className="item"><button className="ui blue basic button" onClick={this.logout}>Logout</button></div> :
        <div className="item"><NavLink to='/login' className="home">
          Login
        </NavLink>
      </div>}


        <div className="welcome">
          <div className="item">
          {!!token && this.props.user ? `Hello ${this.props.user.fullname}!` : null}
        </div>
          </div>

      </div>

    )
  }
}


const mapStateToProps = state => {
  return {
    user: state.user
  }
}


export default withRouter(connect(mapStateToProps)(Navbar));
