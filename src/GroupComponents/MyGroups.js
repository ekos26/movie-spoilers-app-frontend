import React from 'react';
import { connect } from 'react-redux';

class MyGroups extends React.Component {

  render () {
    const groups = []
    if (this.props.user.groups) {
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
    user: state.user
  }
}

export default connect(mapStateToProps)(MyGroups);
