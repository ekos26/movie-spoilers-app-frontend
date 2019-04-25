import React from 'react';
import { connect } from 'react-redux';
import { selectGroup } from '../actions/index';
import GroupDetails from './GroupDetails'

class GroupCard extends React.Component {

  render() {
    console.log(this.props.group.id);

    return (
        <div>
          <h3>Group Name: {this.props.group.name}</h3>
          <p>Movie Name: {this.props.group.movies[0].title}</p>
          <img alt="" src={this.props.group.movies[0].poster} />
          <h5>Users: {this.props.group.users.map(user => user.fullname)}</h5>
          <button onClick={() => {
            this.props.selectGroup(this.props.group.id)
          }}>More Details</button>
        </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    groups: state.groups
  }
}

export default connect(mapStateToProps, { selectGroup })(GroupCard);
