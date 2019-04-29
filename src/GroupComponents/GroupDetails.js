import React from 'react';
import { connect } from 'react-redux';

class GroupDetails extends React.Component {

  state = {
    clicked: false
  }
  // console.log(props)
  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }
  render() {
    return (
      <div>
        <h3>Group Name: {this.props.group.name}</h3>
        <p>Name: {this.props.group.movies[0].title}</p>
        <p>Year: {this.props.group.movies[0].year}</p>
        <img alt="" src={this.props.group.movies[0].poster}/>
        <p>Plot: {this.props.group.movies[0].plot}</p>
        <h5>Users: {this.props.group.users.map(user => user.fullname)}</h5>
        <button>Edit Group</button>
        <button>Delete Group</button>
        <button onClick={() => {
            console.log('click')
          }}>Add Spoiler</button>
        <button onClick={() => {
            this.handleClick()
          }}>See Spoilers</button>
        {this.state.clicked ? this.props.group.comments.map(comment => comment.content) : null}
      </div>
    )
  }

}
// <button onClick={() => {
//     this.props.joinGroups(this.props.user, this.props.group)}}>Join Group</button>

const mapStateToProps = state => {
  // console.log(state)

  return {
    group: state.groups.find(group => {
      return group.id === state.selectedGroup
    })
  }
}



// mapStateToProps selectedGroup
export default connect(mapStateToProps)(GroupDetails);
