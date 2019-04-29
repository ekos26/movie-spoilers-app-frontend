import React from 'react';
import { connect } from 'react-redux';
import CommentFormJoinGroup from './CommentFormJoinGroup'
import {withRouter} from 'react-router-dom';
import { selectGroup } from '../actions/index';



class GroupDetails extends React.Component {

  state = {
    clicked: false,
    clickedComment: false
  }
  // console.log(props)

  componentDidMount() {
    this.props.selectGroup(parseInt(this.props.match.params.id))
  }

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  handleClickedComment = () => {
    this.setState({
      clickedComment: !this.state.clickedComment
    })
  }

  render() {
    // console.log(this.props.group);
    return (

          <div>
            {
              this.props.group
              ? <>
              <h3>Group Name: {this.props.group.name}</h3>
              <p>Name: {this.props.group.movies[0].title}</p>
              <p>Year: {this.props.group.movies[0].year}</p>
              <img alt="" src={this.props.group.movies[0].poster}/>
              <p>Plot: {this.props.group.movies[0].plot}</p>
              <h5>Users: {this.props.group.users.map(user => user.fullname)}</h5>
              <button>Edit Group</button>
              <button>Delete Group</button>
              <button onClick={() => {
                  this.handleClickedComment()
                }}>Add Spoiler</button>
                {this.state.clickedComment ? <CommentFormJoinGroup group={this.props.group}/> : null}
                <button onClick={() => {
                    this.handleClick()
                  }}>See Spoilers</button>
                  {this.state.clicked ? this.props.group.comments.map(comment => comment.content) : null}
                  </>
                : null
            }
          </div>
    )
  }

}

const mapStateToProps = state => {
  console.log(state);
  return {
    group: state.groups.find(group => {
      return group.id === state.selectedGroup
    })
  }
}



export default withRouter(connect(mapStateToProps, {selectGroup})(GroupDetails));
