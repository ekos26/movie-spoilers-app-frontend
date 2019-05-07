import React from 'react';
import { connect } from 'react-redux';
import { selectGroup, leaveGroup, leaveUserGroup, login } from '../actions/index';
import {withRouter} from 'react-router-dom';


class MyGroups extends React.Component {

  deleteHandler = (userGroupObj) => {
    console.log(userGroupObj)
    fetch(`http://localhost:3000/user_groups/${userGroupObj[0].id}`, {
      method: 'DELETE'
    })
  .then(resp => resp.json())
  .then(data => {
    this.props.leaveGroup(data.user_group)

    this.leaveUserGroup(data)

  })
  }

  leaveUserGroup = (data) => {
    console.log(data);
    this.props.leaveUserGroup(data)
  }


  render () {
    // console.log('does this run');
    const groups = []
    if (this.props.user) {
      console.log("User Groups", this.props.user.user_groups);
      // console.log(' props.user.groups:', this.props.user.groups);
      this.props.user.groups.forEach((group,index) => {
        console.log('group', group);
        return groups.push(<li key={index}>{group.name} <button id={group.id} onClick={() => {
            this.deleteHandler(
              this.props.user.user_groups.filter(pickedGroup => {
                return pickedGroup.group_id === group.id
              })
            )
          }}>Leave Group</button></li>)
      })
    }

    return (
      <div>
        {
          this.props.user ?
          <>
          <h3>Username: {this.props.user.username}</h3>
          <h3>Fullname: {this.props.user.fullname}</h3>
          <ul>
            Your Groups: {groups}
          </ul>
          </> : null }
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state.user)
  return {
    user: state.user,
    myGroups: state.myGroups
  }
}

export default withRouter(connect(mapStateToProps, {selectGroup, leaveGroup, leaveUserGroup, login})(MyGroups));
