import React from 'react';
import { connect } from 'react-redux';

const GroupDetails = (props) => {
  console.log(props)
  return (
    <div>
      <h3>Group Name: {props.group.name}</h3>
      <p>Name: {props.group.movies[0].title}</p>
      <p>Year: {props.group.movies[0].year}</p>
      <img alt="" src={props.group.movies[0].poster}/>
      <p>Plot: {props.group.movies[0].plot}</p>
      <h5>Users: {props.group.users.map(user => user.fullname)}</h5>
    </div>
  )
}

const mapStateToProps = state => {
  console.log(state)

  return {
    group: state.groups.find(group => {
      return group.id === state.selectedGroup
    })
  }
}



// mapStateToProps selectedGroup
export default connect(mapStateToProps)(GroupDetails);
