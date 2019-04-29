import React from 'react';
import { connect } from 'react-redux';
import { selectGroup, joinGroups, joinGroupsWithComment } from '../actions/index';
// import GroupDetails from './GroupDetails';
import {Link} from 'react-router-dom';
import CommentForm from './CommentForm';


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
          <button onClick={() => this.handleState()}>Join Group With Spoiler</button>
            {this.state.renderFormClick ? <CommentForm group={this.props.group} /> : null}
        </div>
    )
  }
}

// {this.state.clicked ?
//   this.props.joinGroupsWithComment(this.props.content, this.props.user, this.props.group) : null}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, { selectGroup, joinGroups, joinGroupsWithComment })(GroupCard);
