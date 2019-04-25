import React from 'react';
import { connect } from 'react-redux';

const GroupDetails = (props) => {

  return (
    <div>
      <h3>Group Name: {props.group.name}</h3>
      <p>Name: {props.group.movies[0].title}</p>
      <p>Year: {props.group.movies[0].year}</p>
      <p>Poster: {props.group.movies[0].poster}</p>
      <p>Plot: {props.group.movies[0].plot}</p>
      <h5>Users: {props.group.users.map(user => user.fullname)}</h5>
    </div>
  )
}



export default connect()(GroupDetails);
