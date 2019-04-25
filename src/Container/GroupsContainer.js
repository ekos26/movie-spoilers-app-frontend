import React from 'react';
import { connect } from 'react-redux';
import GroupCard from "../GroupComponents/GroupCard"

class GroupsContainer extends React.Component {

  render() {
    let groups = this.props.groups.map(group => {
      return <GroupCard key={group.id} group={group}/>
    })

    return (
      <div>
        {groups}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    groups: state.groups,
  }
}


export default connect(mapStateToProps)(GroupsContainer);
