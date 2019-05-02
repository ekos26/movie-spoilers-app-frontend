import React from 'react';
import { connect } from 'react-redux';
import CommentFormJoinGroup from './CommentFormJoinGroup'
import {withRouter} from 'react-router-dom';
import { selectGroup } from '../actions/index';
import Search from './Search';


class GroupDetails extends React.Component {

  state = {
    clicked: false,
    clickedComment: false,
    clickedAddMovie: false
  }

  componentDidMount() {
    this.props.selectGroup(parseInt(this.props.match.params.id))
  }

  handleClick = (selectedMovieId) => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  handleAddMovieClick = () => {
    this.setState({
      clickedAddMovie: !this.state.clickedAddMovie
    })
  }

  handleClickedComment = (selectedMovieId) => {
    this.setState({
      clickedComment: !this.state.clickedComment
    })
  }

  render() {
      return (
            <div>
              {
                this.props.group
                ? <>
                <h3>Group Name: {this.props.group.name}</h3>
                <h5>Users: {this.props.group.users.map(user => user.fullname)}</h5>
                <button onClick={() => {
                    this.handleAddMovieClick()
                  }}>Add Movie</button>
                {this.state.clickedAddMovie ? <Search group={this.props.group}/> : null}

              {this.props.group.movies.map(singleMovie => (
              <div key={singleMovie.id}>
                <p>Name: {singleMovie.title}</p>
                <p>Year: {singleMovie.year}</p>
                <img alt="" src={singleMovie.poster}/>
                <p>Plot: {singleMovie.plot}</p>
                <button onClick={() => {
                    this.handleClickedComment(singleMovie.id)
                  }}>Add Spoiler</button>
                {this.state.clickedComment ? <CommentFormJoinGroup group={this.props.group} selectedMovie={singleMovie.id}/> : null}
                  <button onClick={() => {
                      this.handleClick(singleMovie.id)
                    }}>See Spoilers</button>
                  {this.state.clicked ?  singleMovie.comments.map(comment => comment.content) : null}
              </div>
              ))}
                </>
                  : null
              }
            </div>
      )
    }
  }

  // this.props.group.comments.map(comment => comment.content)

  const mapStateToProps = state => {
    return {
      group: state.groups.find(group => {
        return group.id === state.selectedGroup
      })
    }
  }



  export default withRouter(connect(mapStateToProps, {selectGroup})(GroupDetails));
