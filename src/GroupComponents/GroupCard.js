import React from 'react';
import { connect } from 'react-redux';
import { selectGroup, joinGroups, joinGroupsWithComment, userJoinGroup, autoLogin } from '../actions/index';
import {Link} from 'react-router-dom';


class GroupCard extends React.Component {

  state = {
    clicked: false,
    renderFormClick: false
  }

  handleState = () => {
    this.setState({
      renderFormClick: !this.state.renderFormClick
    })
  }

  joinGroup = (user, group) => {
    this.props.joinGroups(user, group)
    this.props.userJoinGroup(group)
  }

  render() {
    let names = []
    this.props.movies[0] && this.props.group.users.map(user => names.push(user.fullname))
    return (
        <div className="groupcard">
          <h3>Group Name: {this.props.group.name}</h3>

          
          <img alt="" src={this.props.movies[0] && this.props.movies[0].poster} />
          <h5>Users: </h5>
            <p>{names.join(', ')}</p>
          <Link to={`/groups/${this.props.group.id}`}>
            <button className="ui left attached button" onClick={() => {
              this.props.selectGroup(this.props.group.id)}}>More Details</button>
          </Link>
          <button className="ui right attached primary button" onClick={() => {
              this.joinGroup(this.props.user, this.props.group)
            }}>Join Group</button>
        </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, { selectGroup, joinGroups, joinGroupsWithComment, userJoinGroup, autoLogin })(GroupCard);
