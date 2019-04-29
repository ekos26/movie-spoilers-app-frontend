import React from 'react';
import {joinGroupsWithComment} from '../actions/index';
import { connect } from 'react-redux';

class CommentForm extends React.Component {

  state = {
    comment:'',
  }

  changeHandler = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  submitHandler = (event) => {
    event.preventDefault();
    this.props.joinGroupsWithComment(this.state.comment, this.props.user, this.props.group)
    this.setState({comment:''})
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <textarea placeholder="Spoiler" name="comment" value={this.state.comment} onChange={this.changeHandler}></textarea>
        <input type="submit" value="Add Spoiler and Join Group" />
      </form>
    )
  }
}

const mapStateToProps = state => {
  return {
    myGroups: state.myGroups,
    user: state.user,
    groups: state.groups
  }
}

export default connect(mapStateToProps, {joinGroupsWithComment})(CommentForm);
