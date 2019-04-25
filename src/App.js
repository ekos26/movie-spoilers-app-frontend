import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar";
import { connect } from 'react-redux';
import GroupsContainer from "./Container/GroupsContainer";
import { fetchGroups } from './actions/index';


class App extends React.Component {

  componentDidMount() {
    this.props.fetchGroups()
  }

  render() {
    return (
      <div>
        <Navbar />
        <GroupsContainer />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    groups: state.groups,
    filteredGroups: state.filteredGroups,
    selectedGroup: state.selectedGroup
  }
}

export default connect(mapStateToProps, { fetchGroups} )(App);
