import React from 'react';
import { connect } from 'react-redux';
import CommentFormJoinGroup from './CommentFormJoinGroup'
import {withRouter} from 'react-router-dom';
import { selectGroup } from '../actions/index';
import Search from './Search';
import {joinGroupsWithComment} from '../actions/index';


class GroupDetails extends React.Component {

  state = {
    clicked: false,
    clickedComment: false,
    clickedAddMovie: false,
    spoiledMovie: null,
    renderedMovie: false
  }

  componentDidMount() {
    this.props.selectGroup(parseInt(this.props.match.params.id))
  }

  handleClick = (selectedMovie) => {
    this.setState({
      clicked: !this.state.clicked,
      spoiledMovie: selectedMovie
    })
  }

  handleAddMovieClick = () => {
    this.setState({
      clickedAddMovie: !this.state.clickedAddMovie
    })
  }

  handleClickedComment = (selectedMovie) => {
    this.setState({
      clickedComment: !this.state.clickedComment,
      spoiledMovie: selectedMovie
    })
  }

  renderCommentInMovie = () => {
    // this.props.joinGroupsWithComment(this.state.comment, this.props.user, this.props.selectedMovie)
    this.setState({
      renderedMovie: true
    })
  }

  render() {
    console.log('render???');
      return (

            <div>
              {
                this.props.group
                ? <>
                <h3>Group Name: {this.props.group.name}</h3>
                <h5>Users: {this.props.group.users.map(user => user.fullname)}</h5>
                <button onClick={() => {
                    this.handleAddMovieClick()
                  }}>Search For Movie</button>
                {this.state.clickedAddMovie ? <Search group={this.props.group}/> : null}

              {this.props.group.movies.map(singleMovie => (
              <div key={singleMovie.id}>
                <p>Name: {singleMovie.title}</p>
                <p>Year: {singleMovie.year}</p>
                <img alt="" src={singleMovie.poster}/>
                <p>Plot: {singleMovie.plot}</p>
                <button onClick={() => {
                    this.handleClickedComment(singleMovie)
                  }}>Add Spoiler</button>
                {this.state.clickedComment && this.state.spoiledMovie === singleMovie ? <CommentFormJoinGroup group={this.props.group} selectedMovie={singleMovie.id}/> : null}
                  <button onClick={() => {
                      this.handleClick(singleMovie)
                    }}>See Spoilers</button>
                  {this.state.clicked && this.state.spoiledMovie === singleMovie ?  singleMovie.comments.map(comment => comment.content) : null}
              </div>
              ))}
                </>
                  : null
              }
            </div>
      )
    }
  }


  const mapStateToProps = state => {
    console.log(state.groups.groups);
    console.log('selected', state.groups.selectedGroup);
    return {
      group: state.groups.groups.find(group => {
        return group.id === state.groups.selectedGroup
      })
    }
    // console.log('STATE', state);
  }



  export default withRouter(connect(mapStateToProps, {selectGroup, joinGroupsWithComment})(GroupDetails));
