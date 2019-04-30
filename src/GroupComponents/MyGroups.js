import React from 'react';
import { connect } from 'react-redux';
import { selectGroup } from '../actions/index';
import {withRouter} from 'react-router-dom';


class MyGroups extends React.Component {

  componentDidMount() {
    this.props.selectGroup(parseInt(this.props.match.params.id))
  }

  render () {
    const groups = []
    if (this.props.user) {
      this.props.user.groups.forEach((group,index) => {
        return groups.push(<li key={index}>{group.name}</li>)
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
  console.log('state', state);
  return {
    user: state.user,
    myGroups: state.myGroups
  }
}

export default withRouter(connect(mapStateToProps, {selectGroup})(MyGroups));
