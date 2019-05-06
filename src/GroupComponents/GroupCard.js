import React from 'react';
import { connect } from 'react-redux';
import { selectGroup, joinGroups, joinGroupsWithComment } from '../actions/index';
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

  render() {
    return (
        <div className="groupcard">
          <h3>Group Name: {this.props.group.name}</h3>

          <p>Movie: {this.props.movies[0] && this.props.movies[0].title}</p>
          <img alt="" src={this.props.movies[0] && this.props.movies[0].poster} />
          <h5>Users: </h5>
            <p>{this.props.movies[0] && this.props.group.users.map(user => user.fullname + " ")}</p>
          <Link to={`/groups/${this.props.group.id}`}>
            <button className="ui left attached button" onClick={() => {
              this.props.selectGroup(this.props.group.id)}}>More Details</button>
          </Link>
          <button className="ui right attached primary button" onClick={() => {
            this.props.joinGroups(this.props.user, this.props.group)}}>Join Group</button>
        </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, { selectGroup, joinGroups, joinGroupsWithComment })(GroupCard);
