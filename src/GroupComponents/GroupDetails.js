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
    clickedAddMovie: false,
    spoiledMovie: null,
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

  render() {
    // console.log('render???');
    let name = []
     if (this.props.group) {
       this.props.group.users.map(user => name.push(user.fullname))
     }
      return (
            <div>
              {
                this.props.group
                ? <div className="whole thing">
                <div className="group details">
                <h3>{this.props.group.name}</h3>
                <h5>Followers: {name.join(", ")}</h5>
                <button className="ui teal button" onClick={() => {
                    this.handleAddMovieClick()
                  }}>Search For Movie</button>
                {this.state.clickedAddMovie ? <Search group={this.props.group}/> : null}
                </div>

              <div className="groups">
              {this.props.group.movies.map(singleMovie => (
              <div key={singleMovie.id}>
                <div className="groupcard" key={singleMovie.id}>
                  <h2>{singleMovie.title}</h2>
                  <h4>{singleMovie.year}</h4>
                  <img alt="" src={singleMovie.poster}/>
                  <p>{singleMovie.plot}</p>
                  <button className="ui blue button" onClick={() => {
                      this.handleClickedComment(singleMovie)
                    }}>Add Spoiler</button>
                  {this.state.clickedComment && this.state.spoiledMovie === singleMovie ? <CommentFormJoinGroup group={this.props.group} selectedMovie={singleMovie.id}/> : null}
                    <button className= "ui blue animated button" onClick={() => {
                        this.handleClick(singleMovie)
                      }}>
                      <div className="visible content">
                      See Spoilers
                      </div>
                      <div className="hidden content">
                        Are you sure?
                      </div>
                    </button><br/><br/>
                  {this.state.clicked && this.state.spoiledMovie === singleMovie ?  singleMovie.comments.map(comment => <p>{comment.content + " "}</p>) : null}
                </div>
              </div>
              ))}
              </div>
            </div>
                  : null
              }
            </div>
      )
    }
  }


  const mapStateToProps = state => {
    // console.log(state.groups.groups);
    // console.log('selected', state.groups.selectedGroup);
    return {
      group: state.groups.groups.find(group => {
        return group.id === state.groups.selectedGroup
      })
    }
    // console.log('STATE', state);
  }



  export default withRouter(connect(mapStateToProps, {selectGroup})(GroupDetails));
