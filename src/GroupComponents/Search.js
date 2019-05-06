import React from 'react'
import { addMovie } from '../actions/index';
import { connect } from 'react-redux';


class Search extends React.Component {

  state = {
    searchTerm: '',
    movieObj: null
  }

  searchHandler = (event) => {
    this.setState({searchTerm: event.target.value})
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let newSearchTerm = this.state.searchTerm.split(" ").join("+");
    fetch('http://localhost:3000/api/movies', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: newSearchTerm
      })
    })
    .then(res => res.json())
    .then(movieObj => {
      this.setState({
        movieObj: movieObj
      })
    })
  }

  render () {
    return (
      <div>

            <form onSubmit={this.handleSubmit}>
              <div className="ui grid">
                <div className="six wide column">
                  <div className="ui search">
                    <div className="ui icon input">
                      <i className="search icon"></i>
                          <input className="prompt" type="text" name="search" value={this.state.searchTerm} onChange={this.searchHandler} placeholder="search"/>
                    </div>
                  </div>
                </div>
              </div>
            </form>

      {this.state.movieObj ?
        <div>
          <h3>Name: {this.state.movieObj.Title}</h3>
          <p>Year: {this.state.movieObj.Year}</p>
          <img alt="" src={this.state.movieObj.Poster}/>
          <p>Plot: {this.state.movieObj.Plot}</p>
          <button onClick={() => {
            this.props.addMovie(this.state.movieObj, this.props.group)
          }}>Add Selected Movie To Group</button>
        </div> : null
      }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    groups: state.groups
  }
}

export default connect(mapStateToProps, {addMovie})(Search);
