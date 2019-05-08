import React from 'react';
import {joinGroupsWithComment} from '../actions/index';
import { connect } from 'react-redux';

class CommentFormJoinGroup extends React.Component {

  state = {
    comment:''
  }

  changeHandler = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  submitHandler = (event) => {
    event.preventDefault();
    this.props.joinGroupsWithComment(this.state.comment, this.props.user, this.props.selectedMovie)
    this.setState({comment:''})
  }

  render() {
    return (
      <form className="ui form" onSubmit={this.submitHandler}>
        <div className="field">
          <input type="text" placeholder="Spoiler" name="comment" value={this.state.comment} onChange={this.changeHandler}/>
        </div>
          <button className="ui teal button" type="submit">Submit Spoiler here</button>
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

export default connect(mapStateToProps, {joinGroupsWithComment})(CommentFormJoinGroup);
