import React from 'react';
import { connect } from 'react-redux';
import { selectGroup, joinGroups } from '../actions/index';
// import GroupDetails from './GroupDetails';
import {Link} from 'react-router-dom';


class GroupCard extends React.Component {

  render() {
    // console.log(this.props.group.id);

    return (
        <div>
          <h3>Group Name: {this.props.group.name}</h3>
          <p>Movie: {this.props.group.movies[0].title}</p>
          <img alt="" src={this.props.group.movies[0].poster} />
          <h5>Users: {this.props.group.users.map(user => user.fullname)}</h5>
          <Link to={`/groups/${this.props.group.id}`}>
            <button onClick={() => {
              this.props.selectGroup(this.props.group.id)}}>More Details</button>
          </Link>
          <button onClick={() => {
              this.props.joinGroups(this.props.user, this.props.group)}}>Join Group</button>
        </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    groups: state.groups,
    user: state.user,
    myGroups: state.myGroups
  }
}

export default connect(mapStateToProps, { selectGroup, joinGroups })(GroupCard);
