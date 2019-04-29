import React from 'react';
import { connect } from 'react-redux';

class MyGroups extends React.Component {

  render () {
    let token = localStorage.getItem('token');
    const groups = []
    console.log(this.props.user)
    if (this.props.user) {
      this.props.user.groups.forEach((group,index) => {
        return groups.push(<li key={index}>{group.name}</li>)
      })
    } else {
      return "You need to be logged in to see your groups."
    }

    return (
      <div>
        <h3>Username: {this.props.user.username}</h3>
        <h3>Fullname: {this.props.user.fullname}</h3>
        <ul>
          Your Groups: {groups}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('state', state);
  return {
    user: state.user,
    myGroups: state.myGroups
  }
}

export default connect(mapStateToProps)(MyGroups);
