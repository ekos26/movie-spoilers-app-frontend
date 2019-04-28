import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar";
import { connect } from 'react-redux';
import GroupsContainer from "./Container/GroupsContainer";
import {Route, Switch, withRouter} from 'react-router-dom';
import GroupDetails from './GroupComponents/GroupDetails';
import MyGroups from './GroupComponents/MyGroups';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import { autoLogin, fetchGroups, login, getUser } from './actions/index';



class App extends React.Component {

  componentDidMount() {
    this.props.fetchGroups()
    if (localStorage.getItem('token')) {
      this.props.getUser()
    }
  }
  // render() {
  //     return(
  //       <div>
  //         {this.props.user}
  //       </div>
  //     )
  // }

  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route path='/groups/:id' component={GroupDetails} />
          <Route path='/groups' component={GroupsContainer} />
          <Route path='/mygroups' component={MyGroups} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
          <Route path='/' component={Home} />
        </Switch>
        <div>
          {this.props.user.fullname}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    groups: state.groups,
    user: state.user
  }
}

export default withRouter(connect(mapStateToProps, { fetchGroups, getUser } )(App));
