import React from 'react';
import { connect } from 'react-redux';
import GroupCard from "../GroupComponents/GroupCard";
import CreateGroupForm from '../GroupComponents/CreateGroupForm';


class GroupsContainer extends React.Component {

  state = {
    clicked: false
  }

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    // console.log('LOOKIT THESE PROPS', this.props.groups);

    let groups = this.props.groups.map(group => {
      // console.log('THIS IS THE GROUP', group.movies);
      return <GroupCard key={group.id} group={group} movies={group.movies}/>
    })

    // console.log('THIS IS WHAT WE NEED TO RERENDER');

    return (
      <div>
        <button onClick={() => {
            this.handleClick()
          }}>Create Group</button>
        {this.state.clicked ? <CreateGroupForm group={this.props.group}/> : null}
        {groups}
      </div>
    )
  }
}

const mapStateToProps = state => {
  // console.log(state.groups.groups);
  return {
    groups: state.groups.groups
  }
}


export default connect(mapStateToProps)(GroupsContainer);
