import React from 'react'

class Search extends React.Component {

  state = {
    searchTerm: '',
    movieObj: null
  }

  searchHandler = (event) => {
    this.setState({searchTerm: event.target.value})
  };

  handleSubmit = (e) => {
    e.preventDefault();
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
  // , this.filterHandler()
  // filterHandler = () => {
  //   const filter = this.state.eventsArray.filter(event => {
  //     return event.address.toLowerCase().includes(this.state.searchTerm.toLowerCase())
  //   })
  //   this.setState({filteredArray: filter})
  // };
  render () {
    console.log(this.state.movieObj);
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="search" value={this.state.searchTerm} onChange={this.searchHandler} placeholder="Search For Movie"/>
      </form>

      {this.state.movieObj ?
        <div>
          <h3>Name: {this.state.movieObj.Title}</h3>
          <p>Year: {this.state.movieObj.Year}</p>
          <img alt="" src={this.state.movieObj.Poster}/>
          <p>Plot: {this.state.movieObj.Plot}</p>
          <button onClick={() => {
            console.log('click')
          }}>Add Selected Movie To Group</button>
        </div> : null
      }
      </div>
    )
  }
}

export default Search;
