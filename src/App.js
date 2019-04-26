import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar";
import { connect } from 'react-redux';
import GroupsContainer from "./Container/GroupsContainer";
import { fetchGroups } from './actions/index';
import {Route, Switch, withRouter} from 'react-router-dom';
import GroupDetails from './GroupComponents/GroupDetails';
import Home from './Components/Home'
import Login from './Components/Login'
import Signup from './Components/Signup'


class App extends React.Component {

  componentDidMount() {
    this.props.fetchGroups()
  }

  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route path='/groups/:id' component={GroupDetails} />
          <Route path='/groups' component={GroupsContainer} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
          <Route path='/' component={Home} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    groups: state.groups,
    filteredGroups: state.filteredGroups
  }
}

export default withRouter(connect(mapStateToProps, { fetchGroups} )(App));
